pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
    
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
            }
        }
    
    stage('Install dependencies') {
      steps {
        echo 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
