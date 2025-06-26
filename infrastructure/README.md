# Infrastructure as code with OpenTofu

Infrastructre is managed with OpenTofu. Deploying changes to the infrastructure should be done in a separate branch and merged to the `main` branch for deployment. The remote backend is configured to use an the `SPARKBusinessWorks/xxx` gitlab tofu state. This is to ensure the infrastructure state is backed up and can be accessed by any computer that has access to the GitLab API programmatically.

## Commands

### tofu init

```
export AWS_ACCESS_KEY_ID=<tofu-USER-AWS-ACCESS-KEY-ID>
export AWS_SECRET_ACCESS_KEY=<tofu-USER-AWS-SECRET-ACCESS-KEY>
export GITLAB_ACCESS_TOKEN=<YOUR-ACCESS-TOKEN>
export GITLAB_USERNAME=<YOUR-USERNAME>
export TF_TOKEN_gitlab_com=$GITLAB_ACCESS_TOKEN
export TF_VAR_aws_role_arn=<tofu-ROLE-ARN-TO-ASSUME>
tofu init \
    -backend-config="address=https://gitlab.com/api/v4/projects/xxx/terraform/state/default" \
    -backend-config="lock_address=https://gitlab.com/api/v4/projects/xxx/terraform/state/default/lock" \
    -backend-config="unlock_address=https://gitlab.com/api/v4/projects/xxx/terraform/state/default/lock" \
    -backend-config="username=$GITLAB_USERNAME" \
    -backend-config="password=$GITLAB_ACCESS_TOKEN" \
    -backend-config="lock_method=POST" \
    -backend-config="unlock_method=DELETE" \
    -backend-config="retry_wait_min=5"
```

### How to get encrypted secrets

- Requires the gpg command line utility
- Requires the base64 command line utility
- You will need to replace xxx with the module name in the `main.tf` file (this references the outputs defined in `main.tf`)

1. Import the generated PGP private key:

```
tofu output -raw production_pgp_key_front_end_deploy_private_key | gpg --import
```

2. Then you can decrypt the IAM Access Key Secret

```
tofu output -raw production_front_end_deploy_encrypted_secret | base64 --decode | gpg --decrypt
```
