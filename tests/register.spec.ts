import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/mentoring');
});

test.describe('Test Case Register as Job-Seeker / Mentee', () =>{
  const data = [
    {status: "Valid", title: "Input Valid Data", name: "Annisa", whatsAppNumber: "62811111111111", universityName: "Testing University", companyName: "Politeknik Negeri Jakarta", roleLevel: "Staff", roleName: "QA Tester", startDate: "12/2020", endDate: "12/2023", password: "xzsawq21!", confirmPassword: "xzsawq21!"},
    {status: "Invalid", title: "Input Invalid Data", name: "Annisa", whatsAppNumber: "0811111111111", universityName: "Testing University", companyName: "Politeknik Negeri Jakarta", roleLevel: "Staff", roleName: "QA Tester", startDate: "12/2020", endDate: "12/2023", password: "xzsawq21!", confirmPassword: "xzsawq21!"}
  ]
  for (const register of data) {
  test(`Guest User as Job-Seeker / Mentee Register by ${register.title}`, async ({page}) => {
    const generateEmail = `test${Date.now()}${Math.floor(Math.random() * 1000)}@mail.tm`;
    const elementRegister = {
      daftarButton: page.locator("[id='dealls-navbar-register-btn']"),
      signUpWithEmail: page.getByRole('link', { name: 'Sign Up With Email' }),
      fullNameInput: page.locator('#fullName'),
      nextButton: page.getByRole('button', { name: 'Selanjutnya' }),
      jobSearchSelector: page.locator('.ant-select-selector').first(),
      activelyLookingOption: page.getByText('Actively looking for the next'),
      whatsappInput: page.locator('#whatsapp'),
      emailInput: page.locator('#email'),
      campusInput: page.locator('#campus'),
      addUniversityButton: (univ: string) => page.getByRole('button', { name: new RegExp(`Add\\s+\`${univ}\``, 'i') }),
      experienceSelector: page.locator('div:nth-child(6) .ant-select-selector'),
      yoeOption: page.getByTitle('- 5 YoE'),
      skipCVButton: page.getByRole('button', { name: /Skip for now, my CV is not/i }),
      companyNameInput: page.locator('#companyName'),
      addCompanyButton: (company: string) => page.getByRole('button', { name: new RegExp(`Add\\s+\`${company}\``, 'i') }),
      roleLevelInput: page.locator('#roleLevel'),
      addRoleLevelButton: (roleLevel: string) => page.getByRole('button', { name: new RegExp(`Add\\s+\`${roleLevel}\``, 'i') }),
      roleNameInput: page.locator('#roleName'),
      addRoleNameButton: (roleName: string) => page.getByRole('button', { name: new RegExp(`Add\\s+\`${roleName}\``, 'i') }),
      startDateInput: page.locator('#startDate'),
      endDateInput: page.locator('#endDate'),
      interestedText: page.getByText('What roles are you interested in?'),
      passwordInput: page.locator('#password'),
      passwordConfirmInput: page.locator('#passwordConfirmation'),
      privacyPolicyCheckbox: page.locator('#checkPrivacyPolicy'),
      finishButton: page.getByRole('button', { name: 'Finish' }),
      welcomeDialogText: page.getByRole('dialog').locator('div', { hasText: /Welcome to Dealls!.*750\+/ }).nth(1),
      closeButton: page.locator('button[aria-label="Close"]')
    };
    const elementErrorRegister = {
      whatsappError: page.locator('.ant-form-item-explain-error'),
    };

    await expect(elementRegister.daftarButton).toBeVisible({ timeout: 6000});
    await elementRegister.daftarButton.click();
    await expect(page.getByRole('heading', { name: 'Job-Seeker / Mentee' })).toBeVisible();
    await elementRegister.signUpWithEmail.first().click();
    await elementRegister.fullNameInput.waitFor({ timeout: 10000 });
    await elementRegister.fullNameInput.fill('testing');
    await elementRegister.nextButton.click();
    await elementRegister.jobSearchSelector.click();
    await elementRegister.activelyLookingOption.click();

    if (register.status === "Valid") {
    await elementRegister.whatsappInput.fill(register.whatsAppNumber);
    await elementRegister.emailInput.fill(generateEmail);
    await elementRegister.campusInput.fill(register.universityName!);
    await elementRegister.addUniversityButton(register.universityName!).click();
    await elementRegister.experienceSelector.click();
    await elementRegister.yoeOption.click();
    await elementRegister.nextButton.click();
    await elementRegister.skipCVButton.click();
    await elementRegister.nextButton.click();
    await elementRegister.companyNameInput.waitFor({ timeout: 5000 });
    await elementRegister.companyNameInput.fill(register.companyName);
    await elementRegister.addCompanyButton(register.companyName).click();
    await elementRegister.roleLevelInput.fill(register.roleLevel!);
    await elementRegister.addRoleLevelButton(register.roleLevel!).click();
    await elementRegister.roleNameInput.fill(register.roleName!);
    await elementRegister.addRoleNameButton(register.roleName!).click();
    await elementRegister.startDateInput.fill(register.startDate);
    await elementRegister.endDateInput.fill(register.endDate);
    await elementRegister.nextButton.click();
    await expect(elementRegister.interestedText).toBeVisible();
    await elementRegister.nextButton.click();
    await elementRegister.passwordInput.waitFor();
    await elementRegister.passwordInput.fill(register.password!);
    await elementRegister.passwordConfirmInput.fill(register.confirmPassword!);
    await elementRegister.privacyPolicyCheckbox.check();
    await elementRegister.finishButton.click();
    /**assertion */
    await page.waitForURL('**/?welcome=true');
    await expect(elementRegister.welcomeDialogText).toBeVisible();
    await elementRegister.closeButton.click();
    } else if (register.status === "Invalid") {
      await elementRegister.whatsappInput.fill(register.whatsAppNumber);
      await expect(elementErrorRegister.whatsappError).toHaveText(/Please start with your country code/);
      await expect(elementRegister.nextButton).toBeDisabled();
    }
    });
  }
});