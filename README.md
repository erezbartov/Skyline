# Follow these steps to build and run the Docker container:

Before running the Docker container, ensure you have the following installed:

- **[Docker](https://docs.docker.com/get-docker/)**: Follow the installation guide for your platform from the official Docker website.

## the docker aproach:

### build:
- ```docker build -t cesium-app .```

### run:
- ```docker run -d -p 8080:80 --name cesium-app-container cesium-app```

### access:
- ```http://localhost:8080```


### stoping the container:
- ```docker stop cesium-app-container```

### removing the container:
- ```docker rm cesium-app-container```

### clean up:
- ```docker rmi cesium-app```

## alternativly:
open 'index.html' in the browser
