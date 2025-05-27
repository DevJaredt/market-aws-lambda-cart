resource "aws_dynamodb_table" "table" {
  name         = var.table_name
  billing_mode = var.billing_mode
  hash_key     = "userId"  

  attribute {
    name = "userId"
    type = "S" 
  }
}
