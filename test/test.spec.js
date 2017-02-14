import TestComponent from './components/TestComponent.js';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

console.log('START test.spec.js')

var component;
var spy = sinon.spy();

describe('Given an instance of the TestComponent', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<TestComponent onRender={ spy } />);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
  });
});
    
console.log('END test.spec.js')