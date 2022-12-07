# Create image OS from Linux Alpine including node.js inside:
FROM node:alpine

# Install TypeScript compiler globally:
RUN npm i -g typescript

# Install ts-node globally:
RUN npm i -g ts-node

# Setting a current directory inside the image:
WORKDIR /my-app

# Copy package.json into target directory inside the image (/my-app):
COPY package.json /my-app

# Run npm install during image creation, inside the image (will run in the current directory /my-app):
RUN npm i

# Copy source files into the image:
COPY . /my-app

# What is the one command line to run when container starts (npm start)
CMD ["npm", "start"]
