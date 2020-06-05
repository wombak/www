import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const customTheme = create({
  base: 'dark',
  brandTitle: 'Wombak UI',
  brandUrl: 'https://github.com/wombak/www'
});

addons.setConfig({
  theme: customTheme
});
