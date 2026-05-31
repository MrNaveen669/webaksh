import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Service {
  n: string;
  title: string;
  short: string;
  body: string;
  helps: string;
  outcomes: string[];
  deliverables: string[];
  tag: string;
}

const services: Service[] = [
  {
    n: "01",
    title: "Website Development",
    short: "Custom sites built to perform",
    body: "We design and build websites that are fast, mobile-first, and conversion-focused. Not templates — real custom builds that represent your brand honestly and rank on search engines.",
    helps: "Startups, local businesses, service companies wanting a professional online presence",
    outcomes: ["Attract more customers through organic search", "Convert visitors into leads or sales", "Build brand credibility instantly"],
    deliverables: ["Custom UI/UX design", "Mobile-first responsive build", "SEO-optimised structure", "CMS (content management)", "Performance & Core Web Vitals"],
    tag: "Web",
  },
  {
    n: "02",
    title: "Mobile App Development",
    short: "Android & cross-platform apps",
    body: "We build mobile apps that users actually keep installed. Clean architecture, smooth interactions, reliable performance — whether it's a customer-facing app, a field tool, or an internal system.",
    helps: "Businesses needing customer apps, field employee tools, or government/enterprise solutions",
    outcomes: ["Extend your service to mobile users", "Streamline field operations", "Improve customer engagement"],
    deliverables: ["Android / React Native", "Offline-first architecture", "Firebase & push notifications", "App Store deployment", "Ongoing maintenance"],
    tag: "Mobile",
  },
  {
    n: "03",
    title: "E-Commerce Solutions",
    short: "Online stores built to sell",
    body: "A good online store is more than a product list. We build complete shopping experiences with smart filters, frictionless checkout flows, and admin dashboards that make daily operations easy.",
    helps: "Retailers, boutique owners, manufacturers wanting to sell directly online",
    outcomes: ["Launch a new revenue channel online", "Reduce abandoned cart rates", "Scale without additional staff"],
    deliverables: ["Custom store design", "Payment gateway (Razorpay/Stripe)", "Inventory management", "Order tracking", "Analytics dashboard"],
    tag: "E-Commerce",
  },
  {
    n: "04",
    title: "Digital Marketing & SEO",
    short: "Get found by the right people",
    body: "Being online isn't enough — you need to be found. We run data-driven SEO campaigns and Google Ads with a focus on local Raipur/CG businesses getting measurable results, not just traffic vanity metrics.",
    helps: "Any business wanting more customers from Google search and ads",
    outcomes: ["Rank on first page for target keywords", "Reduce cost per lead over time", "Grow organic traffic month-on-month"],
    deliverables: ["Local SEO (Raipur/CG focus)", "Google Ads management", "Content strategy", "Search Console & Analytics setup", "Monthly performance reports"],
    tag: "Marketing",
  },
  {
    n: "05",
    title: "Branding & Visual Identity",
    short: "A brand people remember",
    body: "We create identities that are distinctive and durable. Logo, type system, colour palette, brand guidelines — everything you need to show up professionally across every touchpoint.",
    helps: "New businesses, rebranding companies, or anyone tired of looking inconsistent",
    outcomes: ["Stand out from competitors visually", "Build instant trust with new customers", "Create a consistent brand experience"],
    deliverables: ["Logo & mark design", "Typography & colour system", "Brand guidelines document", "Social media kit", "Business stationery"],
    tag: "Branding",
  },
  {
    n: "06",
    title: "Social Media Management",
    short: "Consistent presence, real engagement",
    body: "We handle your social presence so you can focus on the business. Strategy, content design, scheduling, and community management — by people who understand both design and copywriting.",
    helps: "Businesses wanting an active social presence without hiring a full-time person",
    outcomes: ["Build a consistent, professional brand online", "Grow follower count and engagement", "Convert social audiences into customers"],
    deliverables: ["Content strategy", "Post design & copywriting", "Scheduling & publishing", "Community management", "Monthly performance review"],
    tag: "Social",
  },
  {
    n: "07",
    title: "Server & Cloud Management",
    short: "Reliable infrastructure, zero surprises",
    body: "We set up, secure, and maintain your hosting so you never have to think about it. From VPS configuration to automated backups and SSL — your product stays online and performing.",
    helps: "Any team needing reliable hosting setup or ongoing server maintenance",
    outcomes: ["99.9% uptime for your product", "Automatic backups so nothing gets lost", "Fast server response times globally"],
    deliverables: ["VPS / cloud setup (AWS / DigitalOcean)", "SSL & domain configuration", "Nginx / Docker setup", "Automated backups", "Uptime monitoring"],
    tag: "DevOps",
  },
  {
    n: "08",
    title: "Business Automation",
    short: "Save time. Reduce errors. Scale.",
    body: "We build workflows and integrations that eliminate repetitive manual work. CRM automations, invoice systems, lead pipelines — if you're doing something manually more than twice a week, we can automate it.",
    helps: "Operations-heavy businesses, service companies, sales teams",
    outcomes: ["Save 10+ hours per week on manual tasks", "Eliminate human errors in repetitive processes", "Scale operations without hiring more staff"],
    deliverables: ["Workflow mapping & design", "API & webhook integrations", "CRM automations", "Custom dashboards", "Training & documentation"],
    tag: "Automation",
  },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-gap bg-[#07070f]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <span className="tag mb-4 inline-flex">Services</span>
            <h2 className="text-display-md text-white">
              What we build<span className="gradient-text">.</span>
            </h2>
          </div>
          <p className="text-white/35 text-sm font-inter leading-relaxed max-w-xs">
            Eight disciplines. Click any service to see what's included, who it helps, and what to expect.
          </p>
        </div>

        {/* Accordion list */}
        <div className="line-rule" />
        {services.map((s) => {
          const isOpen = open === s.n;
          return (
            <div key={s.n}>
              <button onClick={() => setOpen(isOpen ? null : s.n)} className="w-full group">
                <div className="flex items-center py-5 gap-5 md:gap-8">
                  <span className="text-label text-white/20 w-7 flex-shrink-0 text-left">{s.n}</span>
                  <span className="flex-1 text-left">
                    <span className="font-syne font-700 text-lg md:text-xl text-white/82 group-hover:text-white transition-colors duration-200 tracking-tight">
                      {s.title}
                    </span>
                    <span className="hidden md:inline text-white/25 text-sm font-inter ml-4">{s.short}</span>
                  </span>
                  <span className="hidden md:block tag flex-shrink-0">{s.tag}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-white/10 text-white/38 group-hover:border-white/25 group-hover:text-white/65 transition-all duration-200">
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 md:pl-16 grid md:grid-cols-3 gap-6 md:gap-8">
                      {/* Description + who it helps */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-white/52 text-sm leading-relaxed font-inter">{s.body}</p>
                        <div className="glass rounded-xl p-4 border border-white/6">
                          <p className="text-label text-white/22 mb-1.5">Who this is for</p>
                          <p className="text-white/45 text-xs font-inter leading-relaxed">{s.helps}</p>
                        </div>
                        <div>
                          <p className="text-label text-white/22 mb-2">Expected outcomes</p>
                          <ul className="space-y-1.5">
                            {s.outcomes.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-xs text-white/45 font-inter">
                                <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button onClick={() => go("contact")} className="btn-primary text-sm py-2.5 px-5 mt-2">
                          Get a Free Consultation
                        </button>
                      </div>
                      {/* Deliverables */}
                      <div>
                        <p className="text-label text-white/22 mb-3">What you get</p>
                        <ul className="space-y-2">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-xs text-white/48 font-inter">
                              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
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
