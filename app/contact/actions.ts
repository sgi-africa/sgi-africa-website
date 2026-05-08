"use server";

import { Resend } from "resend";

import { siteConfig } from "@/components/site/nav-config";

import type { ContactState } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (message.length < 10)
    fieldErrors.message = "Tell us a little more (at least 10 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
      values: { name, email, message },
    };
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return {
      status: "error",
      message:
        "We couldn’t send your message right now. Please email us directly or try again later.",
      values: { name, email, message },
    };
  }

  const from = process.env.RESEND_FROM?.trim();
  if (!from) {
    console.error("[contact] RESEND_FROM is not set.");
    return {
      status: "error",
      message:
        "Email delivery is not configured. Please contact us by email directly.",
      values: { name, email, message },
    };
  }

  const toRaw = process.env.RESEND_TO?.trim() ?? siteConfig.email;
  const to = toRaw
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
  if (to.length === 0) {
    console.error("[contact] No recipient (RESEND_TO / siteConfig.email).");
    return {
      status: "error",
      message:
        "We couldn’t send your message right now. Please email us directly.",
      values: { name, email, message },
    };
  }

  const subject = `[${siteConfig.shortName} Contact] ${name}`;
  const text = [
    `New message from the ${siteConfig.name} website contact form.`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email ? [email] : undefined,
      subject,
      text,
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return {
        status: "error",
        message:
          "We couldn’t send your message. Please try again in a moment or email us directly.",
        values: { name, email, message },
      };
    }
  } catch (e) {
    console.error("[contact] send failed:", e);
    return {
      status: "error",
      message:
        "We couldn’t send your message. Please try again in a moment or email us directly.",
      values: { name, email, message },
    };
  }

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]} - we received your message and will reply within one business day.`,
    values: { name: "", email: "", message: "" },
  };
}
