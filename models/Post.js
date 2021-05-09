// Import Model and DataTypes from Sequelize
const { Model, DataTypes } = require('sequelize');
// Import connection to MySQL stored in connection.js
const sequelize = require('../config/connection');

//Define Post Model (create our Post Model)
class Post extends Model {}

// Define columns in Post

// Create fields/columns for Post Model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_URL: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'   
            }
        }
    },
    // configure the metadata, including naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    },  
);


module.exports = Post;