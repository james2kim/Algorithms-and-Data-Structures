Rosetta Code: Jaro distance


The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that 0 equates to no similarity and 1 is an exact match.

Definition

The Jaro distance  djdj  of two given strings  s1s1  and  s2s2  is

dj=⎧⎩⎨⎪⎪013(m|s1|+m|s2|+m−tm)if m=0otherwisedj={0if m=013(m|s1|+m|s2|+m−tm)otherwise 
Where:

mm  is the number of matching characters;
tt  is half the number of transpositions.
Two characters from  s1s1  and  s2s2  respectively, are considered matching only if they are the same and not farther than  ⌊max(|s1|,|s2|)2⌋−1⌊max(|s1|,|s2|)2⌋−1 .

Each character of  s1s1  is compared with all its matching characters in  s2s2  . The number of matching (but different sequence order) characters divided by 2 defines the number of transpositions.

Example

Given the strings  s1s1  DWAYNE and  s2s2  DUANE we find:

m=4m=4 
|s1|=6|s1|=6 
|s2|=5|s2|=5 
t=0t=0 
We find a Jaro score of:  dj=13(46+45+4−04)=0.822dj=13(46+45+4−04)=0.822 .

Write a function a that takes two strings as parameters and returns the associated Jaro distance.
