/*
  Diego was told it is best to put the track times in an array. His last developer left the array, but now his "Total Album Length" is looking strange on his website.
*/
let albumRuntime = 0;

let trackTimes = [40, 34, 46, 36, 67, 42, 48];
//////////////////////////////////////////////////////
// Do not change anything above here.
//////////////////////////////////////////////////////

/*
  Update the `albumRuntime` variable to be the sum value of all items in the `trackTimes` array. Use bracket notation to access each value of the `trackTimes` array. Then add all of those values together.
*/
//albumRuntime = trackTimes;
albumRuntime =
  trackTimes[0] +
  trackTimes[1] +
  trackTimes[2] +
  trackTimes[3] +
  trackTimes[4] +
  trackTimes[5] +
  trackTimes[6];

document.getElementById("album-runtime").innerHTML = albumRuntime;
