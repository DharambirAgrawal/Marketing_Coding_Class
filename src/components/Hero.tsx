import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";  // Make sure this image is relevant to your company
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing Page Template for [Your Company]
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website template for startups and indie projects. Built with Next.js & TailwindCSS, it is completely open-source, ready to boost your startup's online presence.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/" className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}  // Ensure this is your hero image.
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

     
    </>
  );
}

// Replace placeholder logos with your company's logos

