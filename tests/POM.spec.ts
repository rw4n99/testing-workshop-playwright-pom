import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import HoursPage from "./pages/hoursPage";
import LeaveYearPage from "./pages/leaveYearPage";
import PayPeriod from "./pages/payPeriod";

test(`Page object model happy path for Landing Page Test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
});

test(`Page object model happy path for Hours Input Page test`, async ({ page }): Promise<void> => {

    const hoursPage: HoursPage = new HoursPage();
    await hoursPage.checkPageLoads(page);
    await hoursPage.checkYes(page);
    await hoursPage.continueOn(page);
});

test(`Page object model happy path for Leave Year Page test`, async ({ page }): Promise<void> => {

    const leaveYearPage: LeaveYearPage = new LeaveYearPage();
    await leaveYearPage.checkPageLoads(page);
    await leaveYearPage.enterDate(page);
    await leaveYearPage.continueOn(page);
});

test(`Page object model happy path for Pay Period test`, async ({ page }): Promise<void> => {

    const payPeriod: PayPeriod = new PayPeriod();
    await payPeriod.checkPageLoads(page);
    await payPeriod.enterDate(page);
    await payPeriod.continueOn(page);
});