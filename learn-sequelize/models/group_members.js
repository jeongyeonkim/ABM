module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('group_member',{
        email:{
            type:DataTypes.VARCHAR,
            allowNull:false,            
        },
        group_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
        created_at:{
            type:DataTypes.TIMESTAMP,
            allowNull:false,            
        },
    });
};