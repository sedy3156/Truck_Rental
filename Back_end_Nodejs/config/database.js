/**
 * Import Sequelize.
 */

//  const Sequelize=require('sequelize')
 const Sequelize =require('sequelize')

 /**
  * Create a Sequelize instance. This can be done by passing
  * the connection parameters separately to the Sequelize constructor.
  */
 const sequelize = new Sequelize("truck_rental", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
 });
 
 /**
  * Export the Sequelize instance. This instance can now be
  * used in the index.js file to authenticate and establish a database connection.
  */

// module.exports = db;
 module.exports = sequelize;
 