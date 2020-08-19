Rosetta Code: Generator/Exponential
A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

Generators are often built on top of coroutines or objects so that the internal state of the object is handled "naturally".

Generators are often used in situations where a sequence is potentially infinite, and where it is possible to construct the next value of the sequence with only minimal state.

Write a function that uses generators to generate squares and cubes. Create a new generator that filters all cubes from the generator of squares.

The function should return the  nthnth  value of the filtered generator.

For example for  n=7n=7 , the function should return 81 as the sequence would be 4, 9, 16, 25, 36, 49, 81. Here 64 is filtered out, as it is a cube.