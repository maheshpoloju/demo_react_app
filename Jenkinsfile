pipeline {
    agent any

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
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build app') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}