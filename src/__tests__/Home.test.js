import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';  // Adjust the import path based on your project structure

test('it is exported as a default export', () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error('Make sure to export this component!');
  }
});
