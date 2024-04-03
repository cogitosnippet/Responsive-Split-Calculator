let people = document.getElementById('people-number');
let five_per = document.getElementById('five-per');
let ten_per = document.getElementById('ten-per');
let fifteen_per = document.getElementById('fifteen-per');
let twenty_five_per = document.getElementById('twenty-five-per');
let fifty_per = document.getElementById('fifty-per');
let bill = document.getElementById('bill-amount');
let tip_amount = document.getElementById('tip-amount');
let total_amount = document.getElementById('total-amount');
let error_one = document.getElementById('error-one');
let error_two = document.getElementById('error-two');
let custom_per = document.getElementById('custom-per');
let reset_button = document.getElementById('reset-but');

five_per.addEventListener('click', ()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(5);
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

ten_per.addEventListener('click', ()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(10);
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

fifteen_per.addEventListener('click', ()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(15);
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

twenty_five_per.addEventListener('click', ()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(25);
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

fifty_per.addEventListener('click', ()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(50);
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

custom_per.addEventListener('dblclick',()=>{
  if(parseInt(people.value)>0){
    error_one.style.display = "none";
    error_two.style.display = "none";
    calculation(parseFloat(custom_per.value));
  }else if(parseInt(people.value)===0){
    error_one.style.display = "block";
  }else{
    error_two.style.display = "block";
  }
})

custom_per.addEventListener('keyup',(e)=>{
  if(e.key==='Enter'){
    if(parseInt(people.value)>0 && parseFloat(custom_per.value)>0){
      error_one.style.display = "none";
      error_two.style.display = "none";
      calculation(parseFloat(custom_per.value));
    }else if(parseInt(people.value)===0){
      error_one.style.display = "block";
    }else{
      error_two.style.display = "block";
    } 
  }
})


reset_button.addEventListener('click',()=>{
  window.location.reload(true);
})




function calculation(tip){
  let amount = parseFloat(bill.value);

  let tip_value =  ((tip/100)*amount);
  let number_of_people = parseInt(people.value);


  let tip_final = ((Math.round(tip_value*100)/100));
  let tip_final_amount = (Math.round((tip_final/number_of_people)*100)/100);
  tip_amount.innerHTML = `$ ${tip_final_amount}`;


  let amount_final =  Math.round((amount/number_of_people)*100)/100+tip_final_amount;

  let amount_final_ = Math.round(amount_final * 100)/100;

  total_amount.innerHTML = `$ ${amount_final_}`; 
}
