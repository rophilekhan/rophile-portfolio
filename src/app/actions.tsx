"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Resend initialization
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validations
  if (!validateString(senderEmail, 500)) return { error: "Invalid email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };
  if (!validateString(senderName, 100)) return { error: "Invalid name" };

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "rophile.khan@gmail.com", // Aapka verified email
      subject: `Project Inquiry: ${senderName}`,
      replyTo: senderEmail as string, // Direct reply capability
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
}