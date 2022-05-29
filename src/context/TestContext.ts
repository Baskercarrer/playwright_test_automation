import { Page } from 'playwright';

class TestContext {
    private _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    /**
     * Getter page
     * @return {Page}
     */
    public get page(): Page {
        return this._page;
    }


}