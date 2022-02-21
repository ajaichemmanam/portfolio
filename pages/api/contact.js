import { SMTPClient } from "emailjs";
import process from "process";
export default async function handler(req, res) {
  console.log("contact_req", req.body);
  console.log("process.env", process.env);
  if (req.method === "POST") {
    const client = new SMTPClient({
      user: process.env.FROM_EMAIL_USERNAME,
      password: process.env.FROM_EMAIL_PASSWORD,
      host: process.env.FROM_EMAIL_HOST,
      ssl: true,
    });
    try {
      // client.send({
      await client.sendAsync({
        text: JSON.stringify(req.body),
        from: process.env.FROM_EMAIL_USERNAME,
        to: process.env.TO_EMAIL_USERNAME,
        subject: "Contact Message from Portfolio",
      });
    } catch (e) {
      console.log("Error sending mail in contact api", e);
      res.status(400).end(JSON.stringify({ message: "Error" }));
      return;
    }
    console.log("response contact api: mail sent");
    res.status(200).end(JSON.stringify({ message: "Mail Sent" }));
  } else {
    console.log("response contact api: method not allowed");
    res.status(400).end(JSON.stringify({ message: "Method Not Allowed" }));
  }
}
