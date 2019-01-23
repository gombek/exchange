import React from 'react';
import Exchanger from '../../features/Exchanger';

import './ExchangeWidget.scss';

const ExchangeWidget = () => (
  <article className="exchange-widget">
    <Exchanger />
    <aside className="exchange-widget__note">
      <p><strong>Info: </strong>The "from" currency (upper one) is locked to the USD value due to
        Open Exchange Rates' free plan limitation. It is easy to unlock in the "src/App/features/Exchanger/Exchanger.jsx" file.
      </p>
      <p>I know there is still lots of things to do, like:</p>
      <ul>
        <li>Cover more edge-cases</li>
        <li>Add more tests</li>
        <li>Better interface (custom select)</li>
        <li>Typings / prop-types</li>
        <li>Other missing features</li>
        <li>...and probably more</li>
      </ul>
    </aside>
  </article>
);

export default ExchangeWidget;