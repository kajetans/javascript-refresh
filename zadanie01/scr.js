var johnPoints = 49,
  nickPoints = 91,
  pass = 51;

// jeśli zaliczą obaj
if (johnPoints >= pass && nickPoints >= pass) {

  console.log('Both Students passed an exam :) ');

  // lub jeśli jeden z nich zda  
} else if (johnPoints >= pass || nickPoints >= pass) {

  console.log('One of the students passed an exam');

  //który z nich zaliczył i ile miał punktów v2 rozwiązanie prowadzącego

  if (johnPoints > nickPoints) {
    console.log('John passed an exam having ' + johnPoints + ' points')
  } else {
    console.log('Nick Passed an exam having ' + nickPoints + ' points');
  }


  // jeśli obaj obleją

} else {
  console.log('Both students failed');
}




/*
//który z nich zaliczył i ile miał punktów v1 moje pierwotne rozwiązanie

if (johnPoints >= pass) {
  console.log('John passed an exam having ' + johnPoints + ' points');
} else if (nickPoints >= pass) {
  console.log('Nick Passed an exam having ' + nickPoints + ' points');
}
*/
