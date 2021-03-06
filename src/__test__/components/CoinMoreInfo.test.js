import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinMoreInfo from '@components/CoinMoreInfo';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const props = {
      title: 'High 24h',
      value: '$772504060',
    };
    const component = render(
      <CoinMoreInfo title={props.title}>{props.value}</CoinMoreInfo>
    );
    component.getByText(props.title);
    component.getByText(props.value);
  });
});
