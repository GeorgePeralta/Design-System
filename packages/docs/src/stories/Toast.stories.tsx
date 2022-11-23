import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@peralta-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quinta-feira, 29 de dezembro às 22h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
