const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is my first blog.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Do you speak lorem ipsum?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Please Heroku?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;