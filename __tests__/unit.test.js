// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('(800) 372-5004 is a phone number', () => {
    expect(isPhoneNumber(('(800) 372-5004'))).toBe(true);
});

test('510-283-2847 is a phone number', () => {
    expect(isPhoneNumber('510-283-2847')).toBe(true);
});

test('8003725004 is not a phone number', () => {
    expect(isPhoneNumber('8003725004')).toBe(false);
});

test('510 283 2847 is not a phone number', () => {
    expect(isPhoneNumber('510 283 2847')).toBe(false);
});

test('email@gmail.com is an email', () => {
    expect(isEmail(('email@gmail.com'))).toBe(true);
});

test('cse110@hotmail.net is an email', () => {
    expect(isEmail(('cse110@hotmail.net'))).toBe(true);
});

test('email me@gmail.com is not an email', () => {
    expect(isEmail(('email me@gmail.com'))).toBe(false);
});

test('cse110@hotmailnet is not an email', () => {
    expect(isEmail(('cse110@hotmailnet'))).toBe(false);
});

test('hello123 is a strong password', () => {
    expect(isStrongPassword(('hello123'))).toBe(true);
});

test('cse_110_sp24 is a strong password', () => {
    expect(isStrongPassword(('cse_110_sp24'))).toBe(true);
});

test('1password1 is not a strong password', () => {
    expect(isStrongPassword(('1password1'))).toBe(false);
});

test('cse/110+sp24 is not a strong password', () => {
    expect(isStrongPassword(('cse/110+sp24'))).toBe(false);
});

test('20/4/2024 is a date', () => {
    expect(isDate(('20/4/2024'))).toBe(true);
});

test('12/31/2002 is a date', () => {
    expect(isDate(('12/31/2002'))).toBe(true);
});

test('20-4-2024 is not a date', () => {
    expect(isDate(('20-4-2024'))).toBe(false);
});

test('12.31.2002 is not a date', () => {
    expect(isDate(('12.31.2002'))).toBe(false);
});

test('#FFFFFF is a hex color', () => {
    expect(isHexColor(('#FFFFFF'))).toBe(true);
});

test('#89adf9 is a hex color', () => {
    expect(isHexColor(('#89adf9'))).toBe(true);
});

test('FFFFF is not a hex color', () => {
    expect(isHexColor(('FFFFF'))).toBe(false);
});

test('#89adf9 is not a hex color', () => {
    expect(isHexColor(('#89df9'))).toBe(false);
});
