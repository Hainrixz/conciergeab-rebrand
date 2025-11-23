"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/locale/LocaleProvider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { ArrowUpRight, Sparkles, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

export function ServicesPageContent() {
  const { dictionary } = useLocale();
  const servicesPage = dictionary.services.page;

  return (
    <div className="bg-sand text-earth-dark">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-earth-dark text-white">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=80"
            alt="Luxury Services in Punta Mita"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="noise-overlay opacity-20" />
        </div>

        <div className="lux-container relative z-10 flex h-full flex-col justify-end pb-24 pt-30 md:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-8"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                <Sparkles size={14} />
                {servicesPage.heroEyebrow}
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <AnimatedText
                text={servicesPage.heroHeading}
                className="text-balance text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
              />
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg font-light leading-relaxed text-white/80 sm:text-xl"
            >
              {servicesPage.heroDescription}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="#contact"
                variant="primary"
                className="bg-white !text-earth-dark hover:bg-bronze hover:!text-white border-none"
                icon={<ArrowUpRight size={20} />}
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollToId("contact", 120);
                }}
              >
                {servicesPage.heroCta}
              </MagneticButton>

              <p className="text-xs uppercase tracking-[0.2em] text-white/60 max-w-xs">
                {servicesPage.heroNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="space-y-24 pt-24 pb-32 sm:pt-32">
        {servicesPage.categories.map((category) => (
          <section key={category.id} className="relative">
            <div className="lux-container">
              <div className="mb-16 max-w-2xl space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-bronze">
                  {category.title}
                </h2>
                <p className="text-3xl font-light text-earth-dark sm:text-4xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.items.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative flex flex-col justify-between gap-4 overflow-hidden rounded-[24px] border border-white/40 bg-white/40 p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] sm:p-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.65rem] font-bold text-earth/30 sm:text-xs">
                          {`${index + 1}`.padStart(2, "0")}
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-earth/10 bg-transparent text-earth/30 transition-all group-hover:border-earth/30 group-hover:text-earth sm:h-8 sm:w-8">
                          <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                        </span>
                      </div>

                      <div>
                        <h3 className="mb-1 text-base font-medium text-earth-dark sm:mb-2 sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-bronze/80 sm:text-xs">
                          {item.summary}
                        </p>
                      </div>

                      <p className="text-xs leading-relaxed text-earth/70 sm:text-sm">
                        {item.details}
                      </p>
                    </div>

                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Dining Section */}
      <section className="relative overflow-hidden bg-earth-dark py-32 text-sand">
        <div className="absolute inset-0 opacity-20">
          <div className="noise-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
        </div>

        <div className="lux-container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sand/80 backdrop-blur-sm">
                <UtensilsCrossed size={14} />
                {servicesPage.dining.title}
              </div>

              <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl">
                {servicesPage.dining.description}
              </h2>
            </div>

            <div className="grid gap-12 sm:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bronze">
                  {servicesPage.dining.essentialsTitle}
                </h3>
                <ul className="space-y-4">
                  {servicesPage.dining.essentials.map((spot) => (
                    <li key={spot.name} className="flex items-center gap-3 text-lg font-light text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                      <a
                        href={spot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-bronze hover:underline"
                      >
                        {spot.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bronze">
                  {servicesPage.dining.alsoTitle}
                </h3>
                <ul className="space-y-4">
                  {servicesPage.dining.alsoList.map((spot) => (
                    <li key={spot.name} className="flex items-center gap-3 text-lg font-light text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <a
                        href={spot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white hover:underline"
                      >
                        {spot.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
