# socialnetworkapi

  ![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ### An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.  Website should be able to handle large amounts of unstructured data.
  ## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  Precondition steps: Install a Mongo database server. For MACs the guidance may be found at: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
  
  ## Usage 
  Clone the repository.  Run "npm install" in the console from the app directory. Run "npm start" in the console from the app directory to start the app. Examples of the REST API requests may be found in the video which shows usage of the Insomnia app.
  
  ## Credits
   Thanks to my tutor C. Yates and S. Thompson for assistance through this project.
##
## License <br>https://opensource.org/licenses/MIT
  ## Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [dawnleblanc11](https://github.com/https://github.com/dawnleblanc11/socialnetworkapi)
  * Email: dawnleblanc11@gmail.com
## Technlogy Used <br> 
     NoSql database- specifically MondoDB, Express.js for routing and the Mongoose ODM. In addition to using the Express.js.  In addition, used JavaScript date library- dateFormat of to format timestamps and Insomnia for testing all API routes.
  
  ## Features
  Social network that uses a NoSQL database(MongoDB) to handle large amounts of unstructured data.
  Mongoose models are synced to the MongoDB database upon opening of the application.  The database stores key information on Users, their Friends, any Thoughts they have to share with each other and Reactions to those thoughts. GET, POST, PUT and DELETE API routes have been establised and are ready to connect with a front end for this application.  The routes can do the following
  **USER**
  Add a new user, revise the user information (username, email), tests that a proper email was entered- see my gist at for a detailed breakdown of how it functions https://gist.github.com/dawnleblanc11/0ce4324fe6f1693e29f79c7e77de508e, list all active users, delete a user and any associated thoughts or reactions.
  **FRIENDS**
  Add a new Friend to any User and delete Friends.  The database will retain a count of friends for each user and adjust properly as added and deleted.
  **THOUGHTS**
  Thoughts can be added to each User by any user.  These thoughts are connected to the user it applies to in the database.
  **REACTIONS**
  Reactions to thougths can also be added to any Thought by any user.  These reactions are stored in the Thoughts data and connected to the user.  You can also delete a reaction.
  
  ## Tests
To view all tests in progress, please view the following videos of Insomia demonstrating functionality and acceptance criteria
Link to the video of Insomnia demonstrating functionality and acceptance criteria