module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('group_member',{
        email:{
            type:DataTypes.STRING,
            allowNull:false,            
        },
        group_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        created_at:{
            type:'TIMESTAMP',
            allowNull:false,            
        },
    });
};