import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PairInfo from '@components/PairInfo';

describe('PairInfo Tests', () => {
  const props = {
    title: 'Market Cap',
    value: '$14523.53',
  };
  test('renders content', () => {
    const component = render(
      <PairInfo title={props.title}>{props.value}</PairInfo>
    );
    component.getByText(props.title);
    component.getByText(props.value);
  });
});
