import { test, expect } from '@playwright/test';

test.describe('Contact smoke', () => {
    test('contact link is visible and has href', async ({ page }) => {
        await page.goto('/');

        const contactLink = page.getByRole('link', { name: /^contact$/i }).first();
        await expect(contactLink).toBeVisible();
        await expect(contactLink).toHaveAttribute('href', /contact/i);
    });

    test('old support route still serves the contact page', async ({ page }) => {
        await page.goto('/support/');

        await expect(page.getByRole('heading', { name: /^contact & collaboration$/i })).toBeVisible();
    });
});
