import { test, expect } from '@playwright/test';
import { formLogin } from '../utils/login';

test.beforeEach(async ({ page }) => {
  await page.goto('/mentoring');
});

test.describe('Test Case Search as Job-Seeker / Mentee', () => {
  const dataSearch = [
    { status: "Valid", title: "Input Valid Search", searchText: "Mentor" },
    { status: "Invalid", title: "Input Search With Not Available Data", searchText: "xzsawq" },
  ];

  for (const data of dataSearch) {
    test(`User Search a data with ${data.title}`, async ({ page }) => {
      await formLogin(page, 'testingjobseeker@jobtest.com', 'xzsawq21!');

      // Define all locators in one object
      const elementLocator = {
        mentoringLink: page.getByRole('link', { name: 'Eksplor' }),
        greetingTitle: page.locator('h1.HeroTitleSubtitle_title_subtitle__GlZkf'),
        eksplorTab: page.locator('a', { hasText: 'Eksplor' }),
        searchField: page.locator('[id="searchMentor"]'),
        targetCard: (text: string) => page.locator('h4', { hasText: new RegExp(`${text}`, 'i') }),
        noMentorMessage: page.getByRole('heading', {
          name: /Tidak ada hasil pencarian ditemukan/i,
        }),
      };

      await elementLocator.mentoringLink.click();
      await expect(elementLocator.greetingTitle).toHaveText(/Hi,\s*testing!?/);
      await elementLocator.eksplorTab.click();
      await elementLocator.searchField.fill(data.searchText);

      if (data.status === "Valid") {
        await page.waitForTimeout(4000);
        await expect(await elementLocator.targetCard(data.searchText).count()).toBeGreaterThan(0);
      } else if (data.status === "Invalid") {
        await page.waitForTimeout(5000);
        await expect(elementLocator.noMentorMessage).toBeVisible();
      }
    });
  }
});
