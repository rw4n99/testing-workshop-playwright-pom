import { Page, expect } from '@playwright/test';
import informationPage_content from '../content/informationPage_content';

class informationPage {
  private readonly title: string;
  
  constructor() {
    this.title = 'span.govuk-caption-xl';
  }

  async checkPageLoads(page: Page): Promise<void> {
    await expect(page.locator(this.title)).toHaveText(informationPage_content.pageTitle);
  }
}

export default informationPage;
