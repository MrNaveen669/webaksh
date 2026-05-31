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
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email", value: "contact@webaksh.com", sub: "We reply within 24 hours", gradient: "from-blue-500 to-indigo-600", href: "mailto:contact@webaksh.com" },
  { icon: Phone, title: "Phone", value: "+91 70495 86798", sub: "Mon–Fri, 9AM to 6PM", gradient: "from-green-500 to-emerald-600", href: "tel:+917049586798" },
  { icon: MapPin, title: "Location", value: "Sundar Nagar, Raipur", sub: "Chhattisgarh, India 492001", gradient: "from-purple-500 to-violet-600", href: "https://maps.google.com/?q=Raipur,Chhattisgarh" },
  { icon: Clock, title: "Response Time", value: "Within 24 Hours", sub: "Usually much faster", gradient: "from-orange-500 to-amber-600", href: null },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      form.reset();
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message || "Something went wrong.", variant: "destructive" });
    },
  });

  return (
    <section id="contact" className="section-pad bg-[#080814] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {/* glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[140px] opacity-5 pointer-events-none" />

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-indigo-300 font-medium mb-6 border border-indigo-500/20">
            <MessageCircle className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Ready to grow your business online? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            const Tag = info.href ? "a" : "div";
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Tag
                  {...(info.href ? { href: info.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-card rounded-2xl p-5 text-center block hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white/40 text-xs mb-1">{info.title}</div>
                  <div className="text-white font-medium text-sm mb-1">{info.value}</div>
                  <div className="text-white/35 text-xs">{info.sub}</div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-poppins font-bold text-2xl mb-4">
              Why work with <span className="gradient-text">WebAksh</span>?
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { title: "Direct founder access", desc: "You'll work directly with Yogeshwar & Naveen — no account managers or middlemen." },
                { title: "Transparent pricing", desc: "No hidden fees. We share detailed quotes upfront so you always know what you're paying for." },
                { title: "Regular updates", desc: "Weekly project updates via WhatsApp or email — you're always in the loop." },
                { title: "Post-launch support", desc: "We don't disappear after delivery. Ongoing support is always available." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                    <div className="text-white/45 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917049586798?text=Hi%20WebAksh%2C%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl text-[#25D366] font-semibold hover:bg-[#25D366]/15 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Instead
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-7"
          >
            <h3 className="text-white font-poppins font-semibold text-xl mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit((d) => contactMutation.mutate(d))} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 text-xs uppercase tracking-wider">First Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Raj" className="bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Sharma" className="bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="raj@example.com" className="bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-indigo-500 rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Company (Optional)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your Company" className="bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-indigo-500 rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="service" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Service Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0d0d20] border-white/10">
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="app">Mobile App Development</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                        <SelectItem value="marketing">Digital Marketing & SEO</SelectItem>
                        <SelectItem value="branding">Branding & Design</SelectItem>
                        <SelectItem value="social">Social Media Management</SelectItem>
                        <SelectItem value="automation">Business Automation</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Tell Us About Your Project</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} placeholder="Describe your idea, goals, or any specific requirements..." className="bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-indigo-500 rounded-xl resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 h-auto"
                  >
                    <Send className="w-4 h-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
