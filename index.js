// Code your solution in this file!

function distanceFromHqInBlocks(pickup, headQuarters = 42) {
    let distance;

    if (pickup > 42) {
        distance = pickup - headQuarters;
    } else if (pickup < 42) {
        distance = headQuarters - pickup;
    }
    return distance;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(pickup, headQuarters = 42) {
    let distance;

    if (pickup > 42) {
        distance = (pickup - headQuarters) * 264;
    } else if (pickup < 42) {
        distance = (headQuarters - pickup) * 264;
    }
    return distance;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    let distance;
    if (start > destination) {
        distance = ((start - destination) * 264);
    } else if (start < destination) {
        distance = ((destination - start) * 264);
    }
    return distance;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    let distance;
    if (start > destination) {
        distance = ((start - destination) * 264);
    } else if (start < destination) {
        distance = ((destination - start) * 264);
    }
    let fare;
    if (distance < 400) {
        fare = (distance * 0);
    } else if (distance >= 400 && distance <= 2000) {
        fare = (((distance - 400) * 2) / 100);
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return fare;
}
calculatesFarePrice();