import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Service {
  n: string;
  title: string;
  short: string;
  body: string;
  deliverables: string[];
  tag: string;
}

const services: Service[] = [
  {
    n: "01",
    title: "Website Development",
    short: "Custom sites built to perform",
    body: "We design and engineer websites that are fast, conversion-focused, and genuinely represent your brand. Every detail — from page load speed to interaction feel — is considered. No templates, no shortcuts.",
    deliverables: ["Custom UI/UX Design", "Mobile-first responsive build", "SEO-optimized structure", "CMS integration", "Performance & Core Web Vitals"],
    tag: "Web",
  },
  {
    n: "02",
    title: "Mobile App Development",
    short: "Native Android & cross-platform",
    body: "We build mobile apps that users actually keep. Clean architecture, smooth interactions, and reliable performance. From fintech to government — we've shipped apps that work in the real world.",
    deliverables: ["Android / React Native", "Offline-first architecture", "Firebase / Push notifications", "App Store deployment", "Ongoing maintenance"],
    tag: "Mobile",
  },
  {
    n: "03",
    title: "E-Commerce Solutions",
    short: "Online stores built to sell",
    body: "A good e-commerce store is more than a product list. We build complete shopping experiences with smart product filters, frictionless checkout, and admin dashboards that make your life easier.",
    deliverables: ["Custom store design", "Payment gateway (Razorpay/Stripe)", "Inventory management", "Order tracking", "Abandoned cart & analytics"],
    tag: "E-Commerce",
  },
  {
    n: "04",
    title: "Digital Marketing & SEO",
    short: "Get found by the right people",
    body: "Being online isn't enough — you need to be discovered. We run data-driven SEO and ad campaigns, with a focus on local Raipur/CG businesses getting measurable results, not just traffic.",
    deliverables: ["Local SEO (Raipur/CG)", "Google Ads management", "Content strategy", "Monthly reporting", "Search Console & Analytics setup"],
    tag: "Marketing",
  },
  {
    n: "05",
    title: "Branding & Visual Identity",
    short: "Brands people remember",
    body: "We create identities that are distinctive and durable. Logo, type system, color palette, brand guidelines — everything you need to show up professionally across every touchpoint.",
    deliverables: ["Logo & mark design", "Typography & color system", "Brand guidelines", "Social media kit", "Business stationery"],
    tag: "Brand",
  },
  {
    n: "06",
    title: "Social Media Management",
    short: "Consistent presence, real engagement",
    body: "We handle your social presence so you don't have to think about it. Strategy, content creation, scheduling, and community management — done by people who understand both design and copy.",
    deliverables: ["Content strategy", "Post design & copywriting", "Scheduling & posting", "Community management", "Monthly performance review"],
    tag: "Social",
  },
  {
    n: "07",
    title: "Server & Cloud Management",
    short: "Reliable infrastructure, zero surprises",
    body: "We set up, secure, and maintain your hosting so it just works. From VPS configuration to automated backups and SSL — we make sure your product is online and performing at all times.",
    deliverables: ["VPS / cloud setup (AWS/DigitalOcean)", "SSL & domain config", "Nginx / Docker", "Automated backups", "Uptime monitoring"],
    tag: "DevOps",
  },
  {
    n: "08",
    title: "Business Automation",
    short: "Save time. Reduce errors. Scale.",
    body: "We build custom workflows and integrations that eliminate repetitive work. CRM automations, invoice systems, lead pipelines — if you're doing the same thing manually more than once a week, we can automate it.",
    deliverables: ["Workflow mapping & design", "API & webhook integrations", "CRM automations", "Custom dashboards", "Training & documentation"],
    tag: "Automation",
  },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-gap bg-[#07070f]">
      <div className="container-pad">
        {/* Header row — asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="tag mb-4 inline-flex">Services</span>
            <h2 className="text-display-md text-white">
              What we do<span className="gradient-text">.</span>
            </h2>
          </div>
          <p className="text-white/38 text-sm font-inter leading-relaxed max-w-xs md:text-right">
            Eight disciplines. One team that cares about the outcome.
          </p>
        </div>

        {/* Accordion list */}
        <div className="line-rule" />
        {services.map((s) => {
          const isOpen = open === s.n;
          return (
            <div key={s.n}>
              <button
                onClick={() => setOpen(isOpen ? null : s.n)}
                className="w-full group"
              >
                <div className="flex items-center py-5 md:py-6 gap-5 md:gap-8">
                  {/* Number */}
                  <span className="text-label text-white/20 w-7 flex-shrink-0 text-left">{s.n}</span>

                  {/* Title */}
                  <span className="flex-1 text-left">
                    <span
                      className="font-syne font-700 text-xl md:text-2xl text-white/85 group-hover:text-white transition-colors duration-200 tracking-tight"
                    >
                      {s.title}
                    </span>
                    <span className="hidden md:inline text-white/28 text-sm font-inter ml-5">
                      {s.short}
                    </span>
                  </span>

                  {/* Tag — desktop */}
                  <span className="hidden md:block tag flex-shrink-0">{s.tag}</span>

                  {/* Toggle */}
                  <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border border-white/10 text-white/40 group-hover:border-white/25 group-hover:text-white/70 transition-all duration-200">
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 md:pl-16 grid md:grid-cols-3 gap-8">
                      {/* Description */}
                      <div className="md:col-span-2">
                        <p className="text-white/55 text-sm leading-relaxed mb-6 font-inter">
                          {s.body}
                        </p>
                        <button
                          onClick={() => go("contact")}
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          Get a Free Consultation
                        </button>
                      </div>
                      {/* Deliverables */}
                      <div>
                        <p className="text-label text-white/25 mb-3">What you get</p>
                        <ul className="space-y-2">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-sm text-white/50 font-inter">
                              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="line-rule" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
