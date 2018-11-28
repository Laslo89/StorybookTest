/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs' // eslint-disable-line no-unused-vars
import TestComponent from './test-component.vue'

storiesOf(TestComponent.name, module)
  .addDecorator(withKnobs)
  .add(
    'as Component',
    () => ({
      components: { TestComponent },
      props: {
        textProp: {
          type: String,
          default: text('text', 'peter'),
        },
      },
      template: '<TestComponent :text="textProp" />',
    }),
    { notes: 'My notes on some bold text' }
  )
