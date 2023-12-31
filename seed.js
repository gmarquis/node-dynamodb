const axios = require('axios');
const {addOrUpdateCharacter} = require('./funcs.js');

const seedData = async () => {
    const url = 'https://hp-api.onrender.com/api/characters';
    try {
        const {data : characters} = await axios.get(url);

        const characterPromises = characters.map((character, i) =>
            addOrUpdateCharacter({ ... character, id: i + '' })
        );
        await Promise.all(characterPromises);
    } catch (error) {
        console.error(err);
        console.log('An error occurred');
    }
};

seedData();
