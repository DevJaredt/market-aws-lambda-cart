export const environments = {
  cartsTableName: process.env.CARTS_DYNAMODB_TABLE_NAME || "carts",
  awsRegion: process.env.AWS_REGION || "us-west-1",
};
