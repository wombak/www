import React from 'react';

import { HelloWorld } from './index';

export default { title: 'HelloWorld' };

export const withDefault = (): JSX.Element => (
  <HelloWorld label="Hello world 👋" />
);

withDefault.story = { name: 'default' };
