var dateDiffInDays = function (date1, date2) {
  //   write your code here
	  // Step 2: Convert to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Step 3: Calculate the difference in milliseconds
    const differenceInMillis = d2 - d1; // This gives milliseconds

    // Step 4: Convert milliseconds to days
    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

    // Step 5: Return the result
    return Math.round(differenceInDays); // Round to get whole days
	
};


Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
