workflow "Build and Publish" {
  on = "push"
  resolves = ["Docker Registry"]
}

action "npm install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "npm run build" {
  uses = "actions/npm@master"
  args = "run build:dev"
  needs = ["npm install dependencies"]
}

action "docker build" {
  uses = "actions/docker/cli@master"
  args = "build -t rome:latest ."
  needs = ["npm run build"]
}

action "docker tag" {
  uses = "actions/docker/tag@master"
  args = "rome:latest polatengin/rome:latest"
  needs = ["docker build"]
}

action "docker login" {
  uses = "actions/docker/login@master"
  needs = ["docker tag"]
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "docker publish" {
  needs = ["docker login"]
  uses = "actions/docker/cli@master"
  args = "push polatengin/rome:latest"
}
