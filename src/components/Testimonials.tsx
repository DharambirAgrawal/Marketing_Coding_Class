import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// Define the testimonial data
const testimonials = [
  {
    image: "/img/user1.jpg", // replace with actual path or image URL
    name: "Jane Doe",
    title: "Software Engineer at TechCorp",
    content: "This coding class helped me land my first job in tech. The lessons were clear and the support was fantastic!",
  },
  {
    image: "/img/user2.jpg", // replace with actual path or image URL
    name: "John Smith",
    title: "Web Developer at WebSolutions",
    content: "The instructors were top-notch, and the hands-on projects made learning enjoyable and practical.",
  },
  {
    image: "/img/user3.jpg", // replace with actual path or image URL
    name: "Alice Johnson",
    title: "Front-end Developer at CodeFactory",
    content: "I’ve completed multiple coding courses, but this one stands out for its structured curriculum and expert guidance.",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 px-8 py-10 rounded-2xl dark:bg-trueGray-800 flex flex-col justify-between">
            <p className="text-2xl leading-normal mb-8">{testimonial.content}</p>
            <Avatar
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center space-x-3 mt-8">
      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
        <Image
          src={props.image}
          width={56}
          height={56}
          alt="Avatar"
        
          className="object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

