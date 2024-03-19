import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config as configDotenv } from "dotenv";

configDotenv();

const BUCKET_NAME = process.env.DATA_BUCKET;

const s3Client = new S3Client({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
});

export const getSignedURL = async (req, res) => {
    const imageName = req.params.imageName;
  // const imageName = "abcd";
  const S3key = `userVehicleData/${imageName}`;

  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: S3key,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 36000 });
    console.log("getUrl", url);
    res.status(200).send(url);
  } catch (error) {
    res.status(500).send("error in: " + error);
  }
};

export const getSignedUplaodURL = async (req, res) => {
  // console.log(req.body);
  const fileName = req.body.fileName;
  const type = req.body.type;
  const S3key = `uploads/${fileName}`;
  // console.log(fileName, type, S3key);

  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: S3key,
      ContentType: type,
    });
    const url = await getSignedUrl(s3Client, command);
    // console.log("postFileUrl", url);
    res.status(200).json({uploadURL: url});
  } catch (error) {
    console.error("error in " + error);
  }
};

export const deleteUserFile = async (req, res) => {
  const fileName = req.params.fileName;
  const S3key = `userVehicleData/${fileName}`;

  try {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: S3key,
      })
    );

    console.log(`Deleted file: ${fileName}`);
    res.status(204).send(); // Respond with a 204 (No Content) status on successful deletion
  } catch (error) {
    console.error("Error deleting file: " + error);
    res.status(500).send("Error deleting file: " + error);
  }
};
