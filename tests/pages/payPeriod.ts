import { Page, expect } from '@playwright/test';
import payPeriod_content from '../content/payPeriod_content'

class payPeriod {
  private readonly title: string;
    private readonly inputHours: string;
    

  constructor() {
    this.title = '.govuk-fieldset__heading';
    this.inputHours = '.gem-c-input'
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-02-01');
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(payPeriod_content.pageTitle),
    ]);
  }
  
  async enterDate(page: Page): Promise<void> {

    await page.fill(this.inputHours, '40'),
        await Promise.all([
         expect(page.locator('.gem-c-input')).toHaveText('40'),
    ])
  }

  async continueOn(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-02-01/40.0')
  }

}
export default payPeriod;