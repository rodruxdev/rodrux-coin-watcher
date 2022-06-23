import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import SocialButton from '@components/SocialButton';
import { render } from '@testing-library/react';

describe('SocialButton Tests', () => {
  test('renders empty button content', () => {
    const component = render(<SocialButton />);
    const link = component.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.rodrux.com/');
  });
  test('renders web button content', () => {
    const component = render(<SocialButton box="blue" type="web" />);
    const link = component.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.rodrux.com/');
  });
  test('renders web button content', () => {
    const component = render(<SocialButton box="orange" type="github" />);
    const link = component.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/rodruxdev');
  });
  test('renders web button content', () => {
    const component = render(<SocialButton box="blue" type="linkedin" />);
    const link = component.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/rodrigo-goitia/'
    );
  });
});
