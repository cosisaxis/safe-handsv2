import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();


const blocklist = ["instagram.com", "facebook.com", "twitter.com"]; 

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    const url = new URL(tab.url);
    const hostname = url.hostname;
    if (blocklist.includes(hostname)) {
      sendNotification();
    }
  }
});

function sendNotification() {
  const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
  const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);

  const phoneNumber = "8768672788";
  const message = "Red alert";

  client.messages
    .create({
      body: message,
      from: "YOUR_TWILIO_PHONE_NUMBER",
      to: phoneNumber
    })
    .then(message => console.log("Notification sent!"))
    .catch(error => console.error(error));
}
