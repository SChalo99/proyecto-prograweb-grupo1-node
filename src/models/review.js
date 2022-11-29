import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import User from './user.js';

const Reviews = sequelize.define('reviews', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    score: {
        type: DataTypes.DOUBLE
    },
    comment: {
        type: DataTypes.STRING
    },
    video: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    }
})

User.hasMany(Reviews,{
    foreignKey: 'user_id',
    sourceKey: 'id'
})

Reviews.belongsTo(User,{
    foreignKey: 'user_id',
    targetId: 'id'
})

export default Reviews;