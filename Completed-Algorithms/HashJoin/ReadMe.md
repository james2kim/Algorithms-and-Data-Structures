# Rosetta Code: Hash join



An inner join is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the nested loop join algorithm, but a more scalable alternative is the hash join algorithm.

The "hash join" algorithm consists of two steps:

Hash phase: Create a multimap from one of the two tables, mapping from each join column value to all the rows that contain it.
The multimap must support hash-based lookup which scales better than a simple linear search, because that's the whole point of this algorithm.
Ideally we should create the multimap for the smaller table, thus minimizing its creation time and memory size.
Join phase: Scan the other table, and find matching rows by looking in the multimap created before.
In pseudo-code, the algorithm could be expressed as follows:

let A = the first input table (or ideally, the larger one)
let B = the second input table (or ideally, the smaller one)
let jA = the join column ID of table A
let jB = the join column ID of table B
let MB = a multimap for mapping from single values to multiple rows of table B (starts out empty)
let C = the output table (starts out empty)
for each row b in table B:
  place b in multimap MB under key b(jB)
for each row a in table A:
  for each row b in multimap MB under key a(jA):
    let c = the concatenation of row a and row b
    place row c in table C
    
    
    
    
Implement the "hash join" algorithm as a function and demonstrate that it passes the test-case listed below. The function should accept two arrays of objects and return an array of combined objects.
