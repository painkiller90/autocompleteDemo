import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import AppContainer from '../containers/AppContainer';

describe('App Container tests', () => {
  const renderComponent = () => {
    return render(
      <div role='main'>
        <AppContainer />
      </div>
    );
  };

  it('should render AppContainer properly without any prop', () => {
    const Container = render(<AppContainer />).baseElement;
    expect(Container).toMatchSnapshot();
  });

  it('should have no accessibility violations', async () => {
    const Container = renderComponent().baseElement;
    expect(await axe(Container)).toHaveNoViolations();
  });
});
