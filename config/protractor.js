exports.config = {
    
    specs: ['../test/e2e/**/*.js'],
    
    onPrepare: function () {
    
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.xpath(".//*[@id='entrar']/h1")).click();
        browser.driver.findElement(by.id('login_field')).sendKeys('ythalorossy@gmail.com');
        browser.driver.findElement(by.id('password')).sendKeys('$$$');
        browser.driver.findElement(by.name('commit')).click();
    }
};