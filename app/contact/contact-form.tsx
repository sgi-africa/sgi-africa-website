"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2Icon, Loader2Icon, SendIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { initialContactState, submitContact, type ContactState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="h-12 w-full bg-brand-gradient text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(0,212,255,0.55)] sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2Icon className="mr-1.5 size-4 animate-spin" />
          Sending…
        </>
      ) : (
        <>
          Send message
          <SendIcon className="ml-1.5 size-4" />
        </>
      )}
    </Button>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, error, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </Label>
      {children}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    initialContactState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-4 rounded-2xl border border-[#16a34a]/30 bg-[#16a34a]/5 p-6 sm:p-8"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#16a34a]/15 text-[#34d399]">
          <CheckCircle2Icon className="size-6" />
        </span>
        <div className="space-y-1.5">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Message received
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <Field
        label="Full name"
        htmlFor="contact-name"
        error={state.fieldErrors?.name}
      >
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
          required
          minLength={2}
          defaultValue={state.values?.name ?? ""}
          aria-invalid={Boolean(state.fieldErrors?.name) || undefined}
          className="h-11 text-base"
        />
      </Field>

      <Field
        label="Work email"
        htmlFor="contact-email"
        error={state.fieldErrors?.email}
      >
        <Input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="yourname@example.com"
          required
          defaultValue={state.values?.email ?? ""}
          aria-invalid={Boolean(state.fieldErrors?.email) || undefined}
          className="h-11 text-base"
        />
      </Field>

      <Field
        label="How can we help?"
        htmlFor="contact-message"
        error={state.fieldErrors?.message}
        hint="Tell us about your goal, organisation and rough timeline."
      >
        <Textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={6}
          defaultValue={state.values?.message ?? ""}
          aria-invalid={Boolean(state.fieldErrors?.message) || undefined}
          placeholder="We're an NGO working on financial inclusion in Mwanza and are looking for…"
          className={cn("min-h-32 text-base")}
        />
      </Field>

      <SubmitButton />
    </form>
  );
}
