import { Page, expect } from '@playwright/test';
import startPage_content from '../content/landingPage_content';

class startPage {
  private readonly title: string;
  private readonly startButton: string;

  constructor() {
    this.title = '.govuk-heading-xl';
    this.startButton = 'text=Start now'; 
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    await Promise.all([
      expect(page.locator(this.title)).toHaveText(startPage_content.pageTitle),
      expect(page.locator(this.startButton)).toBeVisible(),
    ]);
  }

  async continueOn(page: Page): Promise<void> {
    await page.click(this.startButton);
  }
}

export default startPage;


