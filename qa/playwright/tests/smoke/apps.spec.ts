import { test, expect } from '@playwright/test';

test.describe('Apps section smoke', () => {
    test('key app cards/sections are visible on homepage', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByText(/Luma Lux/i)).toBeVisible();
        await expect(page.getByText(/Calm dB/i)).toBeVisible();
        await expect(page.getByText(/Brelax/i)).toBeVisible();
        await expect(page.getByText(/Pomodoro/i)).toBeVisible();
    });
});