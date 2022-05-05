def buildJar() {
    echo "building the application..."
} 

def buildFront() { 
  
    """dir ('../mern-app/frontend/') { 
    sh 'pwd'

    sh 'npm cache clean -force'
    sh "npm install"
    sh "npm install -g @angular/cli"
    }"""
    echo "building of the frontend part successful ..."

} 

def buildBack() {
    
    """dir ('../mern-app/Backend/') { 
    sh 'pwd'
    sh 'npm install'
    }"""
    echo "building of the backend part successful..."

} 

def buildfrontImage() {
    echo "building the docker image"
    dir ('../mern-app/frontend/') { 
    //sh 'rm -rf node_modules'
    sh 'pwd'
    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', usernameVariable: 'USER', passwordVariable: 'PASS')]){
    sh 'docker build -t tsah007/mernapp_front:jma-1.0 .'
    sh "docker login -u ${USER} -p ${PASS} --password-stdin"
    sh 'docker push tsah007/mernapp_front:jma-1.0'
    }
}
}
def buildbackImage() {
    echo "building the docker image"
    dir ('../mern-app/Backend/') { 
    //sh 'rm -rf node_modules'
    sh 'pwd'
    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', usernameVariable: 'USER', passwordVariable: 'PASS')]){
    sh 'docker build -t tsah007/mernapp_back:jma-1.0 .'
    sh "docker login -u ${USER} -p ${PASS}"
    sh 'docker push tsah007/mernapp_back:jma-1.0'
    }
    }
}
def deployApp() {
    echo 'deploying the application...'
} 

return this
