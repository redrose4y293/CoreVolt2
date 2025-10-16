import Link from "next/link";
import { LinkButton } from "@/components/Button";

export default function ContactPage() {
  const formAction = "https://formspree.io/f/mgvnzqdp";
  return (
    <div className="py-10 space-y-10">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-foreground/80 max-w-[70ch]">We'd love to hear from you. Submit the form and our team will get back to you.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <form action={formAction} method="POST" className="space-y-4 rounded-lg border border-foreground/15 p-6 bg-black/5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-foreground/20 bg-transparent p-2 outline-none focus:border-[var(--grid-teal)]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-foreground/20 bg-transparent p-2 outline-none focus:border-[var(--grid-teal)]" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input id="subject" name="subject" type="text" className="mt-1 w-full rounded-md border border-foreground/20 bg-transparent p-2 outline-none focus:border-[var(--grid-teal)]" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-foreground/20 bg-transparent p-2 outline-none focus:border-[var(--grid-teal)]" />
          </div>
          <input type="hidden" name="_subject" value="New inquiry via corevolt.energy" />
          <input type="hidden" name="_gotcha" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[var(--grid-teal)] px-4 py-2 text-white hover:opacity-90 transition">Send Message</button>
        </form>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Other ways to reach us</h2>
          <div className="space-y-2">
            <p className="text-foreground/80">Email: hello@corevolt.energy</p>
            <p className="text-foreground/80">Government: gov@corevolt.energy</p>
            <p className="text-foreground/80">Investors: invest@corevolt.energy</p>
            <p className="text-foreground/80">Research: research@corevolt.energy</p>
          </div>
          <div className="pt-2">
            <LinkButton href="/" variant="secondary">Back to Home</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}


