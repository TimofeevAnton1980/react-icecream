import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import classnames from 'classnames';
import { Input } from './InputStory';
import styles from './styles.module.css';
// import * as styles from './styles.module.css';

export default {
    title: 'Input',
    component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({
    className: classnames(styles.input, styles.input_valid),
});
Primary.args = {
    labelText: 'Input',
    primary: true,
};
export const Invalid = Template.bind({});
Invalid.args = {
    labelText: 'Input',
    invalid: `${styles.input_invalid}`,
};
export const Valid = Template.bind({});
Valid.args = {
    labelText: 'Input',
    valid: `${styles.input_valid}`,
};
export const Success = Template.bind({});
Success.args = {
    labelText: 'Input',
    success: `${styles.input_success}`,
};
