import { describe, it, expect, test } from 'vitest'
import { StringCalculator } from '../src/string-calculator'

const stringCalculator = new StringCalculator()

describe('The Add() method should accept a string of 1 or 2 comma-separated numbers, and return their sum.', () => {
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