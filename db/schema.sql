-- DROP DATABASE IF EXISTS students_db;
CREATE DATABASE students_db;
USE students_db;
-- DROP TABLE sample_data;

CREATE TABLE sample_data(
  ID CHAR(45) NOT NULL,
  address VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  county VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  zip int(11) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE names(
--   ID CHAR(45) NOT NULL,
--   first_name VARCHAR(45) NOT NULL,
--   last_name VARCHAR(45) NOT NULL,
--   DOB VARCHAR(45) NOT NULL, 
--   PRIMARY KEY (ID)
-- );