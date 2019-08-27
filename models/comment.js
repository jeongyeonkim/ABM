module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('comment',{
        email:{
            type:DataTypes.STRING,
            allowNull:false,            
        },
        feeds_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        group_no:{
            type:DataTypes.INTEGER,
            allowNull:true,            
        },
        p_id:{
            type:DataTypes.INTEGER,
            allowNull : true,         
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull:true,            
        },
        created_at:{
            type:'TIMESTAMP',
            allowNull:false,            
        },
        updated_at:{
            type: 'TIMESTAMP',
            allowNull:true,            
        },

    });
    
};