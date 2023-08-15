// step-1: Add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
    // step-2: get deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const NewDepositAmountString = depositField.value;
    const newDepositAmountNumber = parseFloat(NewDepositAmountString)

    // step-3: Get the current deposit total
    // for non-input(element other then input, textarea) use inner text to get the text

    const depositTotalElement = document.getElementById("deposit-total");
    const PreviousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotalNumber = parseFloat(PreviousDepositTotalString);


    const CurrentDepositTotal= (previousDepositTotalNumber + newDepositAmountNumber);

    
    depositTotalElement.innerText = CurrentDepositTotal;

    // step-5: Get Balance Current Total

    const balanceTotalElement= document.getElementById("balance-total");
    const PreviousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotalNumber= parseFloat(PreviousBalanceTotalString);

    /* step-6  calculate current balance total*/

    const currentBalanceTotal=  previousBalanceTotalNumber + newDepositAmountNumber;
    console.log( currentBalanceTotal);
    
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal
    // step-7: clear the deposit field
    depositField.value = "";
})