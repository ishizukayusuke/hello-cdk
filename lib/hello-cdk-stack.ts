import cdk = require("@aws-cdk/core")
import { Bucket } from "@aws-cdk/aws-s3"

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 Bucket
    new Bucket(this, id, {
      bucketName: "ishizuka-bucket",
    })
  }
}