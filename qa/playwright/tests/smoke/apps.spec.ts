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

    test('app QR cards open the matching Google Play listings', async ({ page }) => {
        await page.goto('/');

        const apps = [
            ['Luma Lux', 'io.github.indieappslab.lumalux'],
            ['Calm dB', 'io.github.indieappslab.calmdb'],
            ['Brelax', 'io.github.indieappslab.brelax'],
            ['Pomodoro Timer', 'io.github.indieappslab.pomodoro'],
            ['Habivo', 'io.github.indieappslab.habits'],
            ['OneSnap', 'io.github.indieappslab.photojournal'],
            ['Expiree', 'io.github.indieappslab.expirytracker'],
            ['Pickly', 'io.github.indieappslab.decisionmaker'],
        ];

        for (const [name, packageName] of apps) {
            await expect(page.getByRole('link', { name: `Open ${name} on Google Play` })).toHaveAttribute(
                'href',
                `https://play.google.com/store/apps/details?id=${packageName}`
            );
        }
    });
});
