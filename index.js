var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];




// ----------TOTAL----------
let total = 0; // initialise the TOTAL variable

for (let index = 0; index < finances.length; index++) {
  // Loop through each sub-array... define the sub-array (NB initialise variable, condition, update)

  let monthlyNet = finances[index][1]; // Initialise the variable (monthlyNet)... It is [what we have defined in the INDEX variable] and then the second index of the sub-array [1]
  total += monthlyNet;
}




// ----------AVERAGE CHANGE----------
// Calculate the change for each month. This is index 2-1, 3-2, 4-3... add them all together... divide them by the finances.length.
let totalChanges = 0; // Initialise total changes variable

for (let index = 1; index < finances.length; index++) {
  // I had to start at index 1 instead of 0 because the next line's logic index-1. When it tried to index '0-1', it failed.
  let monthlyChange = finances[index][1] - finances[index - 1][1];
  totalChanges += monthlyChange;
}

let averageChange = totalChanges / (finances.length - 1);
averageChange = averageChange.toFixed(2); // Rounds the number up to 2 decimal places. Unfortunately, this converts the variable typeof to a string.
// we have to convert it back to a number so that the toLocaleString() method works and it puts commas every thousand e.g. 2,000 instead of 2000.
averageChange = parseFloat(averageChange);




// ----------GREATEST INCREASE & DECREASE IN PROFIT (DATE AND AMOUNT)----------
// Initialise the variables 
let testArray = [
  ["Jan", 10],
  ["Feb", 50],
  ["Mar", 200],
  ["April", 100],
];

let greatestIncrease = 0;
let greatestIncreaseMonth = "";
let greatestDecrease = 0;
let greatestDecreaseMonth = "";
let previousNet = testArray[0][1]; // Initialize with the profit of the first month - think this is breaking it 
let monthlyChange = 0


for (let index = 1; index < testArray.length; index++) {
    let monthlyChange = testArray[index][1] - testArray[index - 1][1]; // Take previous net away from current to get this month's change
    
        if (monthlyChange > greatestIncrease) {  // if *this* monthlyChange ("this month that we're looping at now") is greater than the greatest increase (it always will be if it's zero because we initialised it at zero)
            greatestIncrease = monthlyChange; // set the greatestIncrease to this new monthlyChange figure... and...
            greatestIncreaseMonth = testArray[index][0]; // set the greatestIncreaseMonth to the index we're looping on now (by number) and then the first index inside of that (which in thise case is always the name of the month!)
        } 

        if (monthlyChange < greatestDecrease) { 
          greatestDecrease = monthlyChange;
          greatestDecreaseMonth = testArray[index][0]; 
        }
        previousNet = testArray[index][1] - testArray[index - 1][1];     // update the previousNet for the next loop
        // Because this loop loop infinitly and goes through all available values from the second month (index 1), it will always find the biggest value.
        // It starts with a previousNet. Checks the value of index[1]. If it's this value is bigger than what it's currently got, it replaces it. If not, it moves on. So on and so forth. 

  }

  

// Log the result
console.log(`Greatest Increase in Profit: ${greatestIncreaseMonth}, ${greatestIncrease}`);


// CONSOLE LOG
console.log(
  "Financial Analysis \n" +
    "----------------\n" +
    "Total Months: " +
    finances.length +
    "\n" +
    "Total: $" +
    total.toLocaleString() +
    "\n" + // I added the toLocaleString method to make the numbers easier to read
    "Average Change: $" +
    averageChange.toLocaleString() + "\n" +
    "Greatest Increase in Profits/Losses: " + greatestIncreaseMonth + " ($" + greatestIncrease + ")\n" +
    "Greatest Decrease in Profits/Losses: " + greatestDecreaseMonth + " ($" + greatestDecrease + ")"
);


/* 

Financial Analysis 
----------------
Total Months: 86
Total: $38382578
Average Change: -2315.12
Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)
Your final code should print the analysis to the console.

*/
