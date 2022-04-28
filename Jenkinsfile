def gv
pipeline {
    agent any
    tools{
         nodejs 'node'
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
                    
                    gv.buildFront()
                    gv.buildBack()
                    
                    //gv.buildJar()
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