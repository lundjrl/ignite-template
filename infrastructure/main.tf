terraform {
  backend "http" {
  }
}

module "production" {
  source  = "gitlab.com/SPARKBusinessWorks/front-end-app/local"
  version = "1.2.0"

  aws_region     = var.aws_region
  aws_role_arn   = var.aws_role_arn
  project_name   = local.project_name
  project_domain = "app.example-client.com"
  environment    = "production"

  pgp_key_email = "apps+example-client-front-end-production@sparkbusinessworks.com"
  pgp_key_name  = "Example Client Production Front-end"
}

output "production_front_end_deploy_key_id" {
  value = module.production.front_end_deploy_key_id
}

output "production_front_end_deploy_encrypted_secret" {
  value     = module.production.front_end_deploy_encrypted_secret
  sensitive = true
}

output "production_aws_iam_role_front_end_deploy_arn" {
  value = module.production.aws_iam_role_front_end_deploy.arn
}

output "production_pgp_key_front_end_deploy_private_key" {
  value     = module.production.pgp_key_front_end_deploy_private_key
  sensitive = true
}

output "production_aws_acm_certificate_domain_validation_options" {
  value = module.production.aws_acm_certificate_domain_validation_options
}

output "production_aws_s3_bucket_front_end_bucket" {
  value = module.production.aws_s3_bucket_front_end.bucket
}

output "production_cloudfront_distribution_id" {
  value = module.production.aws_cloudfront_distribution_front_end_s3.id
}

output "production_aws_cloudfront_distribution_front_end_s3_domain_name" {
  value = module.production.aws_cloudfront_distribution_front_end_s3.domain_name
}

locals {
  project_name = "example-client-front-end"
}
