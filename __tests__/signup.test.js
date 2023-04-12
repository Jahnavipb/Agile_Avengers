import { getByLabelText, getByText, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../signup.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

test('check if the form elements are present', () => {
  const form = document.querySelector('#signup-form');
  const emailInput = getByLabelText(form, 'Email');
  const passwordInput = getByLabelText(form, 'Password');
  const submitButton = getByText(form, 'Submit');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('form submit event', () => {
  const form = document.querySelector('#signup-form');
  const emailInput = getByLabelText(form, 'Email');
  const passwordInput = getByLabelText(form, 'Password');
  const submitButton = getByText(form, 'Submit');

  // Mock the form submission event handler
  const handleSubmit = jest.fn((e) => e.preventDefault());
  form.addEventListener('submit', handleSubmit);

  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'ValidPass123' } });

  // Expect the submit button to be enabled after entering valid input
  expect(submitButton).not.toBeDisabled();

  // Trigger form submission
  fireEvent.submit(form);

  // Expect the form submission event handler to be called
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
