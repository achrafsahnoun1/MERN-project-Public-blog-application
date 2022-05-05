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
                        sh "ssh -v -o StrictHostKeyChecking=no ec2-user@172.31.19.20"
                        withCredentials([usernamePassword(credentialsId: 'ansible-ansadmin-user', passwordVariable: 'PASS2')]){
                        sh "su ansadmin sh -p ${PASS2} --password-stdin"}
                    }
                }
            }
    
        }
    }
       
}
