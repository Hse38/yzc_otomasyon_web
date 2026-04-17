import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company-data";

export function WhatsAppButton() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden md:block">
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle />
        </a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-brand-900/95 p-3 md:hidden">
        <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="mx-1 rounded-full border border-white/25 py-2 text-center text-sm">
          <Phone size={16} className="mr-1 inline" />
          Ara
        </a>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mx-1 rounded-full bg-[#25D366] py-2 text-center text-sm font-semibold text-white"
        >
          <MessageCircle size={16} className="mr-1 inline" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
