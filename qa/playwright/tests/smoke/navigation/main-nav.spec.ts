import { test, expect } from '@playwright/test';

test.describe('Main navigation', () => {
        test('top navigation links are visible', async ({ page }) => {
            await page.goto('https://indieappslab.github.io/');

            const topNav = page.getByRole('navigation');

            await expect(topNav.getByRole('link', { name: /^apps$/i })).toBeVisible();
            await expect(topNav.getByRole('link', { name: /^about$/i })).toBeVisible();
            await expect(topNav.getByRole('link', { name: /^support$/i })).toBeVisible();
        });

    test('explore apps anchor works', async ({ page }) => {
        await page.goto('https://indieappslab.github.io/');

        await page.getByRole('link', { name: /explore apps/i }).click();
        await expect(page).toHaveURL(/#apps/i);
    });
});