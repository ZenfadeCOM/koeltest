FROM cloudron/base:4.2.0@sha256:46da2fffb36353ef714f97ae8e962bd2c212ca091108d768ba473078319a47f4

RUN mkdir -p /app/code /app/pkg
WORKDIR /app/code

ARG VERSION=6.12.1

RUN curl -LSs https://github.com/koel/koel/releases/download/v${VERSION}/koel-v${VERSION}.tar.gz | tar -xz -C /app/code/ --strip-components 1 -f -
RUN composer install --no-interaction --no-suggest --no-dev --optimize-autoloader
RUN composer clear-cache

# configure apache
RUN rm /etc/apache2/sites-enabled/*
RUN sed -e 's,^ErrorLog.*,ErrorLog "|/bin/cat",' -i /etc/apache2/apache2.conf
COPY apache/mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf

RUN a2disconf other-vhosts-access-log
ADD apache/koel.conf /etc/apache2/sites-enabled/koel.conf
RUN echo "Listen 8000" > /etc/apache2/ports.conf

# configure mod_php
RUN a2enmod rewrite

# Note that the sessions stuff is unused because koel uses lavarel sessions (storage/framework/sessions)
RUN crudini --set /etc/php/8.1/apache2/php.ini PHP upload_max_filesize 25M && \
    crudini --set /etc/php/8.1/apache2/php.ini PHP post_max_size 25M && \
    crudini --set /etc/php/8.1/apache2/php.ini PHP memory_limit 512M

RUN ln -s /app/data/php.ini /etc/php/8.1/apache2/conf.d/99-cloudron.ini && \
    ln -s /app/data/php.ini /etc/php/8.1/cli/conf.d/99-cloudron.ini

RUN chmod -R g+rw /app/code/storage \
    && mv /app/code/storage /app/code/storage.template && ln -s /app/data/storage /app/code/storage \
    && mv /app/code/bootstrap/cache /app/code/bootstrap/cache.template && ln -s /run/koel/bootstrap-cache /app/code/bootstrap/cache \
    && mv /app/code/public/img /app/code/public/img.template && ln -s /app/data/public/img /app/code/public/img \
    && ln -sf /app/data/env /app/code/.env

ADD env.template start.sh /app/pkg/

CMD [ "/app/pkg/start.sh" ]

