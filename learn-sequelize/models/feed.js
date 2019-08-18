module.exports=(sequelize,DataTypes) => {
    return sequelize.define('feed',{
        feed_no:{
            type: DataTypes.INT,
            allowNull:false,
        },
        group_no:{
            type: DataTypes.INT,
            allowNull:false,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        image_path:{
            type: DataTypes.VARCHAR,
            allowNull:true,
        },
        total_like:{
            type: DataTypes.INT,
            allowNull:true,
        },
        total_comment:{
            type: DataTypes.INT,
            aloowNull:true,
        },
        created_at:{
            type: DataTypes.TIMESTAMP,
            aloowNull:false,
        },
        updated_at:{
            type: DataTypes.TIMESTAMP,
            aloowNull:false,
        },

    });
};