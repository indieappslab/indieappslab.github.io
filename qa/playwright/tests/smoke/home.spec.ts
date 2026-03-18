import { test, expect } from '@playwright/test';

test.describe('Home page smoke', () => {
    test('homepage loads successfully', async ({ page }) => {
        await page.goto('https://indieappslab.github.io/');

        await expect(page).toHaveTitle(/Indie Apps Lab/i);
        await expect(page.locator('body')).toBeVisible();
    });

    test('hero section is visible', async ({ page }) => {
        await page.goto('https://indieappslab.github.io/');

        await expect(
            page.getByRole('heading', { name: /thoughtful mobile tools for everyday life/i })
        ).toBeVisible();

        await expect(page.getByRole('link', { name: /explore apps/i })).toBeVisible();
    });
});