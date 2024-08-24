#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Initialize a new Node project
mkdir task-management-system
cd task-management-system
npm init -y

# Install Express
npm install express

# Install required packages
npm install mysql2 sequelize express-validator jsonwebtokennodemon

# Create a new file for package.json script
echo "node app.js" > start.sh
chmod +x start.sh

echo "Ready to run the task management system! Run './start.sh' to start the server."