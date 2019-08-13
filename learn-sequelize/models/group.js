module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('groups',{
        name:{
          type:DataTypes.VARCHAR(255),
          allowNull=false,
        },
        image_path:{
            type:DataTypes.VARCHAR(),
            allowNull=true,
        },
        creator:{
            type:DataTypes.INT(),

        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
    },{
        timestamps:false,
    });
};