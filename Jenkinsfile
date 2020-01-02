pipeline {
    environment {
     def registryCredential = 'dockerhubcred'
    def dockinst = ''
}
    
  agent any
 
  tools {
      nodejs "Node v10"
      
  }
 
  stages {
    stage('Example') {
      steps {
        sh 'npm config ls'
      }
    }
   stage('Cloning Git') {
      steps {
        git 'https://github.com/Authis/employee-react-reg'
        sh 'echo "Clone React App Successfull"'
      }
    }
 
    
   stage('Building image') {
    steps{
      script {
        dockinst =  docker.build "authis/employee-react-front:latest"
       }
       sh 'echo "Build docker image Successfully >>>>>>>>>>>>>>>>>>>>>"'
    }
    
     }
      
      stage('Push image') {
       steps{
      script {
        docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockinst.push()
            
        }
          sh 'echo "Trying to push Docker Build to Docker Hub"' 
      }
       }
    }
  
    
    stage('docker stop container') {
       steps{ 
               script{
                   try{ 
                        sh 'docker rm $(docker ps -f name=emp-react-front -q) -f'
                   }catch(err){
                      echo 'I am in exception'+ err
                   }
               } 
            }
    } 
    
    stage('run image') {
              steps{
                script {
                  docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                     docker.image('registry.hub.docker.com/authis/employee-react-front').run('--name emp-react-front --publish 7090:3000')
                  }  
              }
           }
        } 
    
 }
}
