import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import HoursPage from "./pages/hoursPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    // const hoursPage: HoursPage = new HoursPage();
    // await hoursPage.checkPageLoads(page);
    // Continue here!
    //dfghjk
});

test(`Page object model happy path for third test`, async ({ page }): Promise<void> => {

    const hoursPage: HoursPage = new HoursPage();
    await hoursPage.checkPageLoads(page);
    await hoursPage.checkYes(page);
    // Continue here!
    //dfghjk
});