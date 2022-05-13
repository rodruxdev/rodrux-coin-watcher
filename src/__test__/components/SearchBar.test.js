import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import SearchBar from '@components/SearchBar';

describe('SearchBar Tests', () => {
  test('it should render content', () => {
    const component = render(<SearchBar />);
    component.getByLabelText('search');
  });
  test('it should write Bitcoin in search', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: 'Bitcoin' } });
    expect(search.value).toBe('Bitcoin');
  });
  test('it should not allow number or symbols to be inputted', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: '123/,.-+' } });
    expect(search.value).toBe('');
  });
});
