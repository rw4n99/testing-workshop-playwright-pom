import { Page, expect } from '@playwright/test';
import LeaveYearPage_content from '../content/leaveYearPage_content';

class LeaveYearPage {
  private readonly title: string;
//   private readonly startButton: string;
  constructor() {
    this.title = '.govuk-fieldset__heading';
    //this.startButton = 'text=Start now';
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(LeaveYearPage_content.pageTitle),
    //   expect(page.locator(this.startButton)).toBeVisible(),
    ]);
  }
  
//   async continueOn(page: Page): Promise<void> {
//     await page.click(this.startButton);
//   }
}
export default LeaveYearPage;