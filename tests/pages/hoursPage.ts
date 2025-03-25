import { Page, expect } from '@playwright/test';
import HoursPage_content from '../content/hoursPage_content';

class HoursPage {
  private readonly title: string;
  private readonly checkButton: string;
//   private readonly startButton: string;

  constructor() {
    this.title = '.govuk-fieldset__heading';
    this.checkButton = 'text=Yes ';
    // this.startButton = 'text=Start now'; // Targeting the button by visible text
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(HoursPage_content.pageTitle),
    //   expect(page.locator(this.startButton)).toBeVisible(),
    ]);
  }
  
  async checkYes(page: Page): Promise<void> {
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
    
  }
//   async continueOn(page: Page): Promise<void> {
//     await page.click(this.startButton);
//   }
}
export default HoursPage;

//<h1 class="govuk-fieldset__heading gem-c-radio__heading-text">Does the employee work irregular hours or for part of the year?</h1>