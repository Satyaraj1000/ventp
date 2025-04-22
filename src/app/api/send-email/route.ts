import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      company,
      email,
      phone,
      product,
      quantity,
      requirements,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #333; max-width: 700px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h1 style="color: #0E9696; font-size: 28px; margin-bottom: 20px;">📩 New Product Enquiry</h1>
        <p style="font-size: 16px; margin-bottom: 24px;">You have received a new enquiry from your website:</p>
        <table style="width: 100%; font-size: 16px; border-collapse: collapse;">
          <tr><td style="padding: 10px; font-weight: bold;">👤 Name:</td><td style="padding: 10px;">${name}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">🏢 Company:</td><td style="padding: 10px;">${company || "—"}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">📧 Email:</td><td style="padding: 10px;">${email}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">📞 Phone:</td><td style="padding: 10px;">${phone}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">📦 Product:</td><td style="padding: 10px;">${product}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">🔢 Quantity:</td><td style="padding: 10px;">${quantity || "—"}</td></tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">📝 Requirements:</td>
            <td style="padding: 10px; white-space: pre-line;">${requirements || "—"}</td>
          </tr>
        </table>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
