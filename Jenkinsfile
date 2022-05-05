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
                        def runplaybook = 'ansible-playbook -i /home/ansadmin/hosts -i /home/ansadmin/docker-compose.yaml /home/ansadmin/continous-deployment.yml'
                        withCredentials([usernamePassword(credentialsId: 'ansible-ansadmin-user',usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                        sh "sshpass -p ${PASSWORD} scp -v -o StrictHostKeyChecking=no continous-deployment.yml ansadmin@172.31.19.20:/home/ansadmin  "
                        sh "sshpass -p ${PASSWORD} scp -v -o StrictHostKeyChecking=no docker-compose.yaml ansadmin@172.31.19.20:/home/ansadmin  "
                        sh "sshpass -p ${PASSWORD} ssh -v -o StrictHostKeyChecking=no ansadmin@172.31.19.20  ${runplaybook}"
                        

                    }
                    }
                }
            }
    
        }
    }
       
}
