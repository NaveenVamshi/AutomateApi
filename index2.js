  const puppeteer = require("puppeteer");

  (async function main(){
    try{

     const browser = await puppeteer.launch({headless: false});
     const page = await browser.newPage();
     
     await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')
     
     await page.goto('http://10.244.1.254:8080/ejbca/enrol/server.jsp');
     
     await page.focus('#user');

     await page.keyboard.type('www.test.com');

     await page.focus('#password');

     await page.keyboard.type('test1234');

     await page.focus('#pkcs10req');
     
     await page.keyboard.type('This is for checking purpose only');

     await page.select('#resulttype', '3')

    // await page.focus('#ok');

     await page.click('#ok');
   } 
   catch(e)
   {
     console.log("our error", e);
   }


 })();