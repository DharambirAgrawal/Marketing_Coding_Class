'use server'
import { sendEmail } from "./emailService"
export async function sendFormData(formData:any){
    console.log(formData)
    const message = {
        subject: `New Enrollment for Summer class`,
        html: `
          <h3>New Student Enrollment</h3>
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Class Selected:</strong> ${formData.className}</p>
        `,
      };
 const res=   await sendEmail('agarwaldharambir@gmail.com',message)
 if(res.success){
     return res
 }
    else{
        return {
            success:false,
            message:"Error sending email"
        }
    }
} 