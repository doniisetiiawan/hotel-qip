import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SubHeader from './SubHeader';

describe('the <SubHeader /> component', () => {
  const renderer = new ShallowRenderer();

  it('should render with a dynamic title', () => {
    renderer.render(<SubHeader title="Test Application" />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });
});
