def buildJar() {
    echo "building the application..."
} 

def buildFront() { 
    sh 'pwd'
    dir ('../mern-app/frontend/') { 
    //sh 'pwd'
    //sh 'npm cache clean -force'
    //sh "npm install"
    //sh "npm install -g @angular/cli"
    echo "building of the frontend part successful ..."
    }
} 

def buildBack() {
    
    dir ('../mern-app/Backend/') { 
    //sh 'npm install'
    echo "building of the backend part successful..."
    }
} 

def buildImage() {
    echo "building the docker image"
    dir ('../mern-app/frontend/') { 
    //sh 'rm -rf node_modules'
    sh 'pwd'
    //withCredentials([usernamePassword(credentialsId: 'docker_hub_repo', usernameVariable: 'USER', passwordVariable: 'PASS')]){
    sh 'docker build -t frontend .'
    //sh "docker login -u ${USER} -p ${PASS}"
    //sh 'docker push tsah007/bootcamp:jma-1.1'
    }
}

def deployApp() {
    echo 'deploying the application...'
} 

return this
