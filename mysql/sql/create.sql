CREATE DATABASE IF NOT EXISTS training;
USE training;

CREATE TABLE IF NOT EXISTS users(
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(40)  NOT NULL,
  password   VARCHAR(100) NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME     NULL
);

CREATE TABLE IF NOT EXISTS servers(
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  owner_id   INT          NOT NULL,
  name       VARCHAR(100) NOT NULL,
  icon       VARCHAR(100) NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME     NULL,
  FOREIGN KEY (owner_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS channels(
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  server_id  INT          NOT NULL,
  name       VARCHAR(100) NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME     NULL,
  FOREIGN KEY (server_id) REFERENCES servers (id)
);

CREATE TABLE IF NOT EXISTS posts(
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  user_id    INT          NOT NULL,
  channel_id    INT          NOT NULL,
  content       TEXT         NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME     NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (channel_id) REFERENCES channels (id)
);
