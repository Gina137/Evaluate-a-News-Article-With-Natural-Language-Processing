import{handleSubmit} from '../src/client/js/formHandler'
import{ checkScore} from '../src/client/js/formHandler'
// import "babel-polyfill"; aw est5dme de 34an t t7le el REFERENCE ERROR aw el @babel/plugin-transform-Runtime wt7ote f el .babelrc file

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit).toBeDefined();
})});
describe("chech for checkScore functionality ",()=>
{
    test('Testing P+ checkScore() function',()=>
    {
        expect(checkScore('P+')).toBe("STRONG POSITIVE")
    })
    test('Testing positive checkScore() function', () => {
        expect(checkScore('P')).toBe('POSITIVE')
    })

    test('Testing NEU checkScore() function', () => {
        expect(checkScore('NEU')).toBe('NEUTRAL')
    })

    test('Testing N checkScore() function', () => {
        expect(checkScore('N')).toBe('NEGATIVE')
    })

    test('Testing N+ checkScore() function', () => {
        expect(checkScore('N+')).toBe('STRONG NEGATIVE')
    })

    test('Testing none checkScore() function', () => {
        expect(checkScore('NONE')).toBe('NO SENTIMENT')
    })
})