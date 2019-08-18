module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('store',{
        store_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
        store_link:{
            type:DataTypes.VARCHAR,
            allowNull:true,            
        },
        image_path:{
            type:DataTypes.VARCHAR,
            allowNull:true,            
        },
        category:{
            type:DataTypes.VARCHAR,
            allowNull:true,            
        },

        created_at:{
            type:DataTypes.TIMESTAMP,
            allowNull:false,            
        },
        updated_at:{
            type:DataTypes.TIMESTAMP,
            allowNull:true,            
        },
    });
};