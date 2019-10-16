describe('Variables in Typescript', () => {
    it('any typing', () => {
        let x;
        x = 'dog';
        x = 3.14;

        x = function (a, b) {
            return a + b;
        };
    });

    it('implicit typing', () => {
        const x = 'dog';
        //  x = 3.14;
    });


    it('has union types', () => {
        let x: number | string;
        x = 3.14;

        x = 'tacos';

    });


    it('const cannot be reassigned', () => {
        const PI = 3.1415;
        // cannot reassign

        const movie = {
            title: 'Rise of Skywalker',
            yearReleased: 2018
        };

        movie.yearReleased = 2019;

        const favoriteNumbers = [9, 12, 34];

        // cannot do this
        // favoriteNumbers = [4];
        favoriteNumbers[1] = 34;

    });

    it('var is evil and you should not use it', () => {
        const age = 22;

        if (age > 22) {

            // tslint:disable-next-line: no-var-keyword
            var message = 'Old enough!';
            expect(message).toBe('Old enough!');
        }
    });
});


describe('types', () => {
    it('has numbers', () => {
        const asInt = 12;
        const asFloat = 12.333;
        const asEasyToRead = 135_233_802.42;
        const asHex = 0xff;
        const asBase8 = 0o33;
        const asBinary = 0b1010101;
    });

    describe('string literals', () => {
        it('uses single quotes', () => {
            const message = 'Hello!';

            // tslint:disable-next-line: quotemark
            expect(message).toBe("Hello!");
        });
        it('using verbatim string', () => {
            const story = `My Life Story.
                It was a dark and stormy night.
                <h1>The End</h1>`;
            console.log(story);
        });

        it('using them as template string', () => {
            const name = 'Bob';
            const pay = 32_000.00;

            const message1 = 'Employee ' + name + ' makes $' + pay + ' a year';

            const message2 = `Employee ${name} makes $${pay} a year`;

            expect(message1).toBe(message2);
        });
    });


    describe('array literals', () => {
        it('declaring an arry', () => {
            const things = [];

            things[0] = 12;
            things[1] = 'bread';
            things[2] = things;

            // expect(things[300][1]).toBe('bread');
            expect(things[1]).toBe('bread');

            const numbers = [1, 2, 3, 4];
            const friends: string[] = [];

            let friendsAndNumbers: (string | number)[];

            let males: Array<string>;
            let males2: string[];

            const friendsAndNumbers2: Array<string | number> = ['mat', 23, 'coo', 99];


            const second = friendsAndNumbers2[2];
        });
        it('using typed arry (tuples)', () => {

            type TsLintBasicRule = [boolean, string];
            const quoteMarkRule: TsLintBasicRule = [true, 'single'];
            const logRule: TsLintBasicRule = [false, 'log'];
            // quoteMarkRule[0] = 'string';
            // quoteMarkRule[1] = 99;

            const doIt = quoteMarkRule[1];

            type ThingyWithLetters = string;
            const myName: ThingyWithLetters = 'jeff';
        });
    });
});
