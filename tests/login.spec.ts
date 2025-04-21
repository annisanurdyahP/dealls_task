import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/mentoring');
});

/** element for login */
const getLoginElements = (page) => ({
  signInButton: page.locator('[id="dealls-navbar-login-btn"]'),
  emailField: page.locator('[id="basic_email"]'),
  passwordField: page.locator('[id="basic_password"]'),
  submitSignInButton: page.getByRole('button', { name: 'Sign In', exact: true }),
  invalidErrorMessage: page.locator('#basic_email_help .ant-form-item-explain-error'),
  errorMessageSignIn: page.locator('.ant-message-notice-content .ant-message-error')
});

test.describe('Test Case Login as Job Seeker', () =>{
  const dataLogin = [
      {status: "Valid", title: "Input Valid Email", email: "testingjobseeker@jobtest.com", password: "xzsawq21!"},
      {status: "Invalid", title: "Input Invalid Email", email: "testingjobseekerjobtest.com", password: "xzsawq21!"},
      {status: "Invalid", title: "Input Wrong Password", email: "testingjobseeker@jobtest.com", password: "xzsawq21"},
      {status: "Invalid", title: "Input Case-Sensitive Password", email: "testingjobseeker@jobtest.com", password: "XZSAWQ21!"},
      {status: "Invalid", title: "Input Unregistered Email", email: "testingj123@jobtest.com", password: "xzsawq21!"},
  ]
  for (const dataLoginJobSeeker of dataLogin) {
    test(`User Login with ${dataLoginJobSeeker.title}`, async ({page}) => {
      const elementHomepage = {
        userPhoto: page.locator('img[alt="user photo"]'),
        successMessage: page.locator('.ant-message-notice-content')
      };

      const { signInButton, emailField, passwordField, submitSignInButton, invalidErrorMessage, errorMessageSignIn } = getLoginElements(page);

      await expect(signInButton).toBeVisible({ timeout: 6000 });
      await signInButton.click();
      await emailField.fill(dataLoginJobSeeker.email);
      await passwordField.fill(dataLoginJobSeeker.password);
      await submitSignInButton.click();

      /** assertion */
      if (dataLoginJobSeeker.status === 'Valid') {
        await expect(elementHomepage.successMessage).toBeVisible();
        await expect(elementHomepage.userPhoto).toBeVisible();
      }

      if (dataLoginJobSeeker.status === 'Invalid') {
        if (dataLoginJobSeeker.title.includes('Input Invalid Email')) {
          await expect(invalidErrorMessage).toHaveText('Invalid email format');
        }

        if (
          dataLoginJobSeeker.title.includes('Input Wrong Password') ||
          dataLoginJobSeeker.title.includes('Input Case-Sensitive Password')
        ) {
          await expect(emailField).toBeVisible();
          await expect(passwordField).toBeVisible();
        }

        if (dataLoginJobSeeker.title.includes('Input Unregistered Email')) {
          const errorText = errorMessageSignIn.locator('span').filter({
            hasText: 'Email Not found',
          });
          await expect(errorText).toBeVisible();
          await expect(errorText).toHaveText(/Email Not found/);
        }
      }
    });
  }
});

test.describe('Test Case Login as Mentor', () =>{
  const dataMentor = [
      {status: "Valid", title: "Input Valid Email", email: "testingmentor@mentortest.com", password: "xzsawq21!"},
      {status: "Invalid", title: "Input Invalid Email", email: "testingmentorjobtest.com", password: "xzsawq21!"},
      {status: "Invalid", title: "Input Wrong Password", email: "testingmentor@mentortest.com ", password: "xzsawq21"},
      {status: "Invalid", title: "Input Case-Sensitive Password", email: "testingmentor@mentortest.com ", password: "XZSAWQ21!"},
      {status: "Invalid", title: "Input Unregistered Email", email: "testingj123@jobtest.com", password: "xzsawq21!"},
  ]
  for (const dataLoginMentor of dataMentor) {
    test(`User Login with ${dataLoginMentor.title}`, async ({page}) => {
      const elementHomepageMentor = {
        userPhoto: page.locator('img[alt="user photo"]'),
        successMessage: page.locator('.ant-message-notice-content'),
        greetingTitle: page.locator('h1.HeroTitleSubtitle_title_subtitle__GlZkf'),
        thankYouMessage: page.locator('h2.mt-3')
      };

      const { signInButton, emailField, passwordField, submitSignInButton, invalidErrorMessage, errorMessageSignIn } = getLoginElements(page);

      await expect(signInButton).toBeVisible({ timeout: 6000 });
      await signInButton.click();
      await emailField.fill(dataLoginMentor.email);
      await passwordField.fill(dataLoginMentor.password);
      await submitSignInButton.click();

      /** assertion */
      if (dataLoginMentor.status === 'Valid') {
        await expect(elementHomepageMentor.successMessage).toBeVisible();
        await expect(elementHomepageMentor.userPhoto).toBeVisible();
        await expect(elementHomepageMentor.greetingTitle).toHaveText(/Hi,\s*testing!?/);
        await expect(elementHomepageMentor.thankYouMessage).toHaveText(/Terima kasih atas semangat Anda menjadi Mentor/);
      }
      if (dataLoginMentor.status === 'Invalid') {
        if (dataLoginMentor.title.includes('Input Invalid Email')) {
          await expect(invalidErrorMessage).toHaveText('Invalid email format');
        }

        if (
          dataLoginMentor.title.includes('Input Wrong Password') ||
          dataLoginMentor.title.includes('Input Case-Sensitive Password')
        ) {
          await expect(emailField).toBeVisible();
          await expect(passwordField).toBeVisible();
        }

        if (dataLoginMentor.title.includes('Input Unregistered Email')) {
          const errorText = errorMessageSignIn.locator('span').filter({
            hasText: 'Email Not found',
          });
          await expect(errorText).toBeVisible();
          await expect(errorText).toHaveText(/Email Not found/);
      }
    }
  });
}
});