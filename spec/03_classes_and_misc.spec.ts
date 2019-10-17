// import { Employee } from './hr/employee';
// import { Department } from './hr/department';
// import { } from './hr';
import * as stuff from './hr';
import { Department } from './hr';
import { isatty } from 'tty';
// import { Raisable } from './hr';
// import { Employee, Department } from './hr';

describe('classes', () => {
    it('using a class', () => {
        const bob = new stuff.Employee('joe', 'man', 82_000);

        expect(bob.firstName).toBe('joe');
        expect(bob.lastName).toBe('man');
        expect(bob.currentSalary).toBe(82_000);

        bob.giveRaise(100_000);
        expect(bob.currentSalary).toBe(182_000);

        // expect(stuff.PI).toBe(3.14);

        const dev = new stuff.Department();
        dev.name = 'Developer!';
        dev.manager = bob;

        const someOne: stuff.Raisable = bob;
        someOne.giveRaise(50);

    });
});


describe('Miscellnanoues', () => {
    const numbers = [1, 2, 3, 4, 5];
    it('immutable add an elememt to array', () => {
        const newNumbers = [0, ...numbers, 6];
        expect(newNumbers).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    it('immutable removing an element from and array', () => {
        const newNumbers = numbers.filter(n => n !== 3);
        expect(newNumbers).toEqual([0, 1, 2, 4, 5]);

    });

    it('changing property of an object immutably', () => {
        const movie = { title: 'Episode IV: A New Hope', yearReleased: 1978 };
        const newMovie = { ...movie, yearReleased: 1977 };

        expect(newMovie.yearReleased).toBe(1977);
        expect(movie.yearReleased).toBe(1978);
    });

    it('array destructuring', () => {

        // const first = numbers[0];
        // const third = numbers[2];

        const [first, , third] = numbers;
        expect(first).toBe(1);
        expect(third).toBe(3);

    });

    it('object destructuring', () => {
        const movie = { title: 'Episode IV: A New Hope', yearReleased: 1977 };

        // const title = movie.title;
        // const year = movie.yearReleased;

        const { yearReleased: year, title } = movie;


        expect(title).toBe('Episode IV: A New Hope');
        expect(year).toBe(1977);
    });
});
