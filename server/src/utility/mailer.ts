import nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter;

(async () => {
  const testAccount = await nodemailer.createTestAccount();

  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  console.log('Ethereal email account:');
  console.log(`Login: ${testAccount.user}`);
  console.log(`Password: ${testAccount.pass}`);
})();

export const sendMail = async (to: string, subject: string, html: string) => {
  const info = await transporter.sendMail({
    from: '"ToonStream" <no-reply@toonstream.com>',
    to,
    subject,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
