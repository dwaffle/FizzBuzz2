//Paramaters.  Start at startNo, end at endNo, fizz on fizzNo, buzz on buzzNo.
function FizzBuzz(
    startNo: number,
    endNo: number,
    fizzNo: number,
    buzzNo: number
) {
    //Guard.  Keeps the function from running if the end is greater than the start.  
    if (startNo > endNo) {
        console.log("Your start number is greater than your end number!");
    }
    //Variables
    let fizzBuzzOutput = "";
    let i = startNo;
    //Loop start.  A decision is made to run another loop based on if i is less than endNo.
    while (i < endNo) {
        //Decisions based on i
        if (i % fizzNo == 0) {
            fizzBuzzOutput += "Fizz";
        }
        if (i % buzzNo == 0) {
            fizzBuzzOutput += "Buzz";
        }
        if (!(i % fizzNo == 0) && !(i % buzzNo == 0)) {
            console.log(i);
        } else {
            console.log(fizzBuzzOutput);
        }
        //Reset fizzBuzzOutput
        fizzBuzzOutput = "";
        //Increment i and start the loop over.
        i++;
    }
}

FizzBuzz(50, 3, 3, 5);

