  const puppeteer = require("puppeteer"); // Using Puppeter in Node js

  (async function main(){
    try{ //handling the errors

     const browser = await puppeteer.launch({headless: false}); //Headless false means you see all the tasks in chrome
     const page = await browser.newPage(); // await used for wating puorpose to do the task
     
     await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')
     
     await page.goto('http://10.244.1.254:8080/ejbca/enrol/server.jsp');
     
     await page.focus('#user');  // #user means id of the element .focus is jQuery function is used for focusing.

     await page.keyboard.type('www.test.com'); // .type is used write the elements in text box

     await page.focus('#password');

     await page.keyboard.type('test1234');

     await page.focus('#pkcs10req');
     
     await page.keyboard.type('This is for checking purpose only');

     await page.select('#resulttype', '3') // this is use to select the third element from select

    // await page.focus('#ok');

     await page.click('#ok'); // .click is used for clicking purpose.
   } 
   catch(e)
   {
     console.log("our error", e);
   }


 })();