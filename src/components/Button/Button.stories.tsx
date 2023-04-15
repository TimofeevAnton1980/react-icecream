import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './ButtonStory';
import classnames from 'classnames';
import cssButton from './styles.module.css';
// import * as cssButton from './styles.module.css';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({
    className: classnames(cssButton.button, cssButton.button_primary),
});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
