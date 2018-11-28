import { configure, addDecorator } from '@storybook/vue';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { backgrounds } from './backgrounds';
import { withNotes } from '@storybook/addon-notes';
import store from './../src/store/store';
import './../src/vuetify';
import './../src/styles/styles.scss';



// initI18n();

addDecorator(withNotes);

addDecorator(
  withBackgrounds(backgrounds)
);

addDecorator(() => ({
  store,
  template: '<v-app style="background-color: transparent"><story/></v-app>',
}));

addDecorator(
  withBackgrounds(backgrounds)
);

const req = require.context('../src', true, /.story.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
