import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';/
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ali Kargar',
  description: "Professional portfolio of Ali Kargar, Software Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ali Kargar.`,
  description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I'm a <strong className="text-stone-100">Software Engineer </strong>  
           specializing in 
          <strong className="text-stone-100"> Python</strong>, <strong className="text-stone-100">C </strong>
          and <strong className="text-stone-100">UI/UX Design</strong>. 
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I am passionate about building <strong className="text-stone-100">efficient solutions </strong> 
          using <strong className="text-stone-100">efficient tools</strong>. 
          also contributing as a <strong className="text-stone-100">Teaching Assistant</strong> for 
          some courses.
        </p>
      </>
    ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced Software Engineer at the Network and OS Laboratory with a
    background in Computer Engineering from IUST. I specialize in developing scalable
    applications and observability stacks using Python, C, and React, while maintaining
    a strong interest in Deep Learning and Embedded Systems.
    I have contributed to the academic community
    as a Teaching Assistant for some courses.`,
  aboutItems: [
    {label: 'Location', text: 'Tehran, Iran', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Deep Learning, OS, UI/UX Design', Icon: SparklesIcon},
    {label: 'Study', text: 'Iran University of Science & Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Network and OS Laboratory', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Persian',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'AI & Data Science',
    skills: [
      {
        name: 'Deep Learning (PyTorch, VGG-16)',
        level: 4,
      },
      {
        name: 'Reinforcement Learning',
        level: 4,
      },
      {
        name: 'Data Structures & Algorithms',
        level: 8,
      },
    ],
  },
  {
    name: 'Software Development & Design',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C/C++',
        level: 9,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'Figma (UI/UX Design)',
        level: 6,
      },
    ],
  },
  {
    name: 'Systems & Tools',
    skills: [
      {
        name: 'Linux & Shell Scripting',
        level: 8,
      },
      {
        name: 'Observability (Prometheus, Grafana, Loki)',
        level: 7,
      },
      {
        name: 'Git / Azure',
        level: 9,
      },
      {
        name: 'Networking (Wireshark, Cisco Packet Tracer)',
        level: 6,
      },
      {
        name: 'ANTLR4 / Compiler Construction',
        level: 5,
      },

    ],
  },
  {
    name: 'Embedded & Hardware',
    skills: [
      {
        name: 'Microcontrollers (ESP32, Arduino)',
        level: 7,
      },
      {
        name: 'Hardware Design (VHDL, Proteus, LVGL)',
        level: 7,
      },
      {
        name: 'Assembly',
        level: 6,
      },
    ],
  },

];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [

  {
    title: 'MCP Server with DSL GO',
    description: 'Enables Claude AI to interact with a custom Domain-Specific Language using ANTLR4 and Python.',
    url: 'https://github.com/alikargar82/MCP-server-for-course-management-with-DSL',
    image: porfolioImage4,
  },
  {
    title: 'Gymbato',
    description: 'Online Sports Coaching Platform connecting users with coaches using React and Material UI.',
    url: 'https://github.com/Sahabi-Team/Front-end',
    image: porfolioImage4,
  },
  {
    title: 'HUD System',
    description: 'Head-Up Display using ESP32 and Android via BLE with LVGL for embedded visualization.',
    url: 'https://github.com/alikargar82/HUD-Display',
    image: porfolioImage4,
  },
  {
    title: 'Saliency Map Prediction',
    description: 'Deep learning model for visual prediction using transfer learning with VGG-16.',
    url: 'https://github.com/Pouya-Ta/Improving-the-Accuracy-of-Saliency-Prediction-models-using-Transfer-Learning',
    image: porfolioImage4,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - 2026',
    location: 'Computer Engineering bachelor\'s degree',
    title: 'Iran University of Science and Technology (IUST)',
    content: <p>Focused on mastering core principles of software development, 
      including Python, C, and algorithms. Developed scalable applications and 
      deep learning models while gaining hands-on experience in Linux and system design.
      Additionally, served as a Teaching Assistant for the System Design course, providing 
      technical support and guidance to peers.</p>,
  },
  {
    date: '2019 - 2022',
    location: 'High School Diploma',
    title: 'Sampad Shahid Rahimifar',
    content: <p>Actively participated in both the Physics and Computer Science Olympiads.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - 2026',
    location: 'Network and OS Laboratory',
    title: 'Software Developer and Researcher',
    content: (
      <p>
        Integrated Crashpad and Breakpad for automated core dump analysis. 
        Configured Prometheus, Grafana, and Loki to monitor system health and enhance log management.
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'IUST Achievement',
      text: 'Recognized as a Distinguished Student, maintaining excellence in Computer Engineering.',
      image: '',
    },
    {
      name: 'national University Entrance Exam (Konkoor)',
      text: 'Achieved a top 0.5% national ranking in the highly competitive engineering entrance examination.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Available for innovative software projects.',
  items: [
    {
      type: ContactType.Email,
      text: 'Alikargar0901@gmail.com',
      href: 'mailto:Alikargar0901@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tehran, Iran',
      href: 'https://www.google.com/maps/place/Tehran,+Iran',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Alikargar04',
      href: 'https://www.linkedin.com/in/alikargar04/',
    },
    {
      type: ContactType.Github,
      text: 'Alikargar82',
      href: 'https://github.com/Alikargar82',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Alikargar82'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/Alikargar04/'},

];