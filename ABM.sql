SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
- -----------------------------------------------------
-- Schema koa
-- -----------------------------------------------------

--utf8mb4_unicode_ci;
CREATE SCHEMA IF NOT EXISTS `express` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `nodejs`

CREATE TABLE `members` (
    `id`    INT NOT NULL AUTO_INCREMENT,
    `password`    VARCHAR NULL,
    `email` VARCHAR NULL,
    `animal_id` VARCHAR NULL,
    `name`  VARCHAR NULL,
    `nickname`  VARCHAR NULL,
    `carrier`   TINYINT NULL,
    `telephone` INT NULL,
    `image_path`    VARCHAR NULL,
    `introduce` TEXT    NULL,
    `created_at`    TIMESTAMP   NULL,
    `updated_at`    TIMESTAMP   NULL,
    `is_deleted`    TINYINT NULL,
    `level` INT NULL
);

CREATE TABLE `groups` (
    `group no.` INT NOT NULL AUTO_INCREMENT,
    `name`  VARCHAR NULL,
    `image_path`    VARCHAR NULL,
    `creator`   INT NULL,
    `created_at`    TIMESTAMP   NULL,
    `feed_count`    INT NULL,
    `member_count`  INT NULL
);

CREATE TABLE `groups_tags` (
    `id`    INT NOT NULL AUTO_INCREMENT,
    `group no.` INT NOT NULL,
    `tag no.`   INT NOT NULL,
    `group no.` INT NULL,
    `tag no.`   INT NULL,
    `created_at`    TIMESTAMP   NULL
);

CREATE TABLE `comments` (
    `email` VARCHAR NOT NULL, 
    `feeds no.` INT NOT NULL,
    `id`    INT NOT NULL AUTO_INCREMENT,
    `group no.` INT NOT NULL,
    `p_id`  INT NULL,
    `comment`   TEXT    NULL,
    `created_at`    TIMESTAMP   NULL,
    `updated_at`    TIMESTAMP   NULL
);

CREATE TABLE `group_members` (
    `email` VARCHAR NOT NULL,
    `id'    INT NOT NULL AUTO_INCREMENT,
    `group_no` INT NOT NULL,
    `created_at`    TIMESTAMP   NULL
);

CREATE TABLE `feeds` (
    'feeds no.` INT NOT NULL,
    `id`    INT NOT NULL,
    `group no.` INT NOT NULL,
    `type`  TINYINT NULL,
    `comment`   TEXT    NULL,
    `image_path`    VARCHAR NULL,
    `total_like`    INT NULL,
    `total_comment` INT NULL,
    `created_at`    TIMESTAMP   NULL,
    `updated_at`    TIMESTAMP   NULL
);

CREATE TABLE `feed_tags` (
    `id`    INT NOT NULL,
    `feeds no.` INT NOT NULL,
    `email` VARCHAR NOT NULL,
    `group no.` INT NOT NULL,
    `tag no.`   INT NOT NULL,
    `feed no.`  INT NULL,
    `tag no.`   INT NULL,
    `created_at`    TIMESTAMP   NULL
);

CREATE TABLE `store` (
    `store_no` INT NOT NULL,
    `id`    INT NOT NULL,
    `store_lnk` VARCHAR NULL,
    `category`  VARCHAR NULL,
    `image_path`    VARCHAR NULL,
    `created_at`    TIMESTAMP   NULL,
    `updated_at`    TIMESTAMP   NULL
);

CREATE TABLE `tags` (
    `tag no.`   INT NOT NULL,
    `hashtag`   TEXT    NULL,
    `created_at`    TIMESTAMP   NULL
);

ALTER TABLE `members` ADD CONSTRAINT `PK_MEMBERS` PRIMARY KEY (
    `id`
);

ALTER TABLE `groups` ADD CONSTRAINT `PK_GROUPS` PRIMARY KEY (
    `group no.`
);

ALTER TABLE `groups_tags` ADD CONSTRAINT `PK_GROUPS_TAG` PRIMARY KEY (
    `id`,
    `group no.`,
    `tag no.`
);

ALTER TABLE `comments` ADD CONSTRAINT `PK_COMMENTS` PRIMARY KEY (
    `email`,
    `feeds no.`,
    `id`,
    `group no.`
);

ALTER TABLE `group_members` ADD CONSTRAINT `PK_GROUP_MEMBERS` PRIMARY KEY (
    `email`,
    `id`,
    `group no.`
);

ALTER TABLE `feeds` ADD CONSTRAINT `PK_feeds` PRIMARY KEY (
    `feeds no.`,
    `id`,
    `group no.`
);

ALTER TABLE `feed_tags` ADD CONSTRAINT `PK_feed_tags` PRIMARY KEY (
    `id`,
    `feeds no.`,
    `email`,
    `group no.`,
    `tag no.`
);

ALTER TABLE `store` ADD CONSTRAINT `PK_store` PRIMARY KEY (
    `store no.`,
    `id`
);

ALTER TABLE `tags` ADD CONSTRAINT `PK_TAGS` PRIMARY KEY (
    `tag no.`
);

ALTER TABLE `groups_tags` ADD CONSTRAINT `FK_groups_TO_groups_tags_1` FOREIGN KEY (
    `group no.`
)
REFERENCES `groups` (
    `group no.`
);

ALTER TABLE `groups_tags` ADD CONSTRAINT `FK_tags_TO_groups_tags_1` FOREIGN KEY (
    `Key3`
)
REFERENCES `tags` (
    `Key`
);

ALTER TABLE `comments` ADD CONSTRAINT `FK_feeds_TO_comments_1` FOREIGN KEY (
    `feeds no.`
)
REFERENCES `feeds` (
    `feeds no.`
);

ALTER TABLE `comments` ADD CONSTRAINT `FK_Untitled5_TO_comments_2` FOREIGN KEY (
    `id`
)
REFERENCES `Untitled5` (
    `id`
);

ALTER TABLE `comments` ADD CONSTRAINT `FK_feeds_TO_comments_3` FOREIGN KEY (
    `group no.`
)
REFERENCES `feeds` (
    `group no.`
);

ALTER TABLE `Untitled4` ADD CONSTRAINT `FK_Untitled_TO_Untitled4_1` FOREIGN KEY (
    `Key2`
)
REFERENCES `Untitled` (
    `Key`
);

ALTER TABLE `group_members` ADD CONSTRAINT `FK_groups_TO_group_members_1` FOREIGN KEY (
    `group no.`
)
REFERENCES `groups` (
    `group no.`
);

ALTER TABLE `Untitled5` ADD CONSTRAINT `FK_Untitled_TO_Untitled5_1` FOREIGN KEY (
    `Key2`
)
REFERENCES `Untitled` (
    `Key`
);

ALTER TABLE `feeds` ADD CONSTRAINT `FK_groups_TO_feeds_1` FOREIGN KEY (
    `group no.`
)
REFERENCES `groups` (
    `group no.`
);

ALTER TABLE `feed_tags` ADD CONSTRAINT `FK_feeds_TO_feed_tags_1` FOREIGN KEY (
    `feeds no.`
)
REFERENCES `feeds` (
    `feeds no.`
);

ALTER TABLE `feed_tags` ADD CONSTRAINT `FK_feeds_TO_feed_tags_2` FOREIGN KEY (
    `email`
)
REFERENCES `feeds` (
    `id`
);

ALTER TABLE `feed_tags` ADD CONSTRAINT `FK_feeds_TO_feed_tags_3` FOREIGN KEY (
    `group no.`
)
REFERENCES `feeds` (
    `group no.`
);

ALTER TABLE `feed_tags` ADD CONSTRAINT `FK_tags_TO_feed_tags_1` FOREIGN KEY (
    `tag no.`
)
REFERENCES `tags` (
    `tag no.`
);

ALTER TABLE `store` ADD CONSTRAINT `FK_members_TO_store_1` FOREIGN KEY (
    `id`
)
REFERENCES `members` (
    `id`
 );