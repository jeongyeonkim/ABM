module.exports=(sequelize,DataTypes) => {
    return sequelize.define('feed',{
        feed_no:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        group_no:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        image_path:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        total_like:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        total_comment:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        created_at:{
            type: 'TIMESTAMP',
            allowNull:false,
        },
        updated_at:{
            type: 'TIMESTAMP',
            allowNull:false,
        },

    });
};