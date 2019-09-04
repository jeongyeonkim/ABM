module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('members',{
        email :{
            type:DataTypes.STRING(255),
            allowNull:false,
            unique:true,
        },
        animal_id:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        nickname:{
            type:DataTypes.STRING(),
            unique:true,
        },
        carrier:{
            type:DataTypes.INTEGER(),
        },
        telephone:{
            type:DataTypes.INTEGER(),
            unique:true,
        },
        image_path:{
            type:DataTypes.STRING(),
            allowNull:true,
        },
        introduce:{
            type:DataTypes.TEXT(),
            allowNull:true,
        },
        created_at:{
            type: 'TIMESTAMP',
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
    },{
        timestamps:false,
    });
};