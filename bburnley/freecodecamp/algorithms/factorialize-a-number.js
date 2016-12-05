/*#############################################################################
# Name: factorialize-a-number.js
# Created: 12-04-2016 22:57:20
# Edited: 12-04-2016 22:57:37
# Creator: Brian Burnley
# Editor: Brian Burnley
##############################################################################*/

function factorialize(num) {
  factorial = 1;
  while (num > 0){
    factorial *= num;
    num--;
  }
  return factorial;
}

factorialize(5);
