# MongoDB $inc Operator Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is used to increment a numerical value.  However, using it with a string instead of a number leads to unexpected behavior – the field will not be incremented and may even cause unexpected data types.

## Bug Description
The provided code attempts to increment the `field` in the `myCollection` using the `$inc` operator. However, it passes a string "1" instead of the number 1 as the increment value. This results in the `field` not being properly incremented.

## Solution
The solution involves passing a numerical value (1 in this case) to the `$inc` operator.  This ensures the field is correctly incremented.
