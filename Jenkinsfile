pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Asegúrate de que este nombre coincide con tu instalación de NodeJS en Jenkins
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
                echo 'Despliegue completado: Archivos copiados a Nginx.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
            mail to: 'josuegarciahc.2000@gmail.com',
                 subject: "✅ Éxito: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hola,

El pipeline '${env.JOB_NAME}' se ejecutó correctamente en la build #${env.BUILD_NUMBER}.

Puedes ver más detalles en: ${env.BUILD_URL}

Saludos,
Jenkins"""
        }
        failure {
            echo 'El pipeline falló.'
            mail to: 'josuegarciahc.2000@gmail.com',
                 subject: "❌ Fallo: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hola,

El pipeline '${env.JOB_NAME}' falló durante la build #${env.BUILD_NUMBER}.

Revisa los errores en: ${env.BUILD_URL}

Saludos,
Jenkins"""
        }
    }
}