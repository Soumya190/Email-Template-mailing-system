// import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// const{SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("API_KEY:", process.env.SENDGRID_API_KEY);
console.log("FROM:", process.env.FROM_EMAIL);
console.log("TO:", process.env.TO_EMAIL);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const msg = {
            to: process.env.TO_EMAIL,
            from: process.env.FROM_EMAIL,
            subject: `New message from ${name}`,
            // text: message,
            html: `<p>You have a new message from ${name} (${email}):</p>`
        }
        await sgMail.send(msg);
        return Response.json({success:true, status: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({success:false, status:error.message,error:error.response?.body }, { status: 500 });
    }
}