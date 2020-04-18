pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Install dependencies') {
      steps {
        echo 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         echo 'npm test'
      }
    }      
  }
}
