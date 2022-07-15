const { User } = require('../models');

const userData = [{
        username: 'Lilo',
        password: 'lilo'

    },
    {
        username: 'Loba',
        password: 'loba'
    },
    {
        username: 'Jazz',
        password: 'jazz'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;