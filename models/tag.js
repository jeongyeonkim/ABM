

module.exports = (sequelize,DataTypes) => {
    return sequelize.define('tags',{
        hashtag:{
            type:DataTypes.TEXT(),
        },
        created_at:{
            type: 'TIMESTAMP',
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
        tag_no:{
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
    },{
        timestamps:false,
    });
};
