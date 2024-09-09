
import puppeteer from 'puppeteer'


export const scrapeData = async (url: string) => {
    // 启动浏览器
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 访问页面
    await page.goto(url);

    // 获取页面内容的文本
    const textContent = await page.evaluate(() => {
        // 获取整个页面的文本内容
        return document.body.innerText;
    });

    // 关闭浏览器
    await browser.close();
    return textContent;
}