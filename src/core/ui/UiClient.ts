import { chromium, Page } from "playwright";

export default class UiClient {
    private _page: Page;
    public async init() {
        const Browser = await chromium.launch({headless: true, args: ['--start-maximized']});
        this._page = await Browser.newPage({baseURL: 'https://www.dailymail.co.uk/', viewport: null })
    }

    /**
     * Getter page
     * @return {Page}
     */
	public get page(): Page {
		return this._page;
	}


}