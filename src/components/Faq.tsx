"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

const FaqItem = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5">
      <button
        className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
        onClick={() => setOpen(!open)}
      >
        <span>{item.question}</span>
        <ChevronUpIcon
          className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`}
        />
      </button>
      {open && (
        <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const faqdata = [
  {
    question: "What programming languages will I learn in this course?",
    answer:
      "Our course covers the fundamentals of popular programming languages including HTML, CSS, JavaScript, Python, and React. You will also get hands-on experience with real-world projects.",
  },
  {
    question: "Is the course suitable for beginners?",
    answer:
      "Yes! Our course is designed for beginners with no prior coding experience. We start from the very basics and gradually build up to more advanced topics.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely! Our course is self-paced, allowing you to learn whenever and wherever you want. You’ll have lifetime access to the course materials, so you can revisit the lessons anytime.",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes, you will receive a certificate upon completing the course. This certificate can help boost your resume and demonstrate your new skills to potential employers.",
  },
  {
    question: "Are there any prerequisites for the course?",
    answer:
      "There are no prerequisites! Our course is designed for absolute beginners. All you need is a computer and a passion for learning programming.",
  },
  {
    question: "Will I have access to support during the course?",
    answer:
      "Yes, you will have access to a community of instructors and fellow learners who can help you throughout the course. We offer support via email and discussion forums for any questions or issues you may have.",
  },
  {
    question: "How long will it take to complete the course?",
    answer:
      "The course typically takes 8-12 weeks to complete, depending on how much time you can dedicate each week. Since it’s self-paced, you can go faster or slower based on your schedule.",
  },
];
