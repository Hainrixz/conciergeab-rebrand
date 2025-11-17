"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";

const siteUrl = "https://conciergeathebay.com/";
const policyUrl = "https://conciergeathebay.com/politicas-de-privacidad";

const linkClass =
  "text-bronze underline-offset-4 hover:text-white hover:underline";

function SpanishPolicy() {
  return (
    <>
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand/60">
          Español
        </p>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-sand/80">
          <p className="font-semibold text-white">AVISO DE PRIVACIDAD</p>
          <p>
            SHORE CONTRACTORS S. DE R.L. DE C.V., mejor conocido como CONCIERGE AT
            THE BAY, con domicilio en calle ANDADOR LAS REDES 18, colonia CORRAL DEL
            RISCO, ciudad PUNTA DE MITA, municipio o delegación BAHIA DE BANDERAS,
            c.p. 65734, en la entidad de NAYARIT, país MEXICO, y portal de internet
            {" "}
            <Link className={linkClass} href={siteUrl} target="_blank" rel="noreferrer">
              {siteUrl}
            </Link>
            , es el responsable del uso y protección de sus datos personales, y al
            respecto le informamos lo siguiente:
          </p>
          <p>
            De manera adicional, utilizaremos su información personal para las
            siguientes finalidades secundarias que no son necesarias para el servicio
            solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-sand/70">
            <li>Información de nuestros servicios</li>
            <li>Mercadotecnia o publicitaria</li>
            <li>Prospección comercial</li>
          </ul>
          <p>
            En caso de que no desee que sus datos personales sean tratados para estos
            fines secundarios, desde este momento usted nos puede comunicar lo
            anterior a través del siguiente mecanismo:{" "}
            <Link className={linkClass} href={siteUrl} target="_blank" rel="noreferrer">
              {siteUrl}
            </Link>
            .
          </p>
          <p>( ) No acepto el uso de mis datos personales para fines secundarios.</p>
          <p>
            La negativa para el uso de sus datos personales para estas finalidades no
            podrá ser un motivo para que le neguemos los servicios y productos que
            solicita o contrata con nosotros.
          </p>
          <p>
            Para conocer mayor información sobre los términos y condiciones en que
            serán tratados sus datos personales, como los terceros con quienes
            compartimos su información personal y la forma en que podrá ejercer sus
            derechos ARCO, puede consultar el aviso de privacidad integral en:{" "}
            <Link
              className={linkClass}
              href={policyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {policyUrl}
            </Link>
            .
          </p>
        </div>
      </section>
      <div className="text-center text-xs uppercase tracking-[0.35em] text-sand/50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-white underline-offset-4 hover:text-bronze hover:underline"
        >
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

function EnglishPolicy() {
  return (
    <>
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand/60">
          English
        </p>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-sand/80">
          <p className="font-semibold text-white">PRIVACY NOTICE</p>
          <p>
            SHORE CONTRACTORS S. DE R.L. DE C.V., better known as CONCIERGE AT THE BAY,
            located at ANDADOR LAS REDES 18, CORRAL DEL RISCO, PUNTA DE MITA, BAHIA DE
            BANDERAS, 65734, NAYARIT, MEXICO, and online at {" "}
            <Link className={linkClass} href={siteUrl} target="_blank" rel="noreferrer">
              {siteUrl}
            </Link>
            , is responsible for the use and protection of your personal data and we
            inform you of the following:
          </p>
          <p>
            Additionally, we may use your personal information for the following
            secondary purposes that are not necessary for the requested service but
            enable us to offer better attention:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-sand/70">
            <li>Service information updates</li>
            <li>Marketing or advertising communications</li>
            <li>Commercial prospecting</li>
          </ul>
          <p>
            If you do not wish your personal data to be used for these secondary
            purposes, you can let us know through the following channel at any time:{" "}
            <Link className={linkClass} href={siteUrl} target="_blank" rel="noreferrer">
              {siteUrl}
            </Link>
            .
          </p>
          <p>( ) I do not consent to the secondary use of my personal data.</p>
          <p>
            Declining the use of your personal data for these purposes will never be a
            reason for us to deny the services or products you request or contract with
            us.
          </p>
          <p>
            To learn more about the terms and conditions under which your data will be
            processed, the third parties with whom we share information, and how you
            may exercise ARCO rights, please review the full privacy notice at:{" "}
            <Link
              className={linkClass}
              href={policyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {policyUrl}
            </Link>
            .
          </p>
        </div>
      </section>
      <div className="text-center text-xs uppercase tracking-[0.35em] text-sand/50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-white underline-offset-4 hover:text-bronze hover:underline"
        >
          Back to home
        </Link>
      </div>
    </>
  );
}

export function PrivacyContent() {
  const { locale } = useLocale();
  const isSpanish = locale === "es";

  return (
    <div className="lux-container space-y-10 py-24">
      <header className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-sand/60">
          {isSpanish ? "Privacidad y Cumplimiento" : "Privacy & Compliance"}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {isSpanish ? "Aviso de Privacidad" : "Privacy Notice"}
        </h1>
        <p className="text-base text-sand/70">
          {isSpanish
            ? "Este aviso describe cómo protegemos tus datos personales conforme a la legislación mexicana."
            : "This notice explains how we safeguard your personal information under Mexican privacy law."}
        </p>
      </header>
      {isSpanish ? <SpanishPolicy /> : <EnglishPolicy />}
    </div>
  );
}
