import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const linkGroupClasses =
    "flex flex-col lg:px-4 2xl:px-5 text-base lg:text-sm xl:text-lg  xl:leading-[2.125rem]";

  const containerClasses =
    "flex flex-col justify-between gap-5 lg:flex-row lg:gap-0";

  const link = (href: string, text: string, needUppercase: boolean = false) => (
    <Link
      href={href}
      className={`${needUppercase && "uppercase"} transition-all duration-300 hover:text-primary`}
    >
      {text}
    </Link>
  );

  const info = (text: string, needUppercase: boolean = false) => (
    <h2 className={`${needUppercase && "uppercase"}`}>{text}</h2>
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
    <div className="w-full bg-bone p-4 pt-10 sm:p-10 xl:min-h-[34.688rem] xl:pb-[6.238rem] xl:pt-[6.25rem] 2xl:px-36 3xl:px-[11.25rem]">
      <div className="grid gap-10 text-secondary md:grid-cols-2 md:gap-5 xl:gap-10">
        <div className="flex flex-col gap-y-5 xl:gap-y-28 4xl:gap-y-32">
          <div className={containerClasses}>
            <Image
              src={"/assets/images/logo.svg"}
              alt="Rehm Logo"
              width={160}
              height={79.74}
              className="max-h-[4.984rem]"
            />

            <div
              className={`${linkGroupClasses} gap-0 md:h-[9.813rem] md:w-[22.25rem] xl:me-11`}
            >
              {info("BAUHERR", true)}
              {info("Grundstücksgesellschaft Rehmstraße")}
              {info("mbH & Co. KG")}
              {info("Magdalenenstraße 40")}
              {info("20148 Hamburg")}
            </div>
          </div>

          {paragraph(
            "HINWEIS: Der Maklervertrag mit uns kommt entweder durch schriftliche Vereinbarung oder durch die Inanspruchnahme unserer Maklertätigkeit auf der Basis dieses Objekt-Exposés und seiner Bedingungen zustande. Die mit dem Abschluss eines Kaufvertrages entstehenden Kosten, Steuern undAbgaben (Notariatsgebühren, Grunderwerbssteuer, Gerichtskosten) sowie etwaige Finanzierungskosten sind vom",
            "xl:h-[4.375rem]",
          )}
        </div>

        <div className="flex flex-col space-y-5 md:space-y-10 xl:space-y-10 4xl:space-y-[3.875rem]">
          <div className={containerClasses}>
            <Image
              src={"/assets/images/hyest-logo.svg"}
              alt="Hyest Logo"
              width={160.15}
              height={58.82}
              className="max-h-[3.676rem]"
            />

            <div className={`${linkGroupClasses} md:w-[22.5rem]`}>
              {info("VERTRIEB", true)}
              {info("HYEST Real Estate GmbH")}
              {info("Jungfernstieg 50")}
              {info("20354 Hamburg")}

              <div className={`${linkGroupClasses} !px-0 pt-[1.313rem]`}>
                {info("T 040/34 63 40")}
                {info("E verkauf@hyest.de")}
              </div>
            </div>

            <div className={linkGroupClasses}>
              {link("/datenschutz", "DATENSCHUTZ", true)}
              {link("/impressum", "IMPRESSUM", true)}
            </div>
          </div>

          {paragraph(
            "Käufer zu tragen. Die Courtage, die jeweils von Käufer und Verkäufer in gleicher Höhe von 2,68 % inkl. gesetzl. MwSt. auf den Kaufpreis an die HYEST Real Estate GmbH zu zahlen ist, ist bei notariellem Vertragsabschluss fällig.",
            "xl:h-[3.25rem]",
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
