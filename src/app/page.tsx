import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";

import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Form from "@/components/Form";
import { benefitOne, benefitTwo } from "@/components/data";
import { MeetOurTeam } from "@/components/MeetOurTeam";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section Title for Benefits */}
      <SectionTitle
        id="About"
        preTitle="Learn Coding Benefits"
        title=" Why should you join our coding classes?"
      >
        Our coding classes are designed to provide you with hands-on experience,
        real-world projects, and the skills you need to start your career in
        tech. Whether you&apos;re a beginner or an experienced coder, we have
        something for you.
      </SectionTitle>

      {/* Benefits Section */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* Team Section Section */}
      <SectionTitle
        preTitle="Meet Our Team"
        title="Meet the Experts Behind Our Coding Classes"
        id="Teams"
      >
        Our team is dedicated to providing quality education and helping
        students thrive in the tech industry. Get to know the faces who make it
        all happen!
      </SectionTitle>

      <MeetOurTeam />

      {/* FAQ Section */}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions" id="Faq">
        Here are some common questions our students ask. Find answers to help
        you decide to start your learning journey with us.
      </SectionTitle>

      <Faq />

      {/* Call to Action Section */}
      <Cta />
      <Form />
    </>
  );
}
