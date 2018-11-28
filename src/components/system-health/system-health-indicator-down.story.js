/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions' // eslint-disable-line no-unused-vars
import { linkTo } from '@storybook/addon-links' // eslint-disable-line no-unused-vars

import SystemHealthIndicatorDown from './system-health-indicator-down.vue'

storiesOf(SystemHealthIndicatorDown.name, module).add('as Component', () => ({
  components: { SystemHealthIndicatorDown },
  template: '<SystemHealthIndicatorDown />',
}))
