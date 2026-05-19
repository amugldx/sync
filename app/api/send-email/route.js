import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();
    const formType = formData.formType || 'Form Submission';

    console.log('--- New Submission Received ---');
    console.log('Type:', formType);
    console.log('Data:', JSON.stringify(formData, null, 2));
    console.log('-------------------------------');

    let emailContent = `<h3>New ${formType}</h3><table border="1" cellpadding="10" style="border-collapse: collapse;">`;
    for (const [key, value] of Object.entries(formData)) {
      if (key !== 'formType') {
        emailContent += `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`;
      }
    }
    emailContent += `</table>`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.privateemail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Lead: ${formType} from ${formData.name || formData.fullName || 'User'}`,
      html: emailContent,
    };

    // Send notification to admin
    await transporter.sendMail(mailOptions);
    console.log('Lead notification sent successfully');

    // Send Auto-Reply to the User
    if (formData.email) {
      const userName = formData.name || formData.fullName || 'there';
      const timeString = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      const autoReplyOptions = {
        from: `"Team Synchroyst" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        subject: `We received your request, ${userName} - Synchroyst (${timeString})`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f4f7f9; padding: 40px 20px; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #0b1020; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
                  <!-- Header -->
                  <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 40px 20px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 900; letter-spacing: -1px;">Synchroyst</h1>
                      <p style="margin: 10px 0 0; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500;">Enterprise-Grade Growth Systems</p>
                  </div>

                  <!-- Body -->
                  <div style="padding: 40px 30px; background-color: #161b2c;">
                      <h2 style="color: #ffffff; font-size: 20px; font-weight: 700; margin-top: 0;">Hi ${userName},</h2>
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin-top: 20px;">
                          ${
                            formType === 'Strategy Call Request'
                              ? `Thank you for reaching out to <strong>Synchroyst</strong>. We have received your <strong>strategy call request</strong> for the slot: <strong>${
                                  formData.appointment_slot || 'N/A'
                                }</strong>.`
                              : `Thank you for reaching out to <strong>Synchroyst</strong>! We have received your request and our team will get back to you <strong>within 24 hours</strong>.`
                          }
                      </p>
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin-top: 20px;">
                          We're excited to help you grow your business and look forward to connecting with you soon.
                      </p>
                      
                      <div style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                          <p style="margin: 0; color: #94a3b8; font-size: 14px;">Warm regards,</p>
                          <p style="margin: 5px 0 0; color: #6366f1; font-size: 16px; font-weight: 700;">Team Synchroyst</p>
                      </div>
                  </div>

                  <!-- Footer -->
                  <div style="padding: 20px; text-align: center; background-color: #0b1020;">
                      <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                          If you have any query, you can contact us at 
                          <a href="https://api.whatsapp.com/send/?phone=923105198020" style="color: #6366f1; text-decoration: none; font-weight: 700;">WhatsApp: +92 310 5198020</a>
                      </p>
                  </div>
              </div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(autoReplyOptions);
        console.log('Auto-reply sent successfully');
      } catch (autoErr) {
        console.log('Auto-reply error:', autoErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.log('Error processing email route:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
