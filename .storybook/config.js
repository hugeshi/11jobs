import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index.js');
  require('../src/stories/welcome.js');

  // You can require as many stories as you need.
}

configure(loadStories, module);