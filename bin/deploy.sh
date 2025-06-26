#!/bin/bash

_handle_unexpected_error_result() {
    if [ ! -n "$1"]; then
        echo "An unexpected error occured"
    else
        echo "$1"
    fi
    docker compose -f $2 up -d
    exit 1
}

if [ ! -n "$1" ]; then
    echo "USAGE: deploy.sh <writable-deploy-path>"
    exit 1
fi

DEPLOY_PATH=$1

mkdir -p $DEPLOY_PATH

docker login -u gitlab-ci-token -p $CI_JOB_TOKEN $CI_REGISTRY || { echo "Failed to login to docker container registry"; exit 1; }

DOCKER_COMPOSE_YAML="$DEPLOY_PATH/docker-compose.yaml"
if [ -f "$DOCKER_COMPOSE_YAML" ]; then
    docker compose -f $DOCKER_COMPOSE_YAML down --remove-orphans || { _handle_unexpected_error_result "An error occured running docker compose down" $DOCKER_COMPOSE_YAML; }
fi

cp ./docker/docker-compose.deployable.yaml $DOCKER_COMPOSE_YAML || { _handle_unexpected_error_result "An error occured copying docker/docker-compose.deployable.yaml to $DOCKER_COMPOSE_YAML" $DOCKER_COMPOSE_YAML; }

docker compose -f $DOCKER_COMPOSE_YAML pull || { _handle_unexpected_error_result "An error occured running docker compose pull" $DOCKER_COMPOSE_YAML; }

START_SUCCESS=0
for i in 1 2 3 4 5; do
    docker compose -f $DOCKER_COMPOSE_YAML up -d && START_SUCCESS=1 && break || sleep 15;
done

if [ "$START_SUCCESS" -eq "0" ]; then
    _handle_unexpected_error_result "An error occured running docker compose up" $DOCKER_COMPOSE_YAML;
fi
