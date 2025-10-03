variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "db_password" {
  type      = string
  sensitive = true
}
