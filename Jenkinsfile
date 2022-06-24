pipeline {
    agent any
    triggers { pollSCM('* * * * *')}


    stages {
        // stage('Checkout') {
        //     steps {
        //        git branch: 'main', url: 'https://github.com/mtzngn/discoverLondon.git'
        //     }
        // }
        stage('Install Packages') {
            steps {
               sh 'yarn install'
               sh 'yarn run cocoapods'
            }
        }
        stage('Build IOS') {
            steps {
               sh 'yarn run ios'
            }
        }
        stage('Build Android') {
            steps {
               sh 'yarn run ios'
            }
        }
        stage('Linting') {
            steps {
               sh 'yarn run lint'
            }
        }
        stage('Run Unit Tests') {
            steps {
               sh 'yarn run test'
            }
        }
        }
    }

