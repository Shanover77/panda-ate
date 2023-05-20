Panda-ate: A Date Util Package

This is an lightweight package that provides a convenient way to work with dates in JavaScript. With this package, you can easily perform various date operations such as getting the current date, calculating dates for yesterday, tomorrow, last week, next week, or parsing dates from the "YYYY-MM-DD" format.  

## Installation  

You can install this package using npm by running the following command:  

npm i panda-ate

## Usage

To use this package in your JavaScript project, require/import it as follows:  
const { giveDate } = require('panda-ate');

## Example Usage

Here are some examples of how to use the giveDate function:

const today = giveDate('today');  
console.log(today);  
// Output: Current date (e.g., '2023-05-20')  
  
const yesterday = giveDate('yesterday');  
console.log(yesterday);  
// Output: Date of yesterday (e.g., '2023-05-19')  
  
const tomorrow = giveDate('tomorrow');  
console.log(tomorrow);  
// Output: Date of tomorrow (e.g., '2023-05-21')  
  
const lastWeek = giveDate('last week');  
console.log(lastWeek);  
// Output: Date of last week (e.g., '2023-05-13')  
  
const nextWeek = giveDate('next week');  
console.log(nextWeek);  
// Output: Date of next week (e.g., '2023-05-27')  
  
const lastSunday = giveDate('last sunday');  
console.log(lastSunday);  
// Output: Date of last Sunday (e.g., '2023-05-14')  
  
const nextMonday = giveDate('next monday');  
console.log(nextMonday);  
// Output: Date of next Monday (e.g., '2023-05-22')  
  
const customDate = giveDate('2023-05-18');  
console.log(customDate);  
// Output: Date parsed from "YYYY-MM-DD" format (e.g., '2023-05-18')  

## API  
giveDate(dateSpecifier)
  
This function takes a dateSpecifier parameter and returns a date based on the specifier provided. The supported specifiers are:  
  
    'today': Returns the current date.  
    'yesterday': Returns the date of yesterday.  
    'tomorrow': Returns the date of tomorrow.  
    'last week': Returns the date of last week.  
    'next week': Returns the date of next week.  
    'last sunday': Returns the date of the most recent Sunday.  
    'next monday': Returns the date of the upcoming Monday.  
    'YYYY-MM-DD': Parses the date from the provided format and returns it.  

## Contributing
  
Contributions are welcome! If you encounter any issues, have suggestions, or would like to add new features, please open an issue or submit a pull request on the GitHub repository.

## License

This package is distributed under the MIT License.
