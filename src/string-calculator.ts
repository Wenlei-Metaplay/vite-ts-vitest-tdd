/**
 * Takes in number as string and returns number
 */
export class StringCalculator {
    Add(numbers: string): number {
        // Check if numbers string is empty and return 0 if so
        if (numbers === "") {
            return 0
        }

        // Split string by comma
        const numberStrings = numbers.split(',')

        // Use reduce to calculate sum
        const sum = numberStrings.reduce((accumulator, numStr) => {
            const num = parseInt(numStr, 10);
            return accumulator + num;
        }, 0)

        // Return the sum
        return sum
    }
}