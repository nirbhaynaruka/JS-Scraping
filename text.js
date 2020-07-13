const puppeteer = require('puppeteer')
void(async() => {
    try{
        
        // const browser = await puppeteer.launch()
        //to open in website
        const browser = await puppeteer.launch({headless : false})

        const page = await browser.newPage()
        await page.goto("https://academia.srmuniv.ac.in/accounts/signin?_sh=false&hideidp=true&portal=10002227248&client_portal=true&servicename=ZohoCreator&service_language=en&serviceurl=https%3A%2F%2Facademia.srmuniv.ac.in%2F")//website you want to access


        await page.type('#Email', 'Nirbhay_singh@srmuniv.edu.in');//input button if any on website
        await page.type('#Password', 'nirbhay1999');
        await page.click('input[type="button"]');//submit button if any on website

        await page.waitForNavigation();
        await page.goto("https://academia.srmuniv.ac.in/#View:My_Attendance")

        await page.waitForNavigation();


        await page.screenshot({
            path:'./screenshots/page1.png'
        })
        await page.pdf({
            path: './pdfs/page1.pdf'
        })
        await page.goto("https://academia.srmuniv.ac.in/#View:My_Attendance")
        await browser.close()

    }
    catch(error){
        console.log(error)
    }
})()
