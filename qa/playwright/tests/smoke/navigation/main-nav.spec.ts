import { test, expect } from '@playwright/test';

test.describe('Main navigation', () => {
        test('top navigation links are visible', async ({ page }) => {
            await page.goto('/');

            const topNav = page.getByRole('navigation');

            await expect(topNav.getByRole('link', { name: /^apps$/i })).toBeVisible();
            await expect(topNav.getByRole('link', { name: /^studio$/i })).toBeVisible();
            await expect(topNav.getByRole('link', { name: /^contact$/i })).toBeVisible();
        });

    test('explore apps anchor works', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: /explore apps/i }).click();
        await expect(page).toHaveURL(/#apps/i);
    });
});
