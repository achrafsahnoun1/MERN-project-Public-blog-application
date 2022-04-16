def gv
pipeline {
    agent any
    tools{
        node 'node'
    }
 
    stages {
        stage("init") {
           
            steps {
                script{
                    gv=load "script.groovy"
                }
            }
        }
        stage("build app") {
           
            steps {
                script{
                    
                    gv.buildJar()
                }
            }
        }
        stage("Building the image") {
            
            steps {
                script {
                    gv.buildImage()
                    }
                }
            }
        
        stage("deploy ") {
            steps {
                script {
                    gv.deployApp()
                }
            }
        }
    }
       
    }   