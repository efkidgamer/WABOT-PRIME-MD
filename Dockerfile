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

To build the Docker image:

```bash
docker build -t primemd-bot .
```

To run the Docker container:

```
bash
docker run -d \
  -e SESSION_ID=your_session_id \
  -e PHONE_NUMBER=your_phone_number \
  -e VERIFICATION_CODE=your_verification_code \
  -p 8080:8080 \
  primemd-bot