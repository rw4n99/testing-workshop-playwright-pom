import { Page, expect } from '@playwright/test';
import informationPage_content from '../content/informationPage_content';

class informationPage {
  private readonly title: string;
  
  constructor() {
    this.title = 'span.govuk-caption-xl';
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-02-01/40.0');
    await expect(page.locator(this.title)).toHaveText(informationPage_content.pageTitle);
  }
}

export default informationPage;
