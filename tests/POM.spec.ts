import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import HoursPage from "./pages/hoursPage";
import LeaveYearPage from "./pages/leaveYearPage";
import PayPeriod from "./pages/payPeriod";
import InformationPage from "./pages/informationPage";

// Main test - heppy, should work 
test(`Page object model happy path for Landing Page Test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await page.pause();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const hoursPage: HoursPage = new HoursPage();
    await hoursPage.checkPageLoads(page);
    await hoursPage.checkYes(page);
    await hoursPage.continueOn(page);

    const leaveYearPage: LeaveYearPage = new LeaveYearPage();
    await leaveYearPage.checkPageLoads(page);
    await leaveYearPage.enterDate(page);
    await leaveYearPage.continueOn(page);

    const payPeriod: PayPeriod = new PayPeriod();
    await payPeriod.checkPageLoads(page);
    await payPeriod.enterDate(page);
    await payPeriod.continueOn(page);

    const informationPage: InformationPage = new InformationPage();
    await informationPage.checkPageLoads(page);
});

test(`POM unhappy path for Landing Page Test`, async ({ page }): Promise<void> => {

    const hoursPage: HoursPage = new HoursPage();
    await hoursPage.unCheckedShouldFail(page);
});