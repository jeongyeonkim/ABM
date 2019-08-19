import { DataTypes } from "sequelize/types";

module.exports = (sequelize,DataTypes) => {
    return sequelize.define('tags',{
        hashtag:{
            type:DataTypes.TEXT(),
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
        tag_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
    },{
        timestamps:false,
    });
};
