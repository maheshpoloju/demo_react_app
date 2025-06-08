pipeline {
    agent any

    environment {
        IMAGE_NAME = "reactjs-demo-ci-cd-docker"
        CONTAINER_NAME = "reactjs-demo-ci-cd-docker-container"
    }

    stages {
        stage('Clone Repo'){
            steps {
                echo 'Cloning the repo...'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build app') {
            steps {
                bat 'npm run build'
            }
        }

         stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                @echo off
                docker ps -a --filter "name=%CONTAINER_NAME%" --format "{{.Names}}" | findstr /I "^%CONTAINER_NAME%$" >nul
                if %ERRORLEVEL% == 0 (
                    echo Stopping container %CONTAINER_NAME%...
                    docker stop %CONTAINER_NAME%
                    echo Removing container %CONTAINER_NAME%...
                    docker rm %CONTAINER_NAME%
                ) else (
                    echo Container %CONTAINER_NAME% does not exist. Skipping stop and remove.
                )
                '''
                bat 'docker run -d -p 3030:80 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }
    }
}