import { Page, expect } from '@playwright/test';
import informationPage_content from '../content/informationPage_content';

class informationPage {
  private readonly title: string;
  private readonly calculation: string;
  
  constructor() {
    this.title = 'span.govuk-caption-xl';
    this.calculation = 'div.gem-c-govspeak'
  }

  // Verifies that the page loads and has correct title
  async checkPageLoads(page: Page): Promise<void> {
    await expect(page.locator(this.title)).toHaveText(informationPage_content.pageTitle);
    await expect(page.locator(this.calculation)).toContainText(informationPage_content.calculation);
  }
}

export default informationPage;
