import useScrollTo from '../useScrollTo'; // whatever is your path
import {renderHook} from '@testing-library/react-hooks';

describe('useSelectorTo', () => {
  it('should not call ScrollToIndex', () => {
    const ref = {
      current: {
        scrollToIndex: jest.fn(),
      },
    };
    const chat = [{isSelected: false, id: 1}];
    renderHook(() => useScrollTo(ref, chat));
    expect(ref.current.scrollToIndex).toHaveBeenCalledTimes(0);
  });

  it('should call scrollToIndex', () => {
    const ref = {
      current: {
        scrollToIndex: jest.fn(),
      },
    };
    const chat = [{isSelected: true, id: 1}];
    renderHook(() => useScrollTo(ref, chat));
    expect(ref.current.scrollToIndex).toHaveBeenCalledTimes(1);
  });
});
