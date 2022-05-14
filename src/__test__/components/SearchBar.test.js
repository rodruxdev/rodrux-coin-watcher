import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '@components/SearchBar';
import { fireEvent, render } from '../middlewares/test-utils';

describe('SearchBar Tests', () => {
  test('it should render content', () => {
    const component = render(<SearchBar />);
    component.getByLabelText('search');
    component.getByTestId('search-icon');
  });
  test('it should write Bitcoin in search', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: 'Bitcoin' } });
    component.getByLabelText('clean search');
    component.getByTestId('clean-icon');
    expect(search.value).toBe('Bitcoin');
  });
  test('it should not allow number or symbols to be inputted', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: '123/,.-+' } });
    component.getByTestId('search-icon');
    expect(search.value).toBe('');
  });
  test('it should not allow number or symbols to be inputted', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: '123/Bitc1@ oin,.-+' } });
    component.getByLabelText('clean search');
    component.getByTestId('clean-icon');
    expect(search.value).toBe('Bitcoin');
  });
  test('it should clean input on click', () => {
    const component = render(<SearchBar />);
    const search = component.getByLabelText('search');
    fireEvent.change(search, { target: { value: 'Bitcoin' } });
    const button = component.getByLabelText('clean search');
    component.getByTestId('clean-icon');
    expect(search.value).toBe('Bitcoin');
    fireEvent.click(button);
    component.getByTestId('search-icon');
    expect(search.value).toBe('');
  });
});
