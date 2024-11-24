# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the local files into the container's Nginx web root
COPY . .

# Expose port 80 for web traffic
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
