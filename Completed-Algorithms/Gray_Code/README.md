Rosetta Code: Gray code



Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs.

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

Create a function to encode a number to and decode a number from Gray code. The function should will have 2 parameters.

The first would be a boolean. The function should encode for true and decode for false. The second parameter would be the number to be encoded/decoded.

Display the normal binary representations, Gray code representations, and decoded Gray code values for all 5-bit binary numbers (0-31 inclusive, leading 0's not necessary).

There are many possible Gray codes. The following encodes what is called "binary reflected Gray code."

Encoding (MSB is bit 0, b is binary, g is Gray code):

if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
Or:

g = b xor (b logically right shifted 1 time)
Decoding (MSB is bit 0, b is binary, g is Gray code):

b[0] = g[0]

for other bits:
b[i] = g[i] xor b[i-1]
