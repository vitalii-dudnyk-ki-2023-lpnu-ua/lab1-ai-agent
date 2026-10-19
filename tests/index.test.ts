import { describe, expect, it } from 'vitest';
import { add } from '../src/index.js';

describe('add', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
  });
});
