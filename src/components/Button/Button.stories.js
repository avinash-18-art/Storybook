import React from 'react';
import Button from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    kind: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    leftIcon: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: 'Click me',
  color: 'default',
  kind: 'primary',
  leftIcon: null,
};
