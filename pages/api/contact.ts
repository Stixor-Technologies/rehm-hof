import { NextApiRequest, NextApiResponse } from "next";
import sendgrid, { MailDataRequired } from "@sendgrid/mail";

import {
  SENDGRID_API_KEY,
  SENDGRID_EMAIL_FROM,
  SENDGRID_EMAIL_TO,
} from "@/utils/constants";

sendgrid.setApiKey(SENDGRID_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await req.body;
    const emailData: MailDataRequired = {
      to: SENDGRID_EMAIL_TO,
      from: SENDGRID_EMAIL_FROM as string,
      subject: data.subject,
      html: data.htmlContent,
    };
    const response = await sendgrid.send(emailData);
    res.end(JSON.stringify(response));
    return response;
  } catch (error) {
    res.json(error);
    return error;
  }
}
