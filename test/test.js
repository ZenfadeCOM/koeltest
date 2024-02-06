#!/usr/bin/env node

/* jshint esversion: 8 */
/* global describe */
/* global before */
/* global after */
/* global it */
/* global xit */

'use strict';

require('chromedriver');

const execSync = require('child_process').execSync,
    expect = require('expect.js'),
    path = require('path'),
    { Builder, By, until } = require('selenium-webdriver'),
    { Options } = require('selenium-webdriver/chrome');

describe('Application life cycle test', function () {
    this.timeout(0);

    const LOCATION = 'test';
    const TEST_TIMEOUT = 10000;
    const EXEC_ARGS = { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' };

    let browser, app;

    before(function () {
        const options = new Options();
        options.windowSize({ width: 1280, height: 1024 });
        options.setUserPreferences({'profile.default_content_setting_values.notifications': 2});
        browser = new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    after(function () {
        browser.quit();
    });

    async function waitForElement(elem) {
        await browser.wait(until.elementLocated(elem), TEST_TIMEOUT);
        await browser.wait(until.elementIsVisible(browser.findElement(elem)), TEST_TIMEOUT);
    }

    async function login(username, password) {
        await browser.get('https://' + app.fqdn);
        await waitForElement(By.xpath('//input[@type="email"]'));
        await browser.findElement(By.xpath('//input[@type="email"]')).sendKeys(username);
        await browser.findElement(By.xpath('//input[@type="password"]')).sendKeys(password);
        await browser.findElement(By.xpath('//button[@type="submit"]')).click();
        await waitForElement(By.xpath('//span[text()=" Current Queue "]'));
    }

    async function logout() {
        await browser.get('https://' + app.fqdn);
        await waitForElement(By.xpath('//button[@data-title="Log out"]'));
        await browser.sleep(5000);
        await browser.findElement(By.xpath('//button[@data-title="Log out"]')).click();
        await waitForElement(By.xpath('//input[@type="email"]'));
        await browser.sleep(5000);
    }

    function getAppInfo() {
        const inspect = JSON.parse(execSync('cloudron inspect'));
        app = inspect.apps.filter(function (a) { return a.location.indexOf(LOCATION) === 0; })[0];
        expect(app).to.be.an('object');
    }

    xit('build app', function () { execSync('cloudron build', EXEC_ARGS); });
    it('install app', function () { execSync('cloudron install --location ' + LOCATION, EXEC_ARGS); });

    it('can get app information', getAppInfo);

    it('can admin login', login.bind(null, 'admin@koel.dev', 'KoelIsCool'));
    it('can logout', logout);

    it('restart app', function () { execSync('cloudron restart --app ' + app.id, EXEC_ARGS); });
    it('can admin login', login.bind(null, 'admin@koel.dev', 'KoelIsCool'));
    it('can logout', logout);

    it('backup app', function () { execSync('cloudron backup create --app ' + app.id, EXEC_ARGS); });

    it('restore app', function () {
        const backups = JSON.parse(execSync(`cloudron backup list --raw --app ${app.id}`));
        execSync('cloudron uninstall --app ' + app.id, EXEC_ARGS);
        execSync('cloudron install --location ' + LOCATION, EXEC_ARGS);
        getAppInfo();
        execSync(`cloudron restore --backup ${backups[0].id} --app ${app.id}`, EXEC_ARGS);
    });

    it('can admin login', login.bind(null, 'admin@koel.dev', 'KoelIsCool'));
    it('can logout', logout);

    it('move to different location', function () {
        browser.manage().deleteAllCookies();
        execSync('cloudron configure --location ' + LOCATION + '2 --app ' + app.id, EXEC_ARGS);
        getAppInfo();
    });

    it('can admin login', login.bind(null, 'admin@koel.dev', 'KoelIsCool'));
    it('can logout', logout);

    it('uninstall app', function () { execSync('cloudron uninstall --app ' + app.id, EXEC_ARGS); });

    // test update
    it('can install app', function () { execSync(`cloudron install --appstore-id dev.koel.cloudronapp --location ${LOCATION}`, EXEC_ARGS); });
    it('can get app information', getAppInfo);

    it('can update', function () { execSync('cloudron update --app ' + app.id, EXEC_ARGS); });
    it('can get app information', getAppInfo);

    it('can admin login', login.bind(null, 'admin@koel.dev', 'KoelIsCool'));
    it('can logout', logout);

    it('uninstall app', function () { execSync('cloudron uninstall --app ' + app.id, EXEC_ARGS); });
});
