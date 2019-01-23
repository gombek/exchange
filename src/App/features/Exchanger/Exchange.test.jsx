import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Exchanger from './Exchanger';

describe('Exchanger feature', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Exchanger/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const nodes = renderer
      .create(
        <Exchanger
          rate={ 2 }
          currencies={ ['USD', 'EUR'] }
          from={ 'USD' }
          fromValue={ 100 }
          fromBalance={ 2000 }
          to={ 'EUR' }
          toValue={ 200 }
          toBalance={ 0 }
        />
      )
      .toJSON();
    expect(nodes).toMatchSnapshot();
  });
});
