import { test, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

test('authenticate', async ({ page }) => {
    let username = process.env.STFC_USERNAME;
    let password = process.env.STFC_PASSWORD;
    expect(username, 'should be set').toBeTruthy();
    expect(password, 'should be set').toBeTruthy();

    await page.goto('https://home.startrekfleetcommand.com/');
    await page.getByRole('button', { name: 'Sign in with Scopely' }).click();
    // await page.locator('[data-test-id="Input"]').click();
    await page.locator('[data-test-id="Input"]').fill(username as string);
    await page.locator('[data-test-id="site-email-input-submit-button"]').click();
    // await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password as string);
    await page.getByRole('button', { name: 'Sign in' }).click();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });

});