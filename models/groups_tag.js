module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('groups_tag',{
        group_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        tag_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        created_at:{
            type: 'TIMESTAMP',
            allowNull:false,            
        },
    })
}