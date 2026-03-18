import { test, expect } from '@playwright/test';

test.describe('Support smoke', () => {
    test('support link is visible and has href', async ({ page }) => {
        await page.goto('https://indieappslab.github.io/');

        const supportLink = page.getByRole('link', { name: /^support$/i }).first();
        await expect(supportLink).toBeVisible();
        await expect(supportLink).toHaveAttribute('href', /support/i);
    });
});