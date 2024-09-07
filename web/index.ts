// Importing Puppeteer library
import puppeteer from 'puppeteer';

export const scrapeData = async (url: string): Promise<string> => {
    // Launching Puppeteer
    const browser = await puppeteer.launch();
    // Opening a new page
    const page = await browser.newPage();

    // Navigating to a sample webpage
    await page.goto(url);

    // Extracting sample data using page.evaluate
    const data = await page.evaluate(() => {
        // Sample data extraction logic
        const title = document.title;
        const body = document.querySelector('body')
        if (body) {
            const html = body.innerHTML;
            return html
        }
        // Returning an object containing extracted data
        return title
    });
    await browser.close();
    return data;
}