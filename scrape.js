const puppeteer = require("puppeteer");

const getQuotes = async () => {
    const browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto("https://olx.ba/artikal/61242318", {
        waitUntil: "domcontentloaded",
    });

    // Evaluacija na stranici
    const quotes = await page.evaluate(() => {
        const title = document.querySelector(".main-title-listing")?.innerText.trim() || "Title not found";
        const price = document.querySelector(".price-heading")?.innerText.trim() || "Price not found";
        const image = imgElement?.getAttribute("src") || imgElement?.getAttribute("data-src") || "Image not found";

        return { title, price, image };
    });

    console.log(quotes); 
    
    await browser.close();
};

getQuotes();
