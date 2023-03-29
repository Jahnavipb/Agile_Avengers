import { getByLabelText, getByText, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../signin.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

test('check if the form elements are present', () => {
  const form = document.querySelector('#signin-form');
  const emailInput = getByLabelText(form, 'Email');
  const passwordInput = getByLabelText(form, 'Password');
  const submitButton = getByText(form, 'Submit');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('form submit event', () => {
  const form = document.querySelector('#signin-form');
  fireEvent.submit(form);
  // Add your expectations related to form submission here
});
