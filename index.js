function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation < 42) {
        return (42 - pickupLocation);
    } else {
        return pickupLocation - 42;
}
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}
// First, Scuber's executives want to ensure that Scuber's headquarters is near its customers. They would like you to write a function that takes in a pickup location for a passenger, and returns the number of blocks from its headquarters on 42nd Street. This can be used for another function that translates the number of blocks from headquarters to the distance in feet.
function distanceTravelledInFeet(beg, dest) {
    if (beg < dest) {
        return  (dest - beg) * 264;
    } else {
        return (beg - dest) * 264;
        }

}

// Second, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.

// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(beg, dest) {
    const dist = distanceTravelledInFeet(beg, dest);

    if (dist > 2500) {
        return 'cannot travel that far';
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else if (dist < 400) {
        return 0;
    } else {
        return (dist - 400) * .02;
    }
    
}