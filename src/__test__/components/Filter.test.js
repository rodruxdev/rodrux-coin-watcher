import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Filter from '@components/Filter';

describe('Filter Tests', () => {
  test('renders content', () => {
    const box = 'orange';
    const optionList = 'BTC';
    const label = `${optionList} filter`;
    const component = render(<Filter box={box} optionList={optionList} />);
    component.getByLabelText(label);
  });
});
