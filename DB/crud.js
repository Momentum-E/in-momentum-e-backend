import fs from "fs";

export function saveUsersToFile(users) {
  fs.writeFile(
    "./userDB.js",
    `const users = ${JSON.stringify(users, null, 2)} export default users;`,
    (err) => {
      if (err) {
        console.error("Error writing users to file:", err);
      } else {
        console.log("Users saved to file successfully");
      }
    }
  );
}
