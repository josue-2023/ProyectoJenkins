
Run
Copy code
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // 'NodeJS' es el nombre de la instalación que configuraste
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Angular CLI') {
            steps {
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Build') {
            steps {
                bat 'ng build --configuration production'
            }
        }

        stage('Test') {
            steps {
                bat 'npm run test -- --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Despliegue completado: los archivos ya están en la carpeta servida por Nginx.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'El pipeline falló.'
        }
    }
}