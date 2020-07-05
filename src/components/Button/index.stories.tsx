import React from 'react';

import { Button } from './index';

export default { title: 'Button' };

export const withDefault = (): JSX.Element => <Button label="Get in touch" />;
withDefault.story = { name: 'default' };

export const withSecondary = (): JSX.Element => (
  <Button label="Get in touch" variant="secondary" />
);
withSecondary.story = { name: 'Secondary' };

export const withTertiary = (): JSX.Element => (
  <Button label="Get in touch" variant="tertiary" />
);
withTertiary.story = { name: 'Tertiary' };

export const withSmall = (): JSX.Element => (
  <Button label="Get in touch" size="small" />
);
withSmall.story = { name: 'Small' };
