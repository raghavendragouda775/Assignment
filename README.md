***Technologies Used***
1)Node.js for the backend
2)Express.js as the web framework
3)MySQL2 for database interactions
4)Dotenv for managing environment variables

********************************************

***Steps***:
1)Clone the repository:
git clone https://github.com/raghavendragouda775/Assignment/

2)Navigate to the project directory:
cd project-name

3)Install the dependencies:
npm install

4)Create a .env file in the root directory and add the following:
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

5)Run the server:
npm start
******************************************
The server will now be running at http://localhost:5000

******************************************

***API Endpoints**
1. POST /addSchool
Description: Adds a new school to the database.
Body:JSON format

2. GET /listSchools
Description: Fetches a list of all schools.
Response: JSON array with all schools.
