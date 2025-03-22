import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;
    readonly continue: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.continue = page.getByRole('button', { name: 'Continue'});

    }

    async fillEmail(email: string){
        await this.emailInput.fill('anchita.dogra@gmail.com');
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }

    async clickContinue(){
        await this.continue.click();
    }

    async fillPassword(password: string){
        await this.passwordInput.fill('Pass123!');
    }

    async doLogin(email: string, password: string){
        await this.fillEmail(email);
        await this.clickContinueButton();
        await this.fillPassword(password);
        await this.clickContinue();
    }

    async verifyLogin(){
        //await expect(this.page.url()).toBe('https://hudl.com./home');
        await expect(this.page).toHaveTitle(/Home - Hudl/);
    }
}

export default LoginPage;