import '../css/site.css';
import '../css/style.css';

import { makePostRequest } from './utils';

const btn = document.querySelector('#test-click-btn');

btn?.addEventListener('click', () => {
  makePostRequest('/site/test', { id: 1, name: 'zadarius' })
    .then(console.log)
    .catch(console.error)
});