variable "aws_region" {
  type        = string
  description = "The terraform aws provider region, where resources are created"
  default     = "us-east-2"
}

variable "aws_role_arn" {
  type        = string
  description = "The terraform aws provider IAM role ARN that the IAM user will assume"
}
