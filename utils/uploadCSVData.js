// Import the AWS SDK
import AWS from "aws-sdk";

// Set the AWS region and credentials
AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

// Create a new instance of the S3 service
const s3 = new AWS.S3();

// Start the multipart upload
const startUpload = async () => {
  const params = {
    Bucket: "bucket-name",
    Key: "file-name",
    ContentType: "file-type",
  };
  try {
    const res = await s3.createMultipartUpload(params).promise();
    console.log("Upload ID:", res.UploadId);
  } catch (error) {
    console.error("Error starting upload:", error);
  }
};

// Complete the multipart upload
const completeUpload = async (uploadId, parts) => {
  const params = {
    Bucket: "bucket-name",
    Key: "file-name",
    MultipartUpload: {
      Parts: parts,
    },
    UploadId: uploadId,
  };
  try {
    const res = await s3.completeMultipartUpload(params).promise();
    console.log("Upload completed:", res.Location);
  } catch (error) {
    console.error("Error completing upload:", error);
  }
};
// Usage example
// startUpload();
// ...
// Call completeUpload() with the upload ID and parts array to complete the upload
