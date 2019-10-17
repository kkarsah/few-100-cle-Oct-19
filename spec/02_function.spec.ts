import { isEven, itdoubles, accumulate } from './utils';

describe('functions', () => {
  it('how to declare them ', () => {
    // two ways:
    // 1. mamed functions
    function add(a: number, b: number) {
      return a + b;
    }
    expect(add(2, 2)).toBe(4);
  });

  // 2. Anonymous Functions

  const substract = function (a: number, b: number) {
    return a - b;
  };
  // expect(substract(2, 1)).toBe(1);

  const multiply = (a: number, b: number) => a * b;
  // expect(multiply(2, 2)).toBe(4);
});
it('arrow functions', () => {
  const formatName = (first: string, last: string) => {
    if (last.length > 10) {
      throw new Error('too long');

    }
    return `${last}, ${first}`;
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');
  };
});

describe('parameters to fuctions', () => {
  it('an exmaple - overloading', () => {
    function nameFormatter(first: string, last: string, mi?: string) {
      let fullname = `${last}, ${first}`;
      if (mi) {
        fullname += `${mi}`;
      }

      return fullname;
    }

    expect(nameFormatter('Han', 'Solo')).toBe('Solo, Han');
    // expect(nameFormatter('Han', 'Solo', 'D')).toBe('Solo, Han D.');
  });

  it('default values for parameters', () => {
    function add(a: number = 10, b: number = 15) {
      return a + b;
    }

    expect(add()).toBe(25);

  });

  it('rest argu,enmt ', () => {

    function add(a: number, b: number, ...rest: number[]) {
      const firstTwo = a + b;
      return rest.reduce((x, y) => x + y, firstTwo);
    }

    expect(add(1, 3)).toBe(4);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

  });

});

describe('higher order functions', () => {
  it('anexample of a function that takes a function', () => {
    function identity(n: string) { return n; }

    type StringModifer = (msg: string) => string;
    function printItOut(message: string, fn: StringModifer = identity): void {
      console.log(`At ${new Date().toISOString()}:`, fn(message));
    }

    printItOut('Tacos!', (n) => n.toUpperCase());
    printItOut('Tacos2', (n) => '***' + n + '***');
    printItOut('Tortilla!');
    printItOut('HOF Rawk!', makeUpper);

    function makeUpper(x: string) {
      return x.toUpperCase();
    }
  });
  describe('a function that returns a function - eventually, two other ways first', () => {
    it('not a HOF, doing it a "sane" way', () => {
      // <element>content</element>
      // <h1>Hello</h1>

      function tagMaker(element: string, content: string) {
        return `<${element}>${content}</${element}>`;
      }

      expect(tagMaker('h1', 'Tacos')).toBe('<h1>Tacos</h1>');
      expect(tagMaker('h1', 'Chips')).toBe('<h1>Chips</h1>');
      expect(tagMaker('h1', 'Salsa')).toBe('<h1>Salsa</h1>');
      expect(tagMaker('p', 'coolio')).toBe('<p>coolio</p>');
    });
    it('using an object', () => {


      class TagMaker {

        private element: string;
        constructor(element: string) {
          this.element = element;
        }

        make(content: string) {
          return `<${this.element}>${content}</${this.element}>`;
        }
      }

      const h1Maker = new TagMaker('h1');
      expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');
      expect(h1Maker.make('Chips')).toBe('<h1>Chips</h1>');

      const pMaker = new TagMaker('p');
      expect(pMaker.make('coolio')).toBe('<p>coolio</p>');
    });
    it('with a higher order function', () => {

      function tagMaker(element: string): (content: string) => string {
        return (content) => `<${element}>${content}</${element}>`;
      }

      const h1Maker = tagMaker('h1');

      expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');
      expect(h1Maker('Chips')).toBe('<h1>Chips</h1>');
      const pMaker = tagMaker('p');
      expect(pMaker('coolio')).toBe('<p>coolio</p>');

      expect(tagMaker('h2')('kidding me?')).toBe('<h2>kidding me?</h2>');
    });
  });

  describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('visiting each element in the array', () => {
      numbers.forEach((e, i, c) => console.log({ e, i, c }));
      numbers.forEach((e) => console.log({ e }));
    });
    describe('methods that create new arrays', () => {
      it('map', () => {
        const doubled = numbers.map(itdoubles);
        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

      });
      it('filter', () => {
        const evens = numbers.filter(isEven);
        expect(evens).toEqual([2, 4, 6, 8]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });

    });

    describe('methods that return an single value', () => {
      describe('checking the memebership', () => {
        it('seeing if all the members meet a criterial', () => {
          const allEven = numbers.every(isEven);
          expect(allEven).toBe(false);

          const someEven = numbers.some(isEven);
          expect(someEven).toBe(true);

        });
        it('has reduce', () => {
          const total = numbers.reduce((s, n) => s + n);
          expect(total).toBe(45);

          const total2 = numbers.reduce((s, n) => s + n, 100);
          expect(total2).toBe(145);

          const totalofDoubledEvens = numbers
            .filter(isEven)
            .map(itdoubles)
            .reduce(accumulate);

          expect(totalofDoubledEvens).toBe(40);
        });

        it('practice', () => {
          interface CartItem {
            name: string;
            qty: number;
            price: number;
          }

          const cart: CartItem[] = [
            { name: 'Eggs', qty: 1, price: 2.99 },
            { name: 'Bread', qty: 3, price: 3.50 },
            { name: 'Shampoo', qty: 2, price: 7.25 }
          ];

          interface ShippingInfo {
            totalQty: number;
            totalPrice: number;
          }

          // how would we use reduce to get the shipping info from
          // this cart. (the total number of things, the total price.)

          const initialState: ShippingInfo = {
            totalQty: 0,
            totalPrice: 0
          };

          const answer = cart.reduce((s: ShippingInfo, n: CartItem) => {
            return {
              totalQty: s.totalQty + n.qty,
              totalPrice: s.totalPrice + (n.qty * n.price)
            } as ShippingInfo;
          }, initialState);
          console.log('The answer is : ', answer);
        });

      });
    });
  });
});

