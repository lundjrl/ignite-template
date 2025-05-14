#!/bin/bash

export UID
docker compose run --entrypoint=bun --rm bun $@
