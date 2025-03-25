import { Page, expect } from '@playwright/test';
import PayPeriod_content from '../content/payPeriod_content';

class payPeriod {
  private readonly title: string;
  private readonly inputHours: string;

  constructor() {
    this.title = 'h1.govuk-label-wrapper';
    this.inputHours = '.gem-c-input';
  }

  // Verifies that the page loads and has correct title
  async checkPageLoads(page: Page): Promise<void> {
    await expect(page.locator(this.title)).toHaveText(PayPeriod_content.pageTitle);
  }

  // Enters a date into the input fields
  async enterDate(page: Page): Promise<void> {
    await page.fill(this.inputHours, '40');
    await expect(page.locator(this.inputHours)).toHaveValue('40');
  }

  //Checks that the Continue button is clicked and the URL is correct
  async continueOn(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-02-01/40.0');
  }
}

export default payPeriod;
