import { test, expect } from '@playwright/test';

test('collect', async ({ page }) => {
  await page.goto('https://home.startrekfleetcommand.com/store')
  // await page.getByTestId('navigation-item-to-store').click();

  page.on('console', (msg) => {
    console.log(msg);
  });


  // Find all the free stuff
  for (const gift of await page.getByRole('button', { name: "offer-claim-button"}).all()) {
    let giftName = gift.locator('xpath=../../../div[1]/div/p').getAttribute('name');
    console.log(`Clicked gift labeled "${giftName}"`)
    gift.click();
    await page.getByRole('button', { name: 'DONE' }).click();
  }
});