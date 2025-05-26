variable "table_name" {
  description = "Name of the DynamoDB table"
  type        = string
  default     = "Cart"
}

variable "billing_mode" {
  description = "Controls how you are charged for read and write throughput"
  type        = string
  default     = "PAY_PER_REQUEST"
}

variable "hash_key" {
  description = "Partition key name"
  type        = string
  default     = "uuid"
}

variable "hash_key_type" {
  description = "Partition key type"
  type        = string
  default     = "S"
}

variable "range_key" {
  description = "Range key name"
  type        = string
  default     = "userId"
}

variable "range_key_type" {
  description = "Range key type"
  type        = string
  default     = "S"
}