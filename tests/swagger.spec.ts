import {test, expect} from '@playwright/test'

test.beforeEach('go to swagger', async({page})=> {
    await page.goto('https://petstore.swagger.io')
})

test('counting the number of buttons', async({page})=> {


    const buttons = page.locator('button.opblock-summary-control');
    await buttons.first().waitFor(); // Ensure the buttons are loaded

    const buttonCount = await buttons.count();
    console.log(`Number of buttons: ${buttonCount}`);
  
    // Initialize counters for each HTTP method
    let getCount = 0;
    let postCount = 0;
    let putCount = 0;
    let deleteCount = 0;
  
    for (let i = 0; i < buttonCount; i++) {
      const buttonText = await buttons.nth(i).textContent();
  
      // Increment counters based on the presence of the HTTP method in the button text
      if (buttonText?.includes('GET')) getCount++;
      if (buttonText?.includes('POST')) postCount++;
      if (buttonText?.includes('PUT')) putCount++;
      if (buttonText?.includes('DELETE')) deleteCount++;
    }
  
    // Log the counts for each HTTP method
    console.log(`GET count: ${getCount}`);
    console.log(`POST count: ${postCount}`);
    console.log(`PUT count: ${putCount}`);
    console.log(`DELETE count: ${deleteCount}`);
  

});