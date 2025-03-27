import { test } from '@playwright/test';
import LoginPage from '../pages/login-page';
let loginPage: LoginPage;

const password = process.env.PASSWORD!;
const username = process.env.USERNAME!;

test.beforeEach(async ({ page }) => {
    await page.goto('./login');
    loginPage = new LoginPage(page);
  });

  test.describe('Hudl Login', () => {
    test(`successful login`, async () => {
      await loginPage.doLogin(username, password);
      await loginPage.verifyLogin(); 
    });
  });