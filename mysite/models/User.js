const {DataTypes} = require('sequelize');

module.exports = function(sequelize){
//DB 설정
return sequelize.define('User',{
    no:{
        field:'no',
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        field:'name',
        type: DataTypes.STRING(50),
        alloNull : false
    },
    email:{
        field: 'email',
        type: DataTypes.STRING(200),
        alloNull : false
    },
    password:{
        field: 'password',
        type: DataTypes.STRING(45),
        alloNull : false
    },
    gender:{
        field: 'gender',
        type: DataTypes.ENUM('male','female'),
        alloNull : false
    },
    role:{
        field: 'role',
        type: DataTypes.ENUM('USER','admin'),
        alloNull : false,
        defaultValue:'USER'
    }
},{
    underscored:true,
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'user'
});
}
// //importy시 Return 하는 값
// module.exports= User;