import { test } from '@playwright/test';
import LoginPage from '../pages/login-page';
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://hudl.com/login');
    loginPage = new LoginPage(page);
  });

  test.describe('Hudl Login', () => {
    test(`successful login`, async () => {
      await loginPage.doLogin('anchita.dogra@gmail.com', 'Pass123!');
    });
  });