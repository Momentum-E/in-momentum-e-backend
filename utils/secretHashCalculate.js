import crypto from "crypto";

export function calculateSecretHash(username, clientId, clientSecret) {
  const data = username + clientId;
  return crypto
    .createHmac("sha256", clientSecret)
    .update(data)
    .digest("base64");
}
