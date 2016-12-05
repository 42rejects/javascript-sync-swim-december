/*#############################################################################
# Name: reverse-a-string.js
# Created: 12-04-2016 22:53:26
# Edited: 12-04-2016 22:56:03
# Creator: Brian Burnley
# Editor: Brian Burnley
##############################################################################*/

function reverseString(str) {
  left = 0;
  right = str.length - 1;
  str = str.split("");
  while (left < right){
    temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  return str.join("");
}

reverseString("hello");
