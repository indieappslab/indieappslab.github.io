import { test, expect } from '@playwright/test';

test.describe('Apps section smoke', () => {
    test('key app cards/sections are visible on homepage', async ({ page }) => {
        await page.goto('https://indieappslab.github.io/');

        await expect(page.getByText(/Luma Lux · Light & Lux Meter/i)).toBeVisible();
        await expect(page.getByText(/Calm dB · Sound Meter/i)).toBeVisible();
        await expect(page.getByText(/Brelax · Breathing Exercises/i)).toBeVisible();
        await expect(page.getByText(/Pomodoro Timer · Study & Focus/i)).toBeVisible();
        await expect(page.getByText(/Habivo · Daily Habit Tracker/i)).toBeVisible();
    });
});