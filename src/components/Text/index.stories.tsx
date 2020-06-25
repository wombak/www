import React from 'react';

import { Text } from './index';

export default { title: 'Text' };

export const withDefault = (): JSX.Element => <Text>Hello World</Text>;

withDefault.story = { name: 'default' };

export const withSizeXL = (): JSX.Element => (
  <Text size="xl">H2/Dark-Mobile</Text>
);

withSizeXL.story = { name: 'Size XL' };

export const withSizeXXL = (): JSX.Element => <Text size="xxl">H2/Dark</Text>;

withSizeXXL.story = { name: 'Size XXL' };

export const withSizeXXXL = (): JSX.Element => <Text size="xxxl">H1/Dark</Text>;

withSizeXXXL.story = { name: 'Size XXXL' };
