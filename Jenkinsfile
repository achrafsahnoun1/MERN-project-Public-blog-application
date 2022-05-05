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
        /*stage("build app") {
           
            steps {
                script{
                    
                    gv.buildFront()
                    gv.buildBack()
                    
                }
            }
        }
       
        stage("Building the image") {  
            steps {
                script {
                    gv.buildfrontImage()
                    gv.buildbackImage()
                    }
                }
            }*/
        stage("copying files to ansible server ") {
            steps {
                script {
                    //gv.deployApp()
                    echo "copying files to ansible server"
                    sshagent(['ansible-server']){
                        withCredentials([usernamePassword(credentialsId: 'ansible-ansadmin-user',usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){

                        sh "sshpass -v -p ${PASSWORD} ansadmin@172.31.19.20 "
                       // sh 'su ansadmin  '
                        echo "khra"
                    }
                    }
                }
            }
    
        }
    }
       
}
