pipeline {
    agent any
     environment {
        registry = "public.ecr.aws/e1t6l5u0/breeth-public"
    }
   
    stages {
          stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/NagabandiSarika/BREETH.git'
            }
        }
           stage('Building image') {
             steps{
                  script {
                   dockerImage = docker.build registry
                   }
      }
           }
    
            stage('Pushing to ECR') {
             steps{  
                  script {
               withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: '024579634030', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin public.ecr.aws/e1t6l5u0/breeth-public'
     sh 'docker push public.ecr.aws/e1t6l5u0/breeth-public:latest'
}

}
                  }
            }
             stage('stop previous containers') {
               steps {
            sh 'docker ps -f name=mypythonContainer -q | xargs --no-run-if-empty docker container stop'
            sh 'docker container ls -a -fname=mypythonContainer -q | xargs -r docker container rm'
         }
       }
            stage('Docker Run') {
              steps{
                   script {
                sh 'docker run -d -p 8000:8000 --rm --name mypythonContainer public.ecr.aws/e1t6l5u0/breeth-public:latest'     
      }
    }
        }
    }
  }
