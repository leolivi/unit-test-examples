import { expect, test,  vi } from 'vitest'
import { sum } from './stack.js'

test('expects 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test ('simple test variables 1', () => {
  const x = 5;
  const y = 2;
  
  expect(x+y).toBe(7);
  expect(x-y).toBe(3);
  expect(x*y).toBe(10);
  expect(x/y).toBe(2.5);
});

test('simple test with variables 2', () => {
  const a = 3;
  const b = 4;
  const c = 5;

  expect(a*a + b*b).toBe(c*c);
}); 

test('simple test build a string', () => {
  const hello = 'Hello';
  const world = 'World';

  expect (hello + ' ' + world).toBe('Hello World');
});

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(9)).toBe(3)
  expect(Math.sqrt(121)).toBe(11)
  expect(Math.sqrt(144)).toBe(12)
})

test('simple test expecting to fail', () => {
  const a = 'Hello';
  const b = 4;
  const c = 5;

  try {
    expect(a*a + b*b).toBe(c*c);
  } catch (error) {
    console.log('Test has failed')
    throw error;
  } 
 }); 

 test('check if console.log was called if test failed', () => {
    const logSpy = vi.spyOn(console, 'log');
    console.log('Test has failed');
    expect(logSpy).toHaveBeenCalledWith('Test has failed');
 });