import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('MyButton', module).add('with text', () => (
  <Button>Hello Button</Button>
));
