<?php
// function valid_name($array){
//   $count = 1;
//   if(sizeof($array) == 0) {
//     return "You must test at least one name.";
//   }
//   if(sizeof($array) == 1) {
//     return "Congratulations, you can choose any name you like!";
//   }
//   $len = sizeof($array);

//   for($i = 0; $i < $len - 1; $i++){
//     // checking if the last letter of the the first work is equal to 
//     //the first letter of the second word. 
//     if(strtolower($array[$i][-1]) == strtolower($array[$i + 1][0])){
//       $count = $count + 1;
//     }
//   }

//   if($count == $len) {
//     return "Congratulations, your baby names are compatible!";
//   } else {
//     return "Back to the drawing board, your baby names are not compatible.";
//   }
// }

// valid_name(["Cruz", "Zuma"]); //"Congratulations, your baby names are compatible!"
//valid_name(["Buddy Bear","Romeo", "Olive"]); ///"Congratulations, your baby names are compatible!"
//valid_name(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]);  // "Congratulations, your baby names are compatible!")
//valid_name(["Jaden"]); // "Congratulations, you can choose any name you like!"
//echo valid_name(["George", "Charlotte"]);

// Second solution
// function valid_name($array) {
//   if (!count($array)) return "You must test at least one name.";
//   if (count($array) === 1) return "Congratulations, you can choose any name you like!";
//   for ($i = 0; $i < count($array) - 1; $i++) {
//     if (strtoupper($array[$i][strlen($array[$i]) - 1]) !== $array[$i + 1][0]) return "Back to the drawing board, your baby names are not compatible.";
//   }
//   return "Congratulations, your baby names are compatible!";
// }

//Descending order
// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(int $n): int {
//   $turnNumToString = "". $n;
//   $cloned_array = array_slice(str_split($turnNumToString), 0);
  
//   for ($i = 0; $i < sizeof($cloned_array); $i++) { 
//     $cloned_array[$i] = intval($cloned_array[$i]);
//   }
//   rsort($cloned_array, SORT_NUMERIC);
  
//   $cloned_array = implode("", $cloned_array);
//   return intval($cloned_array);
// }

// $number = PHP_INT_MAX; // 9223372036854775807 
// echo $number;
// echo "\n\n";
// echo is_int($number); //1 --> bool
// echo descendingOrder(23456);


// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//   Years divisible by 4 are leap years,
//   but years divisible by 100 are not leap years,
//   but years divisible by 400 are leap years.
//   Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(int $year): bool {
  if ($year % 400 === 0) return true;

  if ($year % 100 === 0) return false;
  
  if ($year % 4 === 0) return  true;

  return false;
}

// echo isLeapYear(2020);
// echo "\n";
// echo isLeapYear(2015);
// echo "\n";
// echo isLeapYear(2100);
// echo "\n";
// echo isLeapYear(2000);

/// Another solution 
// function isLeapYear($year) : bool {
//   return !($year % 4) && (($year % 100) || !($year % 400));
// }
?>