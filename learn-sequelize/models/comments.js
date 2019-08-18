module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('comment',{
        email:{
            type:DataTypes.TIMESTAMP,
            allowNull:false,            
        },
        feeds_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
        group_no:{
            type:DataTypes.INT,
            allowNull:true,            
        },
        p_id:{
            type:DataTypes.INT,
            allowNull : true,         
        },
        comment:{
            type:DataTypes.TEXT,
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