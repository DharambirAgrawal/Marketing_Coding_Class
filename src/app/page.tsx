import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Form from "@/components/Form";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Section Title for Benefits */}
      <SectionTitle
        preTitle="Learn Coding Benefits"
        title=" Why should you join our coding classes?"
      >
        Our coding classes are designed to provide you with hands-on experience, real-world projects, and the skills you need to start your career in tech. Whether you're a beginner or an experienced coder, we have something for you.
      </SectionTitle>

      {/* Benefits Section */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* Testimonials Section */}
      <SectionTitle
        preTitle="What Our Students Say"
        title="Here's what our students have to say"
      >
        Hear from our successful students who made their way into the tech industry with the help of our expert-led coding classes.
      </SectionTitle>

      <Testimonials />

      {/* FAQ Section */}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Here are some common questions our students ask. Find answers to help you decide to start your learning journey with us.
      </SectionTitle>

      <Faq />

      {/* Call to Action Section */}
      <Cta />
      <Form />
    </>
  );
}
