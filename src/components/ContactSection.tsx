"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company-data";

type ContactFormValues = {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export function ContactSection() {
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    setSending(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setSending(false);
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-brand-900/35">
      <div className="container-layout grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Projeniz icin hemen iletisime gecin.</h2>
          <div className="mt-6 space-y-4 text-sm text-white/85">
            <p className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> {COMPANY.phone}</p>
            <p className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> {COMPANY.email.main}</p>
            <p className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> {COMPANY.email.corlu}</p>
            {COMPANY.offices.map((office) => (
              <p key={office.label} className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> {office.address}</p>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-panel border border-white/10 bg-brand-900/60 p-6">
          <div className="grid gap-3">
            <input {...register("name", { required: true })} placeholder="Ad Soyad" className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" />
            <input {...register("company")} placeholder="Firma Adi (opsiyonel)" className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" />
            <input {...register("phone", { required: true })} placeholder="Telefon" className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" />
            <input {...register("email", { required: true })} placeholder="E-posta" className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" />
            <select {...register("service")} className="rounded-lg border border-white/15 bg-brand-900 px-4 py-3 text-sm">
              <option>Hangi Urun/Hizmet?</option>
              <option>Endustriyel Otomasyon</option>
              <option>Yerli Uretim Sensorler</option>
              <option>GEFRAN</option>
              <option>ELCO AUTOMATION</option>
            </select>
            <textarea {...register("message", { required: true })} placeholder="Mesajiniz" rows={5} className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" />
          </div>
          <button type="submit" disabled={sending} className="mt-4 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white">
            {sending ? "Gonderiliyor..." : "Gonder -"}
          </button>
        </form>
      </div>
    </section>
  );
}
