"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  values?: {
    name: string;
    email: string;
    message: string;
  };
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // Simulated submission. In production, swap this out for a real
  // mail service (Resend, SES, SendGrid) or persist the lead to a CRM.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]} — we received your message and will reply within one business day.`,
    values: { name: "", email: "", message: "" },
  };
}
