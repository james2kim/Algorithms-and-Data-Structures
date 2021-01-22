# Merging Meeting Times

Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. 
These integers represent the number of 30-minute blocks past 9:00am.
For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 p


  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

JavaScript
your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
Do not assume the meetings are in order. The meeting times are coming from multiple teams.
