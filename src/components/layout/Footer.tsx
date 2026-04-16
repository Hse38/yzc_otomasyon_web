import { useTranslations } from "next-intl";
import { COMPANY } from "@/lib/company-data";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="container-layout flex flex-col gap-4 text-sm text-gray-200 md:flex-row md:justify-between">
        <p>{COMPANY.name}</p>
        <p>
          © {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
