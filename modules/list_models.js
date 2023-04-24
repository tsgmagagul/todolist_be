const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db');


const to_do_list = sequelize.define('register',{
    
    list_id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      unique: true,
      

  },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
       
      },
    });

module.exports = to_do_list;
