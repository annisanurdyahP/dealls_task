import { Page } from '@playwright/test';

export const formLogin = async (page: Page, email: string, password: string) => {
  const signInButton = page.locator('[id="dealls-navbar-login-btn"]');
  const emailField = page.locator('[id="basic_email"]');
  const passwordField = page.locator('[id="basic_password"]');
  const submitSignInButton = page.getByRole('button', { name: 'Sign In', exact: true });

  await signInButton.click();
  await emailField.fill(email);
  await passwordField.fill(password);
  await submitSignInButton.click();
};