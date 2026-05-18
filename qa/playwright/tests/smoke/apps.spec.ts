import { test, expect } from '@playwright/test';

test.describe('Apps section smoke', () => {
    test('key app cards/sections are visible on homepage', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByRole('heading', { name: /^Luma Lux$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Calm dB$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Brelax$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Pomodoro Timer$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Habivo$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^OneSnap$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Expiree$/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /^Pickly$/i })).toBeVisible();
    });
});
