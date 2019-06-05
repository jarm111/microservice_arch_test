# Node base image
FROM node:lts-alpine
# Create working dir and set permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Set working dir
WORKDIR /home/node/app
# Copy package.json and package-lock.json
COPY package*.json ./
# Set user to node for owner of created files
USER node
# Install dependencies
RUN npm install
# Copy your application code with correct permissions
COPY --chown=node:node . .
# Expose port
EXPOSE 8130
# Start the app
CMD [ "node", "index.js" ]