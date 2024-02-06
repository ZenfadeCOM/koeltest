#!/bin/bash

set -eu

mkdir -p /run/koel/framework-cache /app/data/library /run/koel/logs /run/koel/bootstrap-cache /app/data/public/img

readonly ARTISAN="sudo -E -u www-data php /app/code/artisan"

export CLOUDRON_MAIL_FROM_DISPLAY_NAME="${CLOUDRON_MAIL_FROM_DISPLAY_NAME:-Koel}"

if [[ ! -f /app/data/env ]]; then
    echo "==> First run"
    mkdir -p /app/data/storage
    cp -R /app/code/storage.template/* /app/data/storage
    cp /app/pkg/env.template /app/data/env
fi

[[ -z "$(ls -A /app/data/public/img)" ]] && cp -r /app/code/public/img.template/* /app/data/public/img

# sessions, logs and cache
rm -rf /app/data/storage/framework/cache && ln -s /run/koel/framework-cache /app/data/storage/framework/cache
rm -rf /app/data/storage/logs && ln -s /run/koel/logs /app/data/storage/logs

chown -R www-data:www-data /run/koel /app/data

echo "==> Initializing or migrating koel"
$ARTISAN koel:init --no-assets --no-interaction

if [[ ! -f /app/data/php.ini ]]; then
    echo -e "; Add custom PHP configuration in this file\n; Settings here are merged with the package's built-in php.ini\n\n" > /app/data/php.ini
fi

echo "==> Clearing caches"
$ARTISAN view:clear

echo "==> Starting Apache"
APACHE_CONFDIR="" source /etc/apache2/envvars
rm -f "${APACHE_PID_FILE}"
exec /usr/sbin/apache2 -DFOREGROUND

