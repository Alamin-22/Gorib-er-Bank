// 1: add event handler withdraw button
// 2: get the withdraw  amount from thw withdraw input Field
// 2.5: also make sure to convert a input field into number by using parseFloat()
// 3: get previous withdraw Total 
// 4: calculate total withdraw amount
// 4.5: Set total withdraw amount
// step-5: Get the previous balance total
//  6: calculate new balance Total
// 6.5 :  set the new ballance total
// step-7: clear the input field



// step-1: 

document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2:
    const withdrawFiled= document.getElementById("withdraw-field");
    const NewWithdrawAmountString= withdrawFiled.value;
    const NewWithdrawAmountNumber= parseFloat( NewWithdrawAmountString);

      // step-7:
      withdrawFiled.value= "";

    if(isNaN(NewWithdrawAmountNumber)){
        alert("Please Provide a valid number")
        return;
    }
    // step-3

    const WithdrawTotalElement = document.getElementById("withdraw-total");
    const PreviousTotalString=  WithdrawTotalElement.innerText;
    const PreviousTotalNumber=  parseFloat(PreviousTotalString);

   
    // step-5:

    const BalanceTotalElement= document.getElementById("balance-total");
    const previousBalanceTotalString=  BalanceTotalElement.innerText;

    const PreviousBalanceTotalNumber= parseFloat( previousBalanceTotalString);

  

    if( NewWithdrawAmountNumber > PreviousBalanceTotalNumber){
        alert("Tui Fokir tor kache eto taka nai")
        return;
    }
     // step-4:
     const currentWithdrawTotal=  NewWithdrawAmountNumber + PreviousTotalNumber ;

     WithdrawTotalElement.innerText = currentWithdrawTotal  
 
    // step-6:
    const newBalanceTotal= PreviousBalanceTotalNumber - NewWithdrawAmountNumber;
    BalanceTotalElement.innerText = newBalanceTotal;
    
})