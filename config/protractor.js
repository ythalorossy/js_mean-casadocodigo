exports.config = {
    
    specs: ['../test/e2e/**/*.js'],
    
    onPrepare: function () {

        var config = require('./config')();
        
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.xpath(".//*[@id='entrar']/h1")).click();
        browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser);
        browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
        browser.driver.findElement(by.name('commit')).click();
    }
};