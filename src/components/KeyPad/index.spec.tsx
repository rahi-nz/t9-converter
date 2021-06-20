/**
 * @jest-environment jsdom
 */

import renderer, { act } from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import KeyPad from './index';
import fetchMock from 'jest-fetch-mock';

describe('<KeyPad/>', () => {
  let rootElement;
  let testRenderer;
  beforeEach(() => {
    // eslint-disable-next-line prefer-const,react/display-name
    rootElement = () => <KeyPad />;
    // eslint-disable-next-line prefer-const
    testRenderer = renderer.create(rootElement());
    fetchMock.resetMocks();
  });

  it('should call fetchData after 1000ms after typing', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(['a', 'b', 'c']));
    await act(async () => {
      testRenderer.root.findAllByType('button')[1].props.onClick();
      await waitFor(
        () => {
          expect(
            testRenderer.root.findAllByProps({ 'data-test-id': 'suggested' }).length,
          ).toBe(3);
        },
        {
          timeout: 1500,
        },
      );
    });
  });

  it('should not call fetchData before 1000ms after typing', async () => {
    await act(async () => {
      testRenderer.root.findAllByType('button')[1].props.onClick();
      await waitFor(
        () => {
          expect(
            testRenderer.root.findAllByProps({ 'data-test-id': 'suggested' }).length,
          ).toBe(0);
        },
        {
          timeout: 500,
        },
      );
    });
  });

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
