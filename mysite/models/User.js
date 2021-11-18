const { Sequelize, DataTypes } = require('sequelize');
const User = require('../controllers/user');

//1.sequelize 초기화
const sequelize = new Sequelize({});

//DB 설정
sequelize.define('User',{
    no:{
        field:'no',
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    name:{

    },
    email:{

    },

},{
    underscored:true,
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'user'
})

User.create({

})

User.findOne({

})