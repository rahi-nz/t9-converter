import renderer from 'react-test-renderer';
import Button from './index';

describe('<Button/>', () => {
  let rootElement;
  let testRenderer;
  const handleClick = jest.fn();
  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => (
    <Button handleClick={handleClick} disabled={false} title="2" subtitle="abc" />
  );
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
