// This is the unencrypted version of the file with no API Keys installed - For local machine use
// USE YOUR OWN API KEYS VERSION (YOU WILL NEED TO MODIFY THE INDEX.HTML TO USE THIS FILE, BUT THE INSTRUCTIONS IS AVAILABLE ON THE SAID FILE)

// Chooses The API Key (Random) - START
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['API KEY 1', 'API KEY 2', 'AND SO ON...'];

const result = getRandomItem(array);
// Chooses The API Key (Random) - END
