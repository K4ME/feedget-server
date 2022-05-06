import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "769325cc773377",
    pass: "60a986c7192b7f"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body }: SendMailData){
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Guilherme Macrini <guilhermegodencio@gmail.com>",
    subject,
    html: body
  });
  }
}