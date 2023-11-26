# Node.js Express, Sequelize & PostgreSQL: CRUD Rest APIs

For instruction, please visit:

> [Node.js CRUD Rest APIs with Express, Sequelize & PostgreSQL example]

We will build Rest Apis that can create, retrieve, update, delete and find Tutorials by title.

The following table shows overview of the Rest APIs that will be exported:

- GET `api/tutorials` get all Tutorials
- GET `api/tutorials/:id` get Tutorial by id
- POST `api/tutorials` add new Tutorial
- PUT `api/tutorials/:id` update Tutorial by id
- DELETE `api/tutorials/:id` remove Tutorial by id
- DELETE `api/tutorials` remove all Tutorials
- GET `api/tutorials/published` find all published Tutorials
- GET `api/tutorials?title=[kw]` find all Tutorials which title contains 'kw'
