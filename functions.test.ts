const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test(' be a function: ', () => {
        expect(typeof shuffleArray).toBe("function");
    })

    test(" contain 'a' in the retuned array: ", () => {
        expect(shuffleArray(['a', 'b', 'c'])).toContain('a');
    })

})