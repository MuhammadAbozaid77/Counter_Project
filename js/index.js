
/* ---------------------------------------------------------------------------------- */
// Dom Elements
let counter_id= document.getElementById("counter_id") ;
let counter_value = 0 ;
let decrease_btn = document.getElementById("decrease_btn") ;
let reset_btn = document.getElementById("reset_btn") ;
let increase_btn = document.getElementById("increase_btn") ;
/* ---------------------------------------------------------------------------------- */
// Logic Function

// increase Function
function Increase_Fun(){
  counter_value += 1 ;
  counter_id.innerHTML = counter_value ;
}

// Decrease Function
function Decrease_Fun(){
  if(counter_id.innerHTML > 0){
    counter_value -= 1 ;
    counter_id.innerHTML = counter_value ;
  }
  else {
    counter_value = 0 ;
    counter_id.innerHTML = counter_value ;
  }
}

// Reset Function
function Reset_Fun(){
  counter_value = 0 ;
  counter_id.innerHTML = counter_value ;
}
/* ---------------------------------------------------------------------------------- */


