# Use nginx image to serve static files
FROM nginx:alpine

# Copy all your frontend files into nginx's html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]