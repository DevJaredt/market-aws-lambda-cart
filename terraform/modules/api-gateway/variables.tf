variable "api_name" {
  description = "Cart's API gateway"
  type = string
    default = "carts-api"
}

variable "api_description" {
  description = "API gateway for carts service"
  type = string
  default = "Cart's service API gateway"
}

variable "auto_deploy" {
  description = "Automatically deploy the API when changes are made"
  type = bool
  default = true
}

variable "stage_name" {
  description = "Default stage name for the API gateway"
  type = string
  default = "$default"
}