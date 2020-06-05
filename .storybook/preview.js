import { addDecorator } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    inline: true,
    styles: {
      infoStory: {
        backgroundColor: '#fff',
        paddingLeft: 20
      }
    }
  })
);
