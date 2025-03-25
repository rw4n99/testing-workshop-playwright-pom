import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import HoursPage from "./pages/hoursPage";
import LeaveYearPage from "./pages/leaveYearPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
});

test(`Page object model happy path for third test`, async ({ page }): Promise<void> => {

    const hoursPage: HoursPage = new HoursPage();
    await hoursPage.checkPageLoads(page);
    await hoursPage.checkYes(page);
    await hoursPage.continueOn(page);
});

test(`Page object model happy path for fourth test`, async ({ page }): Promise<void> => {

    const leaveYearPage: LeaveYearPage = new LeaveYearPage();
    await leaveYearPage.checkPageLoads(page);
    // await hoursPage.checkYes(page);
    // await hoursPage.continueOn(page);
});