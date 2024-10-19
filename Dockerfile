# Use the official Node.js 16 image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package*.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV SESSION_ID=${SESSION_ID}
ENV PHONE_NUMBER=${PHONE_NUMBER}
ENV VERIFICATION_CODE=${VERIFICATION_CODE}

# Expose port 8080 for the bot
EXPOSE 8080

# Run the command to start the bot
CMD ["node", "index.js"]
``}
