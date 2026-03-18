import { test, expect } from '@playwright/test';

test.describe('Theme toggle', () => {
    test('theme toggle is visible', async ({ page }) => {
        await page.goto('/');

        await expect(page.locator('#theme-toggle')).toBeVisible();
    });

    test('theme changes after click', async ({ page }) => {
        await page.goto('/');

        const html = page.locator('html');
        const toggle = page.locator('#theme-toggle');

        const initialTheme = await html.getAttribute('data-theme');
        await toggle.click();
        const updatedTheme = await html.getAttribute('data-theme');

        expect(updatedTheme).not.toBe(initialTheme);
    });
});