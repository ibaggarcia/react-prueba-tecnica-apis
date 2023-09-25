// @ts-check
import { test, expect } from  '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('Ver si hay un fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('article')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.length).toBeGreaterThan(0)
});
