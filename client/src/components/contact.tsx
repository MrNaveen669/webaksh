import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const info = [
  { icon: Mail,          label: "Email",    value: "contact@webaksh.com",   href: "mailto:contact@webaksh.com" },
  { icon: Phone,         label: "Phone",    value: "+91 70495 86798",        href: "tel:+917049586798" },
  { icon: MapPin,        label: "Location", value: "Sundar Nagar, Raipur",   href: null },
  { icon: Clock,         label: "Hours",    value: "Mon–Fri, 9 AM – 6 PM",  href: null },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: { firstName: "", lastName: "", email: "", company: "", service: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: (d: InsertContactSubmission) => apiRequest("POST", "/api/contact", d),
    onSuccess: () => {
      toast({ title: "Message received.", description: "We'll reply within 24 hours." });
      form.reset();
    },
    onError: (e: any) => toast({ title: "Error", description: e.message || "Something went wrong.", variant: "destructive" }),
  });

  return (
    <section id="contact" className="section-gap bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="orb w-[600px] h-[600px] bg-indigo-700 opacity-[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-pad relative z-10">
        {/* Section header — scaled down, business-focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="tag mb-4 inline-flex">Start a Project</span>
          <h2 className="text-display-md text-white mb-3">
            Let's build something<br />
            <span className="gradient-text">that works for you.</span>
          </h2>
          <p className="text-white/40 text-sm font-inter max-w-md leading-relaxed">
            Tell us about your project. We'll respond within 24 hours with honest thoughts, a realistic timeline, and a fixed price.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* LEFT — info + trust */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info */}
            <div className="space-y-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-white/7 flex-shrink-0">
                    <Icon size={13} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-label text-white/25 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/65 text-sm font-inter hover:text-white transition-colors">{value}</a>
                    ) : (
                      <p className="text-white/55 text-sm font-inter">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917049586798?text=Hi%20WebAksh%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass rounded-xl p-4 border border-white/7 glass-hover group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={15} className="text-[#4ade80]" />
              </div>
              <div>
                <p className="text-white/70 text-sm font-space">Chat on WhatsApp</p>
                <p className="text-white/28 text-xs font-inter">Typically replies in minutes</p>
              </div>
              <ArrowRight size={13} className="ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Why us — compact */}
            <div className="glass rounded-xl p-5 border border-white/7">
              <p className="text-label text-white/25 mb-4">Why teams work with us</p>
              <ul className="space-y-2.5">
                {[
                  "Fixed pricing, no surprise invoices",
                  "You work directly with the founders",
                  "Delivery in 4–8 weeks, not months",
                  "Ongoing support after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-white/45 font-inter">
                    <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/7">
              <Form {...form}>
                <form onSubmit={form.handleSubmit((d) => mutation.mutate(d))} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input {...field} placeholder="Raj" /></FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl><Input {...field} placeholder="Sharma" /></FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input {...field} type="email" placeholder="raj@company.com" /></FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (optional)</FormLabel>
                      <FormControl><Input {...field} placeholder="Your company or project name" /></FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you need?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="app">Mobile App</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                          <SelectItem value="marketing">Digital Marketing & SEO</SelectItem>
                          <SelectItem value="branding">Branding & Design</SelectItem>
                          <SelectItem value="social">Social Media Management</SelectItem>
                          <SelectItem value="automation">Business Automation</SelectItem>
                          <SelectItem value="other">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about your project</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} placeholder="What are you building? What's your timeline and budget?" />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn-primary w-full justify-center h-auto py-3.5 text-sm rounded-xl"
                    style={{ background: "#fff", color: "#07070f" }}
                  >
                    {mutation.isPending ? "Sending…" : "Send Message"}
                    <ArrowRight size={14} />
                  </Button>

                  <p className="text-white/22 text-xs font-inter text-center">
                    No commitment. We'll reply within 24 hours with honest thoughts.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
