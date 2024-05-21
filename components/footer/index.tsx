import React from "react";
import logo from "@/public/assets/images/logo.svg";
import hyestLogo from "@/public/assets/images/hyest-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const linkGroupClasses = "flex flex-col px-5 text-lg leading-[2.125rem]";

  const link = (href: string, text: string, needUppercase: boolean = false) => (
    <Link href={href} className={`${needUppercase && "uppercase"}`}>
      {text}
    </Link>
  );
  const paragraph = (text: string, className: string = "") => (
    <p
      className={`text-sm leading-[1.125rem] ${className}`}
      style={{ letterSpacing: "0.018rem" }}
    >
      {text}
    </p>
  );

  return (
    <div className="min-h-[34.688rem] w-full px-[11.25rem] pb-[6.238rem] pt-[6.25rem] 2xl:bg-bone">
      <div className="grid grid-cols-2 gap-10 text-secondary">
        <div className="flex flex-col gap-y-32">
          <div className="flex justify-between">
            <Image
              src={logo}
              alt="Rehm Logo"
              width={160}
              height={79.74}
              className="max-h-[4.984rem]"
            />

            <div
              className={`${linkGroupClasses} me-11 h-[9.813rem] w-[22.25rem] gap-0`}
            >
              {link("/", "BAUHERR", true)}
              {link("/", "Grundstücksgesellschaft Rehmstraße")}
              {link("/", "mbH & Co. KG")}
              {link("/", "Magdalenenstraße 40")}
              {link("/", "20148 Hamburg")}
            </div>
          </div>

          {paragraph(
            "HINWEIS: Der Maklervertrag mit uns kommt entweder durch schriftliche Vereinbarung oder durch die Inanspruchnahme unserer Maklertätigkeit auf der Basis dieses Objekt-Exposés und seiner Bedingungen zustande. Die mit dem Abschluss eines Kaufvertrages entstehenden Kosten, Steuern undAbgaben (Notariatsgebühren, Grunderwerbssteuer, Gerichtskosten) sowie etwaige Finanzierungskosten sind vom",
            "h-[4.375rem]",
          )}
        </div>

        <div className="flex flex-col space-y-[3.875rem]">
          <div className="flex justify-between">
            <Image
              src={hyestLogo}
              alt="Hyest Logo"
              width={160.15}
              height={58.82}
              className="max-h-[3.676rem]"
            />

            <div className={`${linkGroupClasses} w-[22.5rem]`}>
              {link("/", "VERTRIEB", true)}
              {link("/", "HYEST Real Estate GmbH")}
              {link("/", "Jungfernstieg 50")}
              {link("/", "20354 Hamburg")}

              <div className={`${linkGroupClasses} !px-0 pt-[1.313rem]`}>
                {link("/", "T 040/34 63 40")}
                {link("/", "E verkauf@hyest.de")}
              </div>
            </div>

            <div className={linkGroupClasses}>
              {link("/", "DATENSCHUTZ", true)}
              {link("/", "IMPRESSUM", true)}
            </div>
          </div>

          {paragraph(
            "Käufer zu tragen. Die Courtage, die jeweils von Käufer und Verkäufer in gleicher Höhe von 2,68 % inkl. gesetzl. MwSt. auf den Kaufpreis an die HYEST Real Estate GmbH zu zahlen ist, ist bei notariellem Vertragsabschluss fällig.",
            "h-[3.25rem]",
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
