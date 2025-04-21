# Test info

- Name: Test Case Search as Job-Seeker / Mentee Book a Session >> User Booking a Session
- Location: /Users/annisanurdyah/dealls/tests/bookingSession.spec.ts:11:7

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring", waiting until "load"

    at /Users/annisanurdyah/dealls/tests/bookingSession.spec.ts:6:14
```

# Page snapshot

```yaml
- banner:
  - link "Dealls":
    - /url: /
    - img
  - listitem:
    - link "Loker":
      - /url: /
  - listitem:
    - link "Mentoring":
      - /url: /mentoring
  - listitem:
    - link "Perusahaan":
      - /url: /karir
  - listitem: Events
  - listitem:
    - link "AI CV Analyzer":
      - /url: /cv-reviewer
- main:
  - main:
    - main:
      - heading "Dapatkan Mentoring Kehidupan & Karir 1-on-1 Dengan 3,202 Ahli. 100% Gratis." [level=1]:
        - img
        - text: Dapatkan Mentoring Kehidupan & Karir 1-on-1 Dengan 3,202 Ahli. 100% Gratis.
      - 'heading "Bergabung & Jadi Bagian dari Komunitas Pekerja & Mentoring #1 Indonesia" [level=2]'
      - strong: "16"
      - text: bidang keahlian
      - strong: "750"
      - text: perusahaan top
      - strong: "200"
      - text: industri beragam
      - complementary: "3 Langkah Sederhana: 1 Jelajahi daftar mentor terpilih 2 Pilih jadwal 3 Mentoring 1-on-1, online/offline"
  - main:
    - link "Eksplor":
      - /url: /mentoring
    - link "Sesi Saya":
      - /url: /mentoring/my-session
    - img
    - textbox "Cari berdasarkan nama, perusahaan, peran, industri, universitas, jurusan, topik"
    - combobox
    - text: Tingkatan
    - combobox
    - link "Karier":
      - /url: /mentoring
    - link "Akademik (S1 & S2)":
      - /url: /mentoring?mTab=academics
    - link "Butuh Bantuan ?":
      - /url: https://api.whatsapp.com/send/?phone=6285693606735&text&app_absent=0
      - img
      - text: Butuh Bantuan ?
- contentinfo:
  - link:
    - /url: /
    - img
  - heading "Website Lowongan Kerja dan Loker Terbaru di Indonesia" [level=2]
  - 'heading "Dealls adalah job portal dan website cari kerja #1 di Indonesia dengan lowongan kerja berkualitas dari 3,500+ perusahaan terbaik. Dealls juga hadir dengan program mentoring gratis untuk pengembangan karir & CV Reviewer untuk membantu pencari kerja mendapatkan karir impiannya lebih mudah." [level=3]'
  - text: "Dapatkan kesempatan pekerjaan baru & belajar dari Mentor terbaik di Indonesia Unduh Dealls: Jobs & Mentoring"
  - link "Download Dealls Jobs on Google Play Store":
    - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
    - img
  - link "Download Dealls Jobs on Apple App Store":
    - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
    - img
  - heading "Loker" [level=3]
  - link "Loker berdasarkan Industri":
    - /url: /loker/industri
  - link "Loker berdasarkan Lokasi":
    - /url: /loker/lokasi
  - link "Loker berdasarkan Posisi":
    - /url: /loker/posisi
  - link "Loker Penuh Waktu":
    - /url: /loker/tipe/loker-full-time
  - link "Loker Kontrak":
    - /url: /loker/tipe/loker-kontrak
  - link "Loker Paruh Waktu":
    - /url: /loker/tipe/loker-part-time
  - link "Loker Magang":
    - /url: /loker/tipe/loker-magang
  - link "Loker Freelance":
    - /url: /loker/tipe/loker-freelance
  - link "Loker Populer":
    - /url: /loker/populer
  - heading "Untuk Perusahaan" [level=3]
  - link "ATS & Job Portal untuk Perusahaan":
    - /url: /pasang-loker-gratis
  - 'link "Kantorku: Fast, reliable & intuitive HRIS"':
    - /url: https://kantorku.id/
  - link "Jadwalkan Demo":
    - /url: /pasang-loker-gratis#employer-contact-form
  - link "Harga":
    - /url: /pasang-loker-gratis/pricing
  - heading "Hubungi Kami" [level=3]
  - text: "Menara Duta Lt. 7, Jl. H. R. Rasuna Said No. 5, Setiabudi, Jakarta Selatan 12910 160 Robinson Road #20-03 Singapore, 068914"
  - link:
    - /url: https://www.instagram.com/dealls.jobs/
    - img
  - link:
    - /url: https://twitter.com/DeallsJobs/
    - img
  - link:
    - /url: https://www.linkedin.com/company/dealls/
  - heading "Tentang Dealls" [level=3]
  - link "Cerita Kami":
    - /url: /about
  - link "Blog":
    - /url: https://dev.dealls.com/pengembangan-karir
  - link "Gabung dengan Tim Kami":
    - /url: https://sh.dealls.com/dealls-career
  - link "Kebijakan Pribadi":
    - /url: /privacy-policies
  - link "Syarat & Kondisi Dealls Group":
    - /url: /terms-and-condition
  - link "Syarat & Kondisi KantorKu":
    - /url: https://kantorku.id/terms-and-condition
  - text: © 2025 Dealls. All rights reserved
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { formLogin } from '../utils/login';
   3 | import { format } from 'date-fns';
   4 |
   5 | test.beforeEach(async ({ page }) => {
>  6 |   await page.goto('/mentoring');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   7 | });
   8 |
   9 | test.describe('Test Case Search as Job-Seeker / Mentee Book a Session', () => {
  10 |
  11 |   test('User Booking a Session', async ({ page }) => {
  12 |     // Login sebagai Job-Seeker / Mentee
  13 |     await formLogin(page, 'testingjobseeker@jobtest.com', 'xzsawq21!');
  14 |
  15 |     // Step 1: Klik link Eksplor
  16 |     const mentoringLink = page.getByRole('link', { name: 'Eksplor' });
  17 |     await mentoringLink.click();
  18 |
  19 |     // Step 2: Pilih kategori secara acak
  20 |     const categoryList = page.locator('.swiper-wrapper > div');
  21 |     const categoryListCount = await categoryList.count();
  22 |     const randomChooseCategory = Math.floor(Math.random() * categoryListCount);
  23 |     console.log('ini category ==>> ', categoryListCount);
  24 |     console.log('ini random  ==>', randomChooseCategory);
  25 |     await categoryList.nth(randomChooseCategory).click();
  26 |
  27 |     // Step 3: Pilih card "Bisa Request" secara acak
  28 |     const requestTextCards = page.locator('.grid-cols-1 > a:has-text("Bisa Request")');
  29 |     await expect(requestTextCards.first()).toBeVisible({ timeout: 10000 });
  30 |     const requestCardCount = await requestTextCards.count();
  31 |     const randomRequestCardIndex = Math.floor(Math.random() * requestCardCount);
  32 |     await requestTextCards.nth(randomRequestCardIndex).click();
  33 |
  34 |     // Step 4: Klik tombol Ajukan Jadwal
  35 |     const ajukanJadwalButton = page.getByRole('button', { name: 'Ajukan Jadwal' });
  36 |     await expect(ajukanJadwalButton).toBeVisible({ timeout: 10000 });
  37 |     await ajukanJadwalButton.click();
  38 |
  39 |     // Step 5: Pilih career list item
  40 |     const careerListItems = page.locator('ul.grid.grid-cols-2.gap-3 > li');
  41 |     await careerListItems.nth(0).click();
  42 |
  43 |     // Step 6: Klik tombol Next (Selanjutnya)
  44 |     const nextButton = page.locator('#mentoring-schedule-topic-request-session-btn');
  45 |     await expect(nextButton).toBeEnabled({ timeout: 5000 });
  46 |     await nextButton.click();
  47 |
  48 |     // Step 7: Pilih tanggal dan waktu
  49 |     const startDate = new Date();
  50 |     startDate.setDate(startDate.getDate() + 3);
  51 |     const endDate = new Date();
  52 |     endDate.setDate(endDate.getDate() + 4);
  53 |
  54 |     const formattedStartLabel = `Choose ${format(startDate, 'EEEE MMMM d')} of ${format(startDate, 'yyyy')}`;
  55 |     const formattedEndLabel = `Choose ${format(endDate, 'EEEE MMMM d')} of ${format(endDate, 'yyyy')}`;
  56 |
  57 |     const startDateButton = page.locator(`div[aria-label="${formattedStartLabel}"]`);
  58 |     await expect(startDateButton).toBeVisible();
  59 |     await startDateButton.click();
  60 |
  61 |     const endDateButton = page.locator(`div[aria-label="${formattedEndLabel}"]`);
  62 |     await expect(endDateButton).toBeVisible();
  63 |     await endDateButton.click();
  64 |
  65 |     await page.getByText('Propose Time Range (WIB)').click();
  66 |     await page.locator('[id="proposedTimes_0_startTime"]').fill('10:00');
  67 |     await page.locator('[id="proposedTimes_0_endTime"]').fill('12:00');
  68 |
  69 |     // Step 8: Pilih lokasi
  70 |     const locationCombobox = page.locator('[id="proposeLocation"]');
  71 |
  72 |     if (await nextButton.isEnabled()) {
  73 |       await nextButton.click(); // Klik tombol Next langsung
  74 |     } else {
  75 |       // Jika tombol Next tidak bisa diklik, pilih lokasi terlebih dahulu
  76 |       await locationCombobox.click();
  77 |       const firstLocationCheckbox = page.locator('.rc-virtual-list-holder input[type="checkbox"]').first();
  78 |       if (await firstLocationCheckbox.isVisible()) {
  79 |         await firstLocationCheckbox.check();
  80 |         await nextButton.click(); // Klik Next setelah memilih lokasi
  81 |       }
  82 |     }
  83 |
  84 |     // Step 9: Menunggu dan memverifikasi WhatsApp field
  85 |     await page.waitForSelector('label[for="whatsapp"]');
  86 |     await expect(page.locator('#whatsapp')).toBeVisible();
  87 |
  88 |     // Step 10: Memilih LinkedIn Checkbox
  89 |     await page.locator('#linkedInChoices input[type="checkbox"]').check();
  90 |
  91 |     // Debugging: pause untuk verify hasil
  92 |     await page.pause();
  93 |   });
  94 | });
  95 |
```