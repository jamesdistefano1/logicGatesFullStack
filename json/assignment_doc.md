Layout of the JSON
* Top level (object)
** "numInputs" (integer)
** "numOutputs" (integer)
** "restrictions" (object): the maximum number of other gates that can be used.
*** "total" (integer, optional): the maximum number of total gates that can be used. If not specified, no total limit.
*** "other" (boolean, optional): if false, cannot use any gates other than those specified.
*** "AND" (integer or boolean, optional); 0 or false = cannot be used; number = specific limit; true or (not specified and "other" not specified) = no limit
*** etc...
** "table" (array): the "expected output" column of the truth table; more details below
*** Row (boolean)


More details on "table"

Access the expected value by converting the value of inputs into binary
I1 I0 O
0  0  0
0  1  0
1  0  0
1  1  1

so the "table" is [false, false, false, true]