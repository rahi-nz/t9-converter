import renderer from 'react-test-renderer';
import Layout from './index';

describe('<Layout/>', () => {
  let rootElement;
  let testRenderer;

  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => (
    <Layout>
      <div></div>
    </Layout>
  );
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());
  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
