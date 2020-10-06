Rosetta Code: Entropy


Calculate the Shannon entropy H of a given input string.

Given the discreet random variable  X  that is a string of  N  "symbols" (total characters) consisting of  n  different characters (n=2 for binary), the Shannon entropy of X in bits/symbol is:

H2(X)=−∑ni=1countiNlog2(countiN) 
where  counti  is the count of character  ni .
