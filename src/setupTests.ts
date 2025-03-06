import "@testing-library/jest-dom";
import jest from 'jest-mock';

Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: class IntersectionObserver {
      constructor() {}
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn(() => []);
    },
  });
  