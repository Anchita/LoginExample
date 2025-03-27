import { test } from '@playwright/test';
import LoginPage from '../pages/login-page';
import userData from '../data/use-data';

let loginPage: LoginPage;

const password = process.env.PASSWORD!;
const username = process.env.USERNAME!;
const invalidUser = userData.INVALID_USER;
const invalidPassword = userData.INVALID_PASSWORD;

test.beforeEach(async ({ page }) => {
    await page.goto('./login');
    loginPage = new LoginPage(page);
  });

  test.describe('Hudl Login', () => {
    test(`successful login`, async () => {
      await loginPage.doLogin(username, password);
      await loginPage.verifyLogin(); 
    });

    test(`unsuccessful login -invalid user email`, async () => {
      await loginPage.loginWithInvalidUser(invalidUser);
      await loginPage.verifyInvalidUserLogin(); 
    });  

    test(`unsuccessful login -invalid password`, async () => {
      await loginPage.doLogin(username, invalidPassword);
      await loginPage.verifyInvalidPassword(); 
    });  
  });