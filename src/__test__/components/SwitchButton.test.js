import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SwitchButton from '@components/SwitchButton';

describe('SwitchButton Tests', () => {
  test('renders content', () => {
    const component = render(<SwitchButton />);
    component.getByLabelText('conversion button');
  });
});
