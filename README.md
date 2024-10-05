
# Aziz-Mart-API

## Starting Code
This section contains the initial code setup for the project, which can be used as a foundation to build upon.

## Description
A backend project built with Node.js, Express, and PostgreSQL.

## Requirements
- Node.js
- PostgreSQL
- npm

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Jamalbarhoum/Aziz-Mart-API.git
cd your-project-directory
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of your project with the following content:
```bash
connectionString=your-postgresql-connection-string
PORT=your-port-number
```
## Notes
ConnectionString: It is the URL of your database

### 4. Run the Application
After setting up the environment variables and installing the dependencies, you can start the server by running:
```bash
npm run dev
```

The server should now be running and listening on the port specified in the `.env` file.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database management system.
- **dotenv**: To manage environment variables.

## Notes
Make sure you have PostgreSQL installed and running, and that the `connectionString` in the `.env` file is pointing to your PostgreSQL instance.
