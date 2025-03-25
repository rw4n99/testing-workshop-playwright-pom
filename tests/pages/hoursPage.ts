import { Page, expect } from '@playwright/test';
import HoursPage_content from '../content/hoursPage_content';

class HoursPage {
  private readonly title: string;
  private readonly checkButton: string;

  constructor() {
    this.title = '.govuk-fieldset__heading';
    this.checkButton = 'text=Yes ';
  }

  // Verifies that the page loads and has correct title
  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toHaveText(HoursPage_content.pageTitle),
    ]);
  }
  
  // Verifies that checkboxes can be checked and unchecked
  async checkYes(page: Page): Promise<void> {
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
    await page.getByLabel('No').check();
    await expect(page.getByLabel('No')).toBeChecked();
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
  }

  //Checks that the Continue button is clicked and the URL is correct
  async continueOn(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year')
  }

  async unCheckedShouldFail(page: Page): Promise<void> {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator(".govuk-error-message")).toBeVisible()
  }

}

export default HoursPage;