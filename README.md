#User Information Project
This project is a Node.js application that manages user information with PostgreSQL as the database. It includes Docker configuration for easy deployment.

##Prerequisites
Node.js (v18.18.2 or later)
Docker
PostgreSQL (16.2)

##Getting Started
###1.Clone the repository:
```bash
git clone <repository-url>
cd user-information
```
###2.Install Dependencies:
```bash
npm install
```
###3.Set up Environment Variables:Create a .env file in the root directory and add the following variables:
```bash
DB_USER=postgres
DB_PASSWORD=141103
DB_HOST=localhost (or db for running on docker)
DB_PORT=5432
DB_DATABASE=postgres
DB_NAME=postgres
```

###4.Start the Application:
```bash
npm run start
```

###5.Access the Application:Open your browser and navigate to http://localhost:8080.


##Docker

To build and run the application using Docker, use the following commands:

###1.Build Docker image:
```bash
docker build -t user-information .
```

###2.Run Docker container:
```bash
docker run -p 8080:8080 --env-file .env user-information
```


