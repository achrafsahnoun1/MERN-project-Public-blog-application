def buildJar() {
    echo "building the application..."
} 

def buildImage() {
    echo "building the docker image"
    //withCredentials([usernamePassword(credentialsId: 'docker_hub_repo', usernameVariable: 'USER', passwordVariable: 'PASS')]){
    //sh 'docker build -t tsah007/bootcamp:jma-1.1 .'
    //sh "docker login -u ${USER} -p ${PASS}"
    //sh 'docker push tsah007/bootcamp:jma-1.1'
    }
//}

def deployApp() {
    echo 'deploying the application...'
} 

return this