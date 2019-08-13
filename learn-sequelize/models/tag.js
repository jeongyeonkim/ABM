import { DataTypes } from "sequelize/types";

module.exports(sequelize,DataTypes)=>{
    return sequelize.define('tags',{
        hashtag:{
            type:DataTypes.TEXT(),
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:true,
            defaultValue:DataTypes.NOW,
        },
    },{
        timestamps:false,
    });
};
