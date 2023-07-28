import { describe, expect, test } from 'vitest'
import { StringCalculator } from '../src/string-calculator'

const stringCalculator = new StringCalculator()

describe('Step 1: Simple Calculator', () => {
    test('Empty string should return 0.', () => {
        expect(stringCalculator.Add("")).toBe(0) 
    })

    test('Single number should return itself.', () => {
        expect(stringCalculator.Add("4")).toBe(4) 
    })

    test('2 comma-separated numbers should return their sum.', () => {
        expect(stringCalculator.Add("1,2")).toBe(3) 
    })
})

describe('Step 2: Arbitrary number size', () => {
    test('Unknown amount of numbers separated by comma should return their sum.', () => {
        expect(stringCalculator.Add("1,2,3,4,5,6,7,8,9")).toBe(45)
    })
})

describe('Step 3: Newline separator, recognises newlines as well as commas as separators.', () => {
    test('The two separator types can be used interchangeably, numbers separated by them should return their sum', () => {
        expect(stringCalculator.Add("1\n2,3")).toBe(6)
    })
})

describe('Step 4: Custom separators', () => {
    test('Custom separator should be included in the output when input starts with //', () => {
        const separatorRegExp = stringCalculator.parseSeparator("//;\n1;2");  // Extracts the custom separator ';' from '[\\n,;]'
        expect(separatorRegExp.toString()).toBe("/;/");
    })

    test('Optionally have custom separators in the beginning and numbers separated by it should their sum.', () => {
        expect(stringCalculator.Add("//;\n1;2")).toBe(3)
    })

    test('Optionally have custom separators in the beginning and numbers separated by it should their sum.', () => {
        expect(stringCalculator.Add("//;\n1;2,3")).toBe(6)
    })
})