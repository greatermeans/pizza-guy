def config, slack
fileLoader.withGit('git@pwc-jenkinsci-lib:business-os/pwc-jenkinsci-lib.git', 'common-lib-test', null, '') {
    config = fileLoader.load('config/cicd-config');
    slack = fileLoader.load('slack/slack-utils');
}

// Parse out the scm details and store in config object so we can reference later
config.parseGitConfig(env.JOB_NAME)

stage 'Pull Environment Config'
node {
  deleteDir()
  config.fetchEnvConfig(env.CONFIG_BUCKET)
  //bucket = config.getConfigPath(config.getBranch(), env.CONFIG_BUCKET)
  //sh "gsutil cp -r gs://${bucket} ."
  stash includes: '**', name: 'build-config'
}

stage 'Build Firebase+React source'
node {
    try {
      slack.notifyBuild('STARTED')
      checkout scm
      unstash 'build-config'
      sh 'cp config.env src/app/.'
      sh 'npm set progress=false && npm install && npm run build'
      stash includes: '**', name: 'build-artifact'
    } catch (e) {
      // If there was an exception thrown, the build failed
      currentBuild.result = "FAILED"
      slack.notifyBuild(currentBuild.result)
      throw e      
    }
}

stage 'Unit-test Firebase+React application'
node {
    try {
      unstash 'build-artifact'
      sh 'npm set progress=false && npm run test'
    } catch (e) {
      // If there was an exception thrown, the build failed
      currentBuild.result = "FAILED"
      slack.notifyBuild(currentBuild.result)
      throw e      
    }
}

if(config.isPR() == false) {
  stage 'Deploy Firebase+React application'
  node {
      try {
        fbToken = "${env.FIREBASE_TOKEN}"
        fbProject = "${env.FIREBASE_PROJECT}"
        echo "Firebase Token: ${fbToken}\nFirebase Project: ${fbProject}"
        unstash  'build-artifact'
        // deploy app to firebase project
        sh "firebase deploy --only hosting -P ${fbProject} --token ${fbToken}"
      } catch (e) {
        // If there was an exception thrown, the build failed
        currentBuild.result = "FAILED"
        slack.notifyBuild(currentBuild.result)
        throw e      
      }
      slack.notifyBuild(currentBuild.result)
  }
}
