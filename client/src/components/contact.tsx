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
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: { firstName: "", lastName: "", email: "", company: "", service: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: (d: InsertContactSubmission) => apiRequest("POST", "/api/contact", d),
    onSuccess: () => {
      toast({ title: "Message received.", description: "We'll be in touch within 24 hours." });
      form.reset();
    },
    onError: (e: any) => toast({ title: "Error", description: e.message || "Something went wrong.", variant: "destructive" }),
  });

  return (
    <section id="contact" className="section-gap bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      {/* Ambient */}
      <div className="orb w-[700px] h-[700px] bg-indigo-700 opacity-[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-pad relative z-10">
        {/* Giant CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="tag mb-6 inline-flex">Get in Touch</span>
          <h2 className="text-display text-white max-w-4xl">
            Let's build
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              something real.
            </span>
          </h2>
          <p className="text-white/35 text-base font-inter mt-6 max-w-md leading-relaxed">
            Tell us about your project. We'll reply within 24 hours with honest thoughts and a realistic plan.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div>
                <p className="text-label text-white/25 mb-2">Email</p>
                <a href="mailto:contact@webaksh.com" className="text-white/70 hover:text-white transition-colors font-space text-lg">
                  contact@webaksh.com
                </a>
              </div>
              <div>
                <p className="text-label text-white/25 mb-2">Phone</p>
                <a href="tel:+917049586798" className="text-white/70 hover:text-white transition-colors font-space text-lg">
                  +91 70495 86798
                </a>
              </div>
              <div>
                <p className="text-label text-white/25 mb-2">Location</p>
                <p className="text-white/55 font-inter text-sm leading-relaxed">
                  Sundar Nagar, Raipur<br />
                  Chhattisgarh — 492001
                </p>
              </div>
              <div>
                <p className="text-label text-white/25 mb-2">Hours</p>
                <p className="text-white/55 font-inter text-sm">Mon – Fri, 9AM to 6PM IST</p>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/917049586798?text=Hi%20WebAksh%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-space text-[#4ade80] hover:text-[#86efac] transition-colors"
                >
                  <MessageCircle size={15} className="fill-current" />
                  WhatsApp us instead
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3"
          >
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
                    <FormControl><Input {...field} placeholder="Your company" /></FormControl>
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
                        <SelectItem value="social">Social Media</SelectItem>
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
                      <Textarea {...field} rows={4} placeholder="What are you building? What's the timeline? Any specific requirements?" />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )} />

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn-primary w-full justify-center h-auto py-4 text-sm rounded-xl"
                    style={{ background: "#fff", color: "#07070f" }}
                  >
                    {mutation.isPending ? "Sending…" : "Send Message"}
                    <ArrowRight size={15} />
                  </Button>
                </motion.div>

                <p className="text-white/22 text-xs font-inter text-center">
                  We read every message. You'll hear from us within 24 hours.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
