module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('feed_tag',{
        group_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        tag_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,            
        },
        created_at:{
            type: 'TIMESTAMP',
            allowNull:false,            
        },
        feed_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },

    });
};