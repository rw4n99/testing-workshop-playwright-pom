import { Page, expect } from '@playwright/test';
import HoursPage_content from '../content/hoursPage_content';

class HoursPage {
  private readonly title: string;
  private readonly checkButton: string;

  constructor() {
    this.title = '.govuk-fieldset__heading';
    this.checkButton = 'text=Yes ';
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(HoursPage_content.pageTitle),
    ]);
  }
  
  async checkYes(page: Page): Promise<void> {
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
    
  }

  async continueOn(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year')
  }
  
}
export default HoursPage;