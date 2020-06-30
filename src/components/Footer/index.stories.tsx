import React from 'react';

import { Footer } from './index';

export default { title: 'Footer' };

export const withDefault = (): JSX.Element => <Footer />;
withDefault.story = { name: 'default' };

export const withDark = (): JSX.Element => <Footer variant="dark" />;
withDark.story = { name: 'dark' };
