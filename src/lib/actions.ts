"use server";
import { sendEmail } from "./emailService";
import { AUTHOR_EMAIL,AUTHOR_EMAIL2 } from "@/lib/data";

export async function sendFormData(formData: any) {
  const message = {
    subject: `New Enrollment for Summer Class`,
    html: `
          <div style="font-family: 'Arial', sans-serif; background-color: #f7f9fc; padding: 20px; border-radius: 8px; width: 100%; max-width: 600px; margin: auto;">
            <div style="background-color: #4c6ef5; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="font-size: 24px; margin: 0;">New Student Enrollment</h2>
              <p style="font-size: 16px; margin: 0;">Summer Coding Classes</p>
            </div>
      
            <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #333; line-height: 1.5; margin-bottom: 10px;">
                <strong style="color: #4c6ef5;">Full Name:</strong> ${formData.name}
              </p>
      
              <p style="font-size: 16px; color: #333; line-height: 1.5; margin-bottom: 10px;">
                <strong style="color: #4c6ef5;">Email:</strong> ${formData.email}
              </p>
      
              <p style="font-size: 16px; color: #333; line-height: 1.5; margin-bottom: 10px;">
                <strong style="color: #4c6ef5;">Phone:</strong> ${formData.phone}
              </p>
      
              <p style="font-size: 16px; color: #333; line-height: 1.5; margin-bottom: 10px;">
                <strong style="color: #4c6ef5;">Class Selected:</strong> ${formData.className}
              </p>
      
              <div style="margin-top: 20px; padding: 10px 20px; background-color: #f4f5f7; border-radius: 4px; text-align: center;">
                <p style="font-size: 14px; color: #888;">Thank you for registering with us! Our team will contact you soon.</p>
              </div>
            </div>
          </div>
        `,
  };

  const res = await sendEmail(AUTHOR_EMAIL, message);
  const res2 = await sendEmail(AUTHOR_EMAIL2, message);
  const res3 = await sendEmail(formData.email, message);

  if (res.success || res2.success || res3.success) {
    return res;
  } else {
    return {
      success: false,
      message: "Error sending email",
    };
  }
}
