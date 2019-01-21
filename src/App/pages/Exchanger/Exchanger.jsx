import React from 'react';
import CurrencySlide from '../../features/CurrencySlide';

const Exchanger = () => (
  <article>
    <CurrencySlide currency="USD" direction="from" />
    <CurrencySlide currency="EUR" direction="to"/>
  </article>
);

export default Exchanger;