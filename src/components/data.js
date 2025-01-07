import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

// const benefitOne = {
//   title: "Highlight your benefits",
//   desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
//   image: benefitOneImg,
//   bullets: [
//     {
//       title: "Understand your customers",
//       desc: "Then explain the first point breifly in one or two lines.",
//       icon: <FaceSmileIcon />,
//     },
//     {
//       title: "Improve acquisition",
//       desc: "Here you can add the next benefit point.",
//       icon: <ChartBarSquareIcon />,
//     },
//     {
//       title: "Drive customer retention",
//       desc: "This will be your last bullet point in this section.",
//       icon: <CursorArrowRaysIcon />,
//     },
//   ],
// };

// const benefitTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };

// Benefit One - Updated for Coding Classes
const benefitOne = {
  title: "Build Real-World Skills",
  desc: "Our coding classes focus on practical learning. With a hands-on approach, you’ll work on real coding projects and build a strong portfolio.",
  image: benefitOneImg, // Update this to an image of your choice
  bullets: [
    {
      title: "Learn In-Demand Programming Languages",
      desc: "We teach the most popular languages in tech today, including JavaScript, Python, and React.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Hands-On Projects",
      desc: "Work on real-world projects, from building websites to creating full-stack applications.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Industry-Standard Tools & Techniques",
      desc: "Use the same tools and technologies professionals use, including GitHub, Visual Studio Code, and more.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

// Benefit Two - Updated for Coding Classes
const benefitTwo = {
  title: "Why Choose Our Coding Classes?",
  desc: "With our classes, you get an all-in-one learning experience that prepares you for a successful career in tech. Here’s why our platform stands out.",
  image: benefitTwoImg, // Update this to an image of your choice
  bullets: [
    {
      title: "Mobile Responsive Courses",
      desc: "Our platform is fully responsive, allowing you to learn coding on the go, from any device.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Taught by Industry Experts",
      desc: "Learn from instructors who have worked at top tech companies and bring real-world insights into the classroom.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Access to Learning Resources 24/7",
      desc: "Get lifetime access to all course materials, and revisit lessons anytime you need.",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};
