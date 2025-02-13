import './scss/style.scss';
//выпадающее пеню на мобилке
//валидация формы
//фиксация шапки
import {fixedHeader} from 'header.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    fixedHeader();
  });
});

