// Chooses The API Key (Random) - START
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['];

const result = getRandomItem(array);
// Chooses The API Key (Random) - END
