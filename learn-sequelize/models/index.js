
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','config.json'));
const db = {};
let sequelize = new Sequelize(config.database,config.usernaem, config.password,config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db객체를 이용하여 밑의 테이블에 접근할수 있음 
db.Member = require('/.member')(sequelize,Sequelize);
db.Group = require('/.group')(sequelize,Sequelize);
db.Tag = require('/.tag')(sequelize,Sequelize);

db.Group.hasMany(db.Tag,{foreignKey:})
module.exports = db;
