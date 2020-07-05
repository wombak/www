import React from 'react';

import { Header } from './index';

export default { title: 'Header' };

export const withDefault = (): JSX.Element => <Header />;
withDefault.story = { name: 'default' };

export const withLight = (): JSX.Element => <Header variant="light" />;
withLight.story = { name: 'Light' };
