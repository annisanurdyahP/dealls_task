import { test, expect } from '@playwright/test';
import { formLogin } from '../utils/login';
import { format } from 'date-fns';

test.beforeEach(async ({ page }) => {
  await page.goto('/mentoring');
});

test.describe('Test Case Search as Job-Seeker / Mentee Book a Session', () => {

  test('User Booking a Session', async ({ page }) => {
    await formLogin(page, 'testingjobseeker@jobtest.com', 'xzsawq21!');

    // Step 1: Klik link Eksplor
    const mentoringLink = page.getByRole('link', { name: 'Eksplor' });
    await mentoringLink.click();

    // Step 2: Pilih kategori secara acak
    const categoryList = page.locator('.swiper-wrapper > div');
    const categoryListCount = await categoryList.count();
    const randomChooseCategory = Math.floor(Math.random() * categoryListCount);
    console.log('ini categoryyyy ==>> ', categoryListCount);
    console.log('ini random  ==>', randomChooseCategory);
    await categoryList.nth(randomChooseCategory).click();

    // Step 3: Pilih card "Bisa Request" secara acak
    const requestTextCards = page.locator('.grid-cols-1 > a:has-text("Bisa Request")');
    await expect(requestTextCards.first()).toBeVisible({ timeout: 10000 });
    const requestCardCount = await requestTextCards.count();
    const randomRequestCardIndex = Math.floor(Math.random() * requestCardCount);
    await requestTextCards.nth(randomRequestCardIndex).click();

    // Step 4: Klik tombol Ajukan Jadwal
    const ajukanJadwalButton = page.getByRole('button', { name: 'Ajukan Jadwal' });
    await expect(ajukanJadwalButton).toBeVisible({ timeout: 10000 });
    await ajukanJadwalButton.click();

    // Step 5: Pilih career list item
    const careerListItems = page.locator('ul.grid.grid-cols-2.gap-3 > li');
    await careerListItems.nth(0).click();

    // Step 6: Klik tombol Next (Selanjutnya)
    const nextButton = page.locator('#mentoring-schedule-topic-request-session-btn');
    await expect(nextButton).toBeEnabled({ timeout: 5000 });
    await nextButton.click();

    // Step 7: Pilih tanggal dan waktu
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 3);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4);

    const formattedStartLabel = `Choose ${format(startDate, 'EEEE MMMM d')} of ${format(startDate, 'yyyy')}`;
    const formattedEndLabel = `Choose ${format(endDate, 'EEEE MMMM d')} of ${format(endDate, 'yyyy')}`;

    const startDateButton = page.locator(`div[aria-label="${formattedStartLabel}"]`);
    await expect(startDateButton).toBeVisible();
    await startDateButton.click();

    const endDateButton = page.locator(`div[aria-label="${formattedEndLabel}"]`);
    await expect(endDateButton).toBeVisible();
    await endDateButton.click();

    await page.getByText('Propose Time Range (WIB)').click();
    await page.locator('[id="proposedTimes_0_startTime"]').fill('10:00');
    await page.locator('[id="proposedTimes_0_endTime"]').fill('12:00');

    // Step 8: Pilih lokasi
    const locationCombobox = page.locator('[id="proposeLocation"]');

    if (await nextButton.isEnabled()) {
      await nextButton.click(); // Klik tombol Next langsung
    } else {
      // Jika tombol Next tidak bisa diklik, pilih lokasi terlebih dahulu
      await locationCombobox.click();
      const firstLocationCheckbox = page.locator('.rc-virtual-list-holder input[type="checkbox"]').first();
      if (await firstLocationCheckbox.isVisible()) {
        await firstLocationCheckbox.check();
        await nextButton.click(); // Klik Next setelah memilih lokasi
      }
    }

    // Step 9: Menunggu dan memverifikasi WhatsApp field
    await page.waitForSelector('label[for="whatsapp"]');
    await expect(page.locator('#whatsapp')).toBeVisible();

    // Step 10: Memilih LinkedIn Checkbox
    await page.locator('#linkedInChoices input[type="checkbox"]').check();

    // Debugging: pause untuk verify hasil
    await page.pause();
  });
});
