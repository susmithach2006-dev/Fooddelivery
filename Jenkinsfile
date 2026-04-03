pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                // Build Docker image from Dockerfile
                sh 'docker build -t myfrontend .'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop and remove container if it exists
                sh 'docker stop myfrontend || true'
                sh 'docker rm myfrontend || true'

                // Run container
                sh 'docker run -d -p 3000:80 --name myfrontend myfrontend'
            }
        }
    }
}