
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','config.json'))[env];
const db = {};
let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db객체를 이용하여 밑의 테이블에 접근할수 있음 
db.Comment = require('./comment')(sequelize,Sequelize);
db.Feed = require('./feed')(sequelize,Sequelize);
db.Feed_tag = require('./feed_tag')(sequelize,Sequelize);
db.Group_member = require('./group_member')(sequelize,Sequelize);
db.Group_tag = require('./groups_tag')(sequelize,Sequelize);
db.Store = require('./store')(sequelize,Sequelize);
db.Member = require('./member')(sequelize,Sequelize);
db.Group = require('./group')(sequelize,Sequelize);
db.Tag = require('./tag')(sequelize,Sequelize);

//define relation to tables

db.Memeber.hasMany(db.Comment);
db.Comment.belongsTo(db.Member,{foreignKey:'email', targetKey:'id'});
db.Member.hasMany(db.Feed);
db.Feed.belongsTo(db.Member,{foreignKey:'email',targetKey:'id'});


db.Feed.belongsToMany(db.Tag,{through:'feed_tag'});
db.Tag.belongsToMany(db.Feed,{through:'feed_tag'});

db.Member.belongsToMany(db.Group,{through:'groups_member'});
db.Group.belongsToMany(db.Member,{through:'groups_member'});
db.Tag.belongsToMany(db.Group,{through:'Groups_tag'});
db.Group.belongsToMany(db.Tag,{through:'Groups_tag'});

// db.Member.hasMany(db.Group_member,{foreignKey:'id', sourcekey: 'id'});
// db.Group.belongsToMany(db.Member,{through:'id'});

// db.Group.belongsToMany(db.Group_tag,{through:'group_no'});
// db.Group_tag.belongsToMany(db.Group,{through:'group_no'});
// db.Tag.belongsToMany(db.Group_tag,{through:'tag_no'});
// db.Group_tag.belongsToMany(db.Tag,{through:'tag_no'});
// db.Feed.belongsToMany(db.feed_tag,{through:'tag_no'});
// db.FeedTag.belongsToMany(db.Feed,{through:'tag_no'});

// db.Feed.hasMany(db.Comment,{foreignKey:'feed_no', sourcekey: 'feed_no'});
// db.Comment.belongsTo(db.Member,{foreignKey:'feed_no', targetKey:'feed_no'});




module.exports = db;
