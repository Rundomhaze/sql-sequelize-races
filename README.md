# Horse races!

## Introduction

![](races_schema.png)

*Figure 1.* Task Schema (How it would look for an SQL database).

Imagine that you're creating an app for scheduling races. In this app, users register as jockeys, enter their horse, and join a race. Figure 1 shows a schema in a relational database.

The database should have answers to the following questions:

*For a horse ...*
1. Which races did this horse run?
2. Which jockeys rode this horse in a specific race?

*For a jockey ...*

1. In what races did this jockey participated?
2. Which horses did this jockey ride?

*For a race ...*
1. Which jockeys participated in this race?
2. What horses ran this race?

## Releases

### Release 0 (Sequelize RAW Queries)

Create a file, connect Sequelize and connect it to the database.
Create tables using DDL commands and fill your database with data. Next, go through the above questions and make a database request for each; each query should return the correct response to the corresponding question. In doing so, you can check yourself and correct your database accordingly.

### Release 1 (Sequelize Models)
Now write models using Sequelize-cli. Next, repeat Release 0 with these new models:
- Fill your database with data ([faker](https://www.npmjs.com/package/faker) may be helpful)
- Create a database query for each question.
