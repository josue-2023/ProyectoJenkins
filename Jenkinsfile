pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'ng build --configuration production'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
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