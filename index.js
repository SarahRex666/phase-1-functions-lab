// Code
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else return 42 - someValue;
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (start < destination) {
    return 264 * destination - 264 * start;
  } else return 264 * start - 264 * destination;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  }
  if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  } else return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
}
