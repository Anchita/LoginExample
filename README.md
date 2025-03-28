This projects tests the Hudl login using Playwright for following scenarios:

- Successful Login
- Unsuccessful Login - Incorrect Username
- Unsuccessful Login - Incorrect Password

Browsers tested are - Chrome, Firefox and Webkit

## Viewing test report and captured video on Github Actions 

- Navigate to [Github Actions](https://github.com/Anchita/LoginExample/actions/runs/14127033647) and download the 'playwright-report'

- On your terminal, navigate to the folder where you saved the report and type:

`npx playwright show-report playwright-report`

- The above command opens an html report in your browser. You can view the captured video of any test by scrolling down to the bottom to the video and hitting play.

## Running the tests locally

## Dependencies

- Playwright 1.50.1
- Node v20.4.0
- npm v9.7.2
- VSCode 1.77.3 

> Pre requirements: 
- [Node setup](https://nodejs.org/en/download)
- An IDE, e.g. [VS code setup](https://code.visualstudio.com/download)
- [Playwright setup](https://playwright.dev/docs/intro)

## Clone the project

## Install the project dependencies

On your terminal, type:

1. `npm i`

2. `npm install dotenv`

This intsalls the required module for using env variables stored securely in Github

## Create your own version of .env file using the .env.example file

1. Rename the .env.example file to .env

2. Add a valid username and password

## Run the tests

On your terminal type:

`npx playwright test --headed` 
