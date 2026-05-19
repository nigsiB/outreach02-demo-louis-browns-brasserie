import { ContactForm } from "@/components/ContactForm";
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-lg px-6 py-14">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-sm opacity-70">Demo enquiry form.</p>
      <div className="mt-8"><ContactForm /></div>
    </main>
  );
}
