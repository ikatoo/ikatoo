import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProgressBar from '.'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStory<typeof ProgressBar> = (args) => (
  <div className="w-48 h-24 bg-mck_black_light">
    <ProgressBar {...args} />
  </div>
)

export const Animated: ComponentStory<typeof ProgressBar> = (args) => (
  <div className="w-48 h-24 bg-mck_black_light">
    <ProgressBar {...args} />
  </div>
)
Animated.args = {
  timeAnimation: 5000
}
