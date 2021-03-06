var missing = require('../katas/missing-character');

describe('Find missing character', () => {
    it('Should return empty string when there is no missing character', () => {
        const missingCharacter = missing.missingLetter(['a', 'b', 'c']);
        expect(missingCharacter).toBe('');
    });

    it('Should display b as the missing character', () => {
        const missingCharacter = missing.missingLetter(['a', 'c']);
        expect(missingCharacter).toBe('b');
    });

    it('Should display e as the missing character', () => {
        const missingCharacter = missing.missingLetter(['a', 'b', 'c', 'd', 'f']);
        expect(missingCharacter).toBe('e');
    });
});