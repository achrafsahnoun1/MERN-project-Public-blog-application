def buildJar() {
    echo "building the application..."
} 

def buildFront() { 
    sh 'pwd'
    dir ('../frontend') { 
    sh 'rm -R package-lock.json'
    sh 'npm cache clean -force'
    sh "npm install -g @angular/cli"
    sh "npm install"
    echo "building of the frontend part successful ..."
    }
} 
def testFront() {
    sh 'cd frontend'
    sh 'npm test'
    echo "testing of the frontend part successful ..."
} 


def buildBack() {
    sh 'cd Backend'
    sh 'npm install'
    echo "building of the backend part successful..."
} 
def testBack() {
    sh 'cd Backend'
    sh 'npm test'
    echo "testing of the backend part successful..."

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