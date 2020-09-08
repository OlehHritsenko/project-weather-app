import refs from './refs';
import dataBlockTpl from '../template/data-block.hbs';

export function dataBlokMarkup(city) {
  const markup = dataBlockTpl(city);
  refs.dataBlockRef.insertAdjacentHTML('beforeend', markup);
}
