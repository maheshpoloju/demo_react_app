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
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build app') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}