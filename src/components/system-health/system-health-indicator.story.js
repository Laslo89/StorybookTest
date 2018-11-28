/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs' // eslint-disable-line no-unused-vars
import { action } from '@storybook/addon-actions' // eslint-disable-line no-unused-vars
import { linkTo } from '@storybook/addon-links' // eslint-disable-line no-unused-vars

import SystemHealthIndicator from './system-health-indicator.vue'

storiesOf(SystemHealthIndicator.name, module).add('as Component', () => {
  const label = text('label', '')
  const color = text('color', 'white')
  const icon = text('icon', 'error')
  return {
    components: { SystemHealthIndicator },
    data: function() {
      return {
        value: 2,
      }
    },
    template: `<SystemHealthIndicator label="${label}" color="${color}" :value="value" icon="${icon}" />`,
  }
})
