const htmlPdf = require('html-pdf-chrome');
const puppeteer = require('puppeteer')

var fs = require('fs');
void(async() => {
    try{
       
        const browser = await puppeteer.launch({headless : false})
        //headless : true if you dont want browser to popup

        const page = await browser.newPage()
        await page.goto("https://academia.srmist.edu.in/accounts/signin?_sh=false&hideidp=true&portal=10002227248&client_portal=true&servicename=ZohoCreator&service_language=en&serviceurl=https%3A%2F%2Facademia.srmist.edu.in%2F")//website you want to access

        await page.type('#Email', '<your_id@srmist.edu.in>');//input button if any on website
        await page.type('#Password', '<your password>');
        await page.click('input[type="button"]',{waitUntil: 'networkidle2'});

        await page.waitForNavigation();
        await page.screenshot({path: 'home.png'});

        await page.goto("https://academia.srmuniv.ac.in/#View:My_Attendance")
        await page.waitForNavigation();
        await page.screenshot({path: 'Attendance.png'});
        await browser.close()
    }
    catch(error){
        console.log(error)
    }
})()
