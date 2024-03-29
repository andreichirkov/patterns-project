import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/avatar-for-storybook.jpeg'

export default {
  title: 'entity/LoginForm',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    lastname: 'surname',
    age: 32,
    country: Country.Ukraine,
    city: 'Che',
    currency: Currency.USD,
    avatar: AvatarImg
  }
};


export const withError = Template.bind({});
withError.args = {
  error: 'true'
};


export const Loading = Template.bind({});
Loading.args = {};

