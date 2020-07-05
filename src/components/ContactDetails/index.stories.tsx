import React from 'react';

import { ContactDetails } from './index';

export default { title: 'Contact Details' };

export const withDefault = (): JSX.Element => <ContactDetails />;
withDefault.story = { name: 'default' };

export const withLight = (): JSX.Element => <ContactDetails variant="light" />;
withLight.story = { name: 'light' };
