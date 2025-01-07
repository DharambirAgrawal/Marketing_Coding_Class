import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// Define the team member data
const teamMembers = [
  {
    image: "/img/team1.jpg", // replace with actual path or image URL
    name: "John Doe",
    title: "Lead Instructor",
    description: "John is an experienced software developer with a passion for teaching. He has helped hundreds of students achieve their coding goals.",
  },
  {
    image: "/img/team2.jpg", // replace with actual path or image URL
    name: "Jane Smith",
    title: "Curriculum Developer",
    description: "Jane has years of experience in web development and is responsible for creating and refining our course materials.",
  },
  {
    image: "/img/team3.jpg", // replace with actual path or image URL
    name: "Emily Johnson",
    title: "Student Support Specialist",
    description: "Emily is dedicated to helping students through their learning journey, providing guidance and answering questions as they arise.",
  },
];

export const MeetOurTeam = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 px-8 py-10 rounded-2xl dark:bg-trueGray-800 flex flex-col justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  width={56}
                  height={56}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-medium">{member.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{member.title}</div>
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">{member.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
