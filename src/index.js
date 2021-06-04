import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { HeroesApp } from './HeroesApp';

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);
