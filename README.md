# Cypress-Luma

This project was made using Cypress and Javascript Language. <br />
Cypress iFrame plugin needed to be installed to handle some elements that were inside iFrames. <br />
Some things could be better, for example, the selectors used to interact with application's elements. Most of the elements used on this project were text, classes or ids, but the best option would be to implement and use a data-cy selector, made specifically for automation purposes, and unique for each element on the screen. <br />
Also, Page-Objects was not used in this case. On the other hand, Cypress Custom Commands have a very important role here.

To download this project dependencies just run the command below on your terminal:

```
npm install
```

To run the tests with Cypress in window mode you can run:

```
npx cypress open
```

To run the tests with Cypress in headless mode, just use the command:

```
npx cypress run
```

Tor run tests with allure reports enabled:

```
npm run cypress:run-allure
```

The project is divided in:

**Cypress**<br />
**- Downloads:** Any files downloaded while testing an application's file download feature will be stored in the downloadsFolder which is set to cypress/downloads by default.<br />
**- Fixtures:** Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.<br />
**- e2e:** This folder contains all things related with the test cases (spec files).<br />
**- Pages:** In this folder we have the classes and methods that our tests are going to use to accomplish their goals. Files in this folder are divided based on their roles and functionalities.<br />
**- Support:** The support file is a great place to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files. This file runs before every single spec file.<br />
**- Screenshots:** this folder contains some screenshots taken after each test scenario's run. This can help to evidence 
application's behaviour and examine/fix bugs. <br />
**- Videos:** this folder contains some short videos taken after each test scenario's run. This can help to evidence 
application's behaviour and examine/fix bugs alongside with Screenshots.
