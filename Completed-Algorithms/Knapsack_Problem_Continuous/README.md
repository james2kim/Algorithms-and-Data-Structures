Rosetta Code: Knapsack problem/Continuous



A thief burgles a butcher's shop, where he can select from some items.

The thief knows the weights and prices of each items. Because he has a knapsack with a limit on the maximum weight that it can carry, he wants to select the items such that he would have his profit maximized. He may cut the items; the item has a reduced price after cutting that is proportional to the original price by the ratio of masses. That means: half of an item has half the price of the original.

Write a function that takes an array of objects representing the items available in the shop. Each object has 3 attributes: name, weight, and value. The function also takes the maximum weight as a parameter. The function should return the maximum value possible, and the total weight of the selected items should not exceed the maximum weight.
