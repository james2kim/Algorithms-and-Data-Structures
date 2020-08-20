Rosetta Code: Equilibrium index


An equilibrium index of a sequence is an index into the sequence such that the sum of elements at lower indices is equal to the sum of elements at higher indices.

For example, in a sequence  AA :

A0=−7A0=−7 
A1=1A1=1 
A2=5A2=5 
A3=2A3=2 
A4=−4A4=−4 
A5=3A5=3 
A6=0A6=0 
3 is an equilibrium index, because:

A0+A1+A2=A4+A5+A6A0+A1+A2=A4+A5+A6 
6 is also an equilibrium index, because:

A0+A1+A2+A3+A4+A5=0A0+A1+A2+A3+A4+A5=0 
(sum of zero elements is zero)

7 is not an equilibrium index, because it is not a valid index of sequence  AA .

Write a function that, given a sequence, returns its equilibrium indices (if any).

Assume that the sequence may be very long.
