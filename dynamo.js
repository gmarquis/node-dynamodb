const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'dynamo-table-one';

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters;
};

const getCharacterById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };
    return await dynamoClient.get(params).promise();
}

const addOrUpdateCharacter = async (character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character,
    };
    return await dynamoClient.put(params).promise();
};

const deleteCharacter = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return await dynamoClient.delete(params).promise();
};

module.exports = {
    dynamoClient,
    getCharacters,
    getCharacterById,
    addOrUpdateCharacter,
    deleteCharacter,
};

const getCharacterByName = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            name,
        },
    };
    return await dynamoClient.get(params).promise();
}

const hp = {
    id: '0',
    name: 'Cherry Potter',
    house: 'Gryffindor',
    gender: 'male',
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    wand: {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "image": ""
};

const gm = {
    id: '1',
    name: 'Glen Marquis',
    house: 'none',
    gender: 'male',
    actor: false,
    "image": "https://s3.eu-west-2.amazonaws.com/www.charlesheights.co.uk/pythonimage.png",
    dateOfBirth: "12-12-1970",
    yearOfBirth: 1970,
    ancestry: "full-blood",
    wand: {
        "wood": "birch",
        "core": "iron core",
        "length": 10
    },
};

const seedData = async () => {

}

addOrUpdateCharacter(hp);
//getCharacterById('0');
//deleteCharacter('0');
//getCharacters();
