import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { Accordion } from './AccordionStory';
// import * as styles from './styles.module.css';

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({
    className: classnames(styles.accordion),
});
Primary.args = {
    summary: 'Accordion',
    details: 'Accordion details',
    size: 'medium',
};
export const Small_details = Template.bind({});
Small_details.args = {
    summary: 'Accordion',
    details: 'Accordion details',
    size: 'small',
};
export const Medium_details = Template.bind({});
Medium_details.args = {
    summary: 'Accordion',
    details: 'Accordion details',
    size: 'medium',
};
export const Large_details = Template.bind({});
Large_details.args = {
    summary: 'Accordion',
    details: 'Accordion details',
    size: 'large',
};
