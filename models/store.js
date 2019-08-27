module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('store',{
        store_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        store_link:{
            type:DataTypes.STRING,
            allowNull:true,            
        },
        image_path:{
            type:DataTypes.STRING,
            allowNull:true,            
        },
        category:{
            type:DataTypes.STRING,
            allowNull:true,            
        },

        created_at:{
            type:'TIMESTAMP',
            allowNull:false,            
        },
        updated_at:{
            type:'TIMESTAMP',
            allowNull:true,            
        },
    });
};