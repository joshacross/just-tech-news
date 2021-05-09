const User = require('./User');
const Post = require('./Post');

// define/create model associations
// This is a onetomany relationship
User.hasMany(Post, {
    foreignKey: 'user_id'   
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };