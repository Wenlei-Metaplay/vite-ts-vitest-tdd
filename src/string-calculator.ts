/**
 * Takes in numbers and separators a string and returns number
 */
export class StringCalculator {
    escapeRegExp(string: string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    parseCustomSeparator(inputString: string): string | null {
        if (inputString.startsWith('//')) {
            // Extract separator
            const match = inputString.match(/^\/\/(.+)\n/);
            if (match) {
                return this.escapeRegExp(match[1]);
            }
        }
        return null;
    }

    joinSeparators(customSeparator: string | null): RegExp {
        // List of default separators
        let separators = ['\n', ','];

        // If a custom separator exists, add it to the list
        if (customSeparator) {
            separators.push(customSeparator);
        }

        // Join the separators into a single regular expression pattern
        return new RegExp(separators.join('|'));
    }

    parseNumbers(inputString: string, separatorPattern: RegExp): number[] {
        // Remove separator specification from the start of the string, if it exists
        const numbersString = inputString.replace(/^\/\/(.+)\n/, '');

        // Split the numbers string into an array of strings
        const numberStrings = numbersString.split(separatorPattern);

        // Convert each string in the array to a number, and filter out non-numeric values
        const numbers = numberStrings
            .map((numStr) => parseInt(numStr, 10))
            .filter((num) => !isNaN(num));

        return numbers;
    }

    Add(inputString: string): number {
        if (inputString === "") {
            return 0;
        }

        const customSeparator = this.parseCustomSeparator(inputString);
        const separatorPattern = this.joinSeparators(customSeparator);
        const numbers = this.parseNumbers(inputString, separatorPattern);

        return numbers.reduce((accumulator, num) => accumulator + num, 0);
    }
}
