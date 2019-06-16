#!/usr/bin/groovy

@Library('github.com/fabric8io/osio-pipeline@master')

osio {

  config runtime: 'node'

  ci {
    // runs oc process
    def resources = processTemplate()

    // performs an s2i build
    build resources: resources
  }

  cd {
    // override the RELEASE_VERSION template parameter
    def resources = processTemplate(params: [
        RELEASE_VERSION: "1.0.${env.BUILD_NUMBER}"
    ])

    build resources: resources

    deploy resources: resources, env: 'stage'

    // wait for user to approve the promotion to "run" environment
    deploy resources: resources, env: 'run', approval: 'manual'
  }
}
