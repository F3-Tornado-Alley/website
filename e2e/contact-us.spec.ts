import { test, expect } from "@playwright/test";

test.describe("Contact Us page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact-us");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Contact Us/);
  });

  test("displays email link with correct href", async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:f3tornadoalley@gmail.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText("f3tornadoalley@gmail.com");
  });

  test("displays social media links", async ({ page }) => {
    const facebook = page.locator('a[href="https://www.facebook.com/f3tornadoalley"]');
    const instagram = page.locator('a[href="https://www.instagram.com/f3tornadoalley/"]');
    const twitter = page.locator('a[href="https://x.com/f3tornadoalley"]');
    const tiktok = page.locator('a[href="https://www.tiktok.com/@f3tornadoalley"]');

    await expect(facebook).toBeVisible();
    await expect(instagram).toBeVisible();
    await expect(twitter).toBeVisible();
    await expect(tiktok).toBeVisible();
  });

  test("navigation shows Contact Us as active", async ({ page }) => {
    const navLink = page.locator("nav").locator('a[href="/contact-us/"]').first();
    await expect(navLink).toBeVisible();
    // Active nav links render a full-width underline (after:w-full); inactive use after:w-0.
    await expect(navLink).toHaveClass(/after:w-full/);
  });
});
