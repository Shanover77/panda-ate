// Date conversion functions

// Convert a date string to a Date object
function stringToDate(dateString) {
    return new Date(dateString);
  }
  
  // Convert a Date object to a formatted string (e.g., "YYYY-MM-DD")
  function dateToString(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }
  
  // Pad a number with leading zero if it is less than 10
  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }
  
  // Date comparison functions
  
  // Compare two dates and return true if the first date is earlier than the second date
  function isDateEarlier(date1, date2) {
    return date1.getTime() < date2.getTime();
  }
  
  // Compare two dates and return true if the first date is later than the second date
  function isDateLater(date1, date2) {
    return date1.getTime() > date2.getTime();
  }
  
  // Compare two dates and return true if they are the same
  function isDateEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
  }
  
  // Timezone conversion functions
  
  // Convert a Date object to a new Date object in a different timezone
  function convertToTimezone(date, timeZone) {
    const offset = getTimezoneOffset(timeZone);
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const targetTime = utcTime + offset * 60000;
    return new Date(targetTime);
  }
  
  // Get the timezone offset in minutes for a specific timezone
  function getTimezoneOffset(timeZone) {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime).toLocaleString("en-US", { timeZone });
    return (new Date(targetTime).getTime() - utcTime) / 60000;
  }
  
  // Parse a human-readable date description and return the corresponding Date object
  function giveDate(description) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
    description = description.toLowerCase();
  
    if (description === "today") {
      return today;
    } else if (description === "yesterday") {
      return new Date(today.getTime() - 24 * 60 * 60 * 1000);
    } else if (description === "tomorrow") {
      return new Date(today.getTime() + 24 * 60 * 60 * 1000);
    } else if (description === "last week") {
      return new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else if (description === "next week") {
      return new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    } else if (description.startsWith("last ")) {
      const dayOfWeek = description.substring(5);
      const lastDayIndex = (today.getDay() + 7 - daysOfWeek.indexOf(dayOfWeek)) % 7;
      return new Date(today.getTime() - lastDayIndex * 24 * 60 * 60 * 1000);
    } else if (description.startsWith("next ")) {
      const dayOfWeek = description.substring(5);
      const nextDayIndex = (daysOfWeek.indexOf(dayOfWeek) - today.getDay() + 7) % 7;
      return new Date(today.getTime() + nextDayIndex * 24 * 60 * 60 * 1000);
    } else {
      // Try to parse as a specific date format (e.g., "YYYY-MM-DD")
      return stringToDate(description);
    }
  }
  
  // Example usage
//   console.log(dateToString(giveDate("today"))); // Output: Current date
//   console.log(dateToString(giveDate("yesterday"))); // Output: Date of yesterday
//   console.log(dateToString(giveDate("tomorrow"))); // Output: Date of tomorrow
//   console.log(dateToString(giveDate("last week"))); // Output: Date of last week
//   console.log(dateToString(giveDate("next week"))); // Output: Date of next week
//   console.log(dateToString(giveDate("last sunday"))); // Output: Date of last Sunday
//   console.log(dateToString(giveDate("next monday"))); // Output: Date of next Monday
//   console.log(dateToString(giveDate("2023-05-18"))); // Output: Date parsed from "YYYY-MM-DD" format
  