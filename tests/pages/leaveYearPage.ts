import { Page, expect } from '@playwright/test';
import LeaveYearPage_content from '../content/leaveYearPage_content';

class LeaveYearPage {
  private readonly title: string;
    private readonly inputDay: string;
    

  constructor() {
    this.title = '.govuk-fieldset__heading';
    this.inputDay = '.gem-c-input'
  }

  // Verifies that the page loads and has correct title
  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(LeaveYearPage_content.pageTitle),
    ]);
  }
  
  // Enters a date into the input fields
  async enterDate(page: Page): Promise<void> {

    await page.getByLabel("Day").fill("01"),
    await page.getByLabel("Month").fill("02"),
    await page.getByLabel("Year").fill("2025")
        await Promise.all([
         expect(page.getByLabel("Day")).toHaveValue('01'),
         expect(page.getByLabel("Month")).toHaveValue('02'),
         expect(page.getByLabel("Year")).toHaveValue('2025'),
    ])
  }

  //Checks that the Continue button is clicked and the URL is correct
  async continueOn(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-02-01')
  }

}
export default LeaveYearPage;