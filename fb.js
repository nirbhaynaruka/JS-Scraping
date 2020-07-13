const puppeteer = require('puppeteer')
void(async() => {
    try{
        
        // const browser = await puppeteer.launch()
        //to open in website
        const browser = await puppeteer.launch({headless : false})

        const page = await browser.newPage()
        await page.goto("https://www.facebook.com/")//website you want to access

        await page.type('#email', 'nirbhaynaruka@gmail.com');
        await page.type('#pass', '');
        await page.click('#loginbutton input');


        await page.waitForNavigation();


        await page.screenshot({
            path:'./screenshots1/page1.png'
        })
        await page.pdf({
            path: './pdfs1/page1.pdf'
        })
        await browser.close()

    }
    catch(error){
        console.log(error);
        print("unknown error")
    }
})()
