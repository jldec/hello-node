# hello-node
Minimal node.js application with Docker and Kubernetes deployment 

#### prepare to run locally
```
npm install
```

#### run locally
This will run the app as a local node.js server, listening on http://localhost:8080/
```
node server
```

#### build Docker image
This will build a local docker image (assumes docker installed)
```
docker build -t dev.local/hello-node:1.0.0 .
```

#### deploy to Kubernetes
This will run the app as a Kubernetes deployment with 3 instances, exposed on http://localhost:30100/
(assumes Docker image available)
```
kubectl apply -f k8s-config
```
