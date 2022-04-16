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
                    gv.checkoutrepo()
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
        stage("test app") {
           
            steps {
                script{
                    
                    gv.testFront()
                    gv.testBack()
                    
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