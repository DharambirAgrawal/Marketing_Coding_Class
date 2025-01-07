import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png"; // Ensure this image is relevant to your company
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Coding Classes for Kids This Summer
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Enroll your child in our exciting, hands-on coding classes this summer! Learn programming, build websites, and create apps — all in a fun, offline classroom setting.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="#Form" className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
                Enroll Now
              </Link>
              <Link href="#Teams" className="px-8 py-4 text-lg font-medium text-center text-indigo-600 bg-white border-2 border-indigo-600 rounded-md">
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}  // Ensure this is your hero image, preferably related to kids learning coding or a classroom environment
              width="616"
              height="617"
              className={"object-cover"}
              alt="Coding Classes for Kids"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
