module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('groups',{
        name:{
          type: DataTypes.STRING(255),
          allowNull:false,
        },
        image_path:{
            type:DataTypes.STRING(),
            allowNull:true,
        },
        creator:{
            type:DataTypes.INTEGER(),

        },
        created_at:{
            type:'TIMESTAMP',
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
    },{
        timestamps:false,
    });
};