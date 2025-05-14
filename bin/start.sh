#!/bin/bash

__file_exists() {
  test -f "$1"
}

_handle_failure() {
  docker compose logs
  docker compose down --remove-orphans
  exit 1
}

export UID

docker compose pull || exit 1
docker compose build || exit 1

./bun install || { _handle_failure; }

docker compose up -d || { _handle_failure; }

docker compose logs -f || {
  docker compose down --remove-orphans
  exit 0
}
