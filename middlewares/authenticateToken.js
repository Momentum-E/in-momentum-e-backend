import { CognitoJwtVerifier }  from "aws-jwt-verify";
import { config as configDotenv } from "dotenv";
configDotenv();

const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.COGNITO_USERPOOL_ID,
  tokenUse: "id",
  clientId: process.env.COGNITO_CLIENT_ID,
});

export default async function authenticateToken(req, res, next) {
  try {
    const idToken = req.cookies.idToken;
    console.log(idToken);

    if (!idToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token is missing" });
    }

    const payload = await verifier.verify(idToken);
    // console.log(payload);
    // // If you need to access user data in route handlers, attach it to the request
    req.body.authUserId = payload.sub; //sub is userId

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error.message);

    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
}