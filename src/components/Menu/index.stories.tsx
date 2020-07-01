import React from 'react';

import { Menu } from './index';

export default { title: 'Menu' };

export const withDefault = (): JSX.Element => <Menu />;
withDefault.story = { name: 'default', parameters: { storyshots: false } };
