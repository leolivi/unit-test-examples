class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
    }
  
    get peek() {
      return this.items[this.top];
    }
  
    push(value) {
      this.top += 1;
      this.items[this.top] = value;
    }

    clear() {
      this.top = -1;
      this.items = {};
    }
  }
  
  describe('My Stack', () => {
    let stack;
  
    beforeEach(() => {
      stack = new Stack();
    });
  
    test('is created empty', () => {
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
    });
  
    test('can push to the top', () => {
      stack.push('🥑');
      expect(stack.top).toBe(0);
      expect(stack.peek).toBe('🥑');
  
      stack.push('🌽');
      expect(stack.top).toBe(1);
      expect(stack.peek).toBe('🌽');
    });

    test('can push multiple items to the top', () => {
      stack.push('🥝');
      stack.push('🍏');
      stack.push('🍓');

      expect(stack.top).toBe(2);
      expect(stack.peek).toBe('🍓');

      expect(stack.items[0]).toBe('🥝');
      expect(stack.items[1]).toBe('🍏');
      expect(stack.items[2]).toBe('🍓');
    });

    test('clear stack', () => {
      stack.push('🥝');
      stack.push('🍏');

      stack.clear();

      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
    });
  
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
  });