import { test, expect } from '@playwright/test';

test.describe('Main navigation', () => {
    test('top navigation links are visible', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByRole('link', { name: /^apps$/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /^about$/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /^support$/i })).toBeVisible();
    });

    test('explore apps anchor works', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: /explore apps/i }).click();
        await expect(page).toHaveURL(/#apps/i);
    });
});