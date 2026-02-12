import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
        I'm <strong className="text-stone-100">Software Engineer</strong>[cite: 8, 15], currently working
        at the <strong className="text-stone-100">Network and OS Laboratory</strong> [cite: 17] architecting robust 
        error-reporting infrastructure and observability stacks[cite: 19, 22].
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I am passionate about creating <strong className="text-stone-100">efficient solutions</strong> [cite: 5] 
        and exploring innovations in <strong className="text-stone-100">AI</strong> [cite: 34, 46] and 
        <strong className="text-stone-100">Embedded Systems</strong>[cite: 51].
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `Motivated Computer Engineering graduate with strong skills in Python and C[cite: 2, 3]. 
  Experienced in software development, algorithms, and system design, with a focus on building scalable 
  applications and specialized embeded systems[cite: 3, 4, 44].`,
  aboutItems: [
    {label: 'Location', text: 'Tehran, Iran', Icon: MapIcon},
    // {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Deep Learning, OS, Automation,UI/UX Design', Icon: SparklesIcon},
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
    name: 'Software Development',
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
    ],
  },
  {
    name: 'Systems & Tools',
    skills: [
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'Observability (Prometheus/Grafana)',
        level: 7,
      },
      {
        name: 'ANTLR4',
        level: 7,
      },
      {
        name: 'Git/Azure',
        level: 7,
      },
    ],
  },
  {
    name: 'Embedded & AI',
    skills: [
      {
        name: 'Microcontrollers (ESP32/Arduino)',
        level: 8,
      },
      {
        name: 'Deep Learning (PyTorch)',
        level: 7,
      },
      {
        name: 'Java (Android)',
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
    title: 'Gymbato',
    description: 'Online Sports Coaching Platform connecting users with coaches using React and Material UI[cite: 40, 41].',
    url: 'https://github.com/Sahabi-Team/Front-end',
    image: porfolioImage1,
  },
  {
    title: 'MCP Server with DSL GO',
    description: 'Enables Claude AI to interact with a custom Domain-Specific Language using ANTLR4 and Python[cite: 42, 45].',
    url: 'https://github.com/alikargar82/MCP-server-for-course-management-with-DSL',
    image: porfolioImage2,
  },
  {
    title: 'Saliency Map Prediction',
    description: 'Deep learning model for visual prediction using transfer learning with VGG-16[cite: 46, 47].',
    url: 'https://github.com/Pouya-Ta/Improving-the-Accuracy-of-Saliency-Prediction-models-using-Transfer-Learning',
    image: porfolioImage3,
  },
  {
    title: 'HUD System',
    description: 'Head-Up Display using ESP32 and Android via BLE with LVGL for embedded visualization[cite: 50, 52].',
    url: 'https://github.com/alikargar82/HUD-Display',
    image: porfolioImage4,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2026',
    location: 'Iran University of Science and Technology (IUST)',
    title: 'Computer Engineering',
    content: <p>Selected as a Distinguished Student and ranked in the top 5% of the class[cite: 85, 86].</p>,
  },
  {
    date: '2022',
    location: 'Sampad Shahid Rahimifar',
    title: 'ational University Entrance Exam (Konkoor)',
    content: <p>Achieved a top 0.5% national ranking in the highly competitive engineering entrance examination[cite: 82, 83].</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - 2026',
    location: 'Network and OS Laboratory',
    title: 'Software Engineer',
    content: (
      <p>
        Integrated Crashpad and Breakpad for automated core dump analysis[cite: 19]. 
        Configured Prometheus, Grafana, and Loki to monitor system health and enhance log management[cite: 22, 23].
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
      text: 'Recognized as a Distinguished Student, maintaining excellence in Computer Engineering[cite: 84, 85].',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'IUST Achievement',
      text: 'Achieved a top 0.5% national ranking in the highly competitive engineering entrance examination[cite: 84, 85].',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Available for innovative software projects and system design discussions[cite: 5].',
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
      text: '@Alikargar04',
      href: 'https://www.linkedin.com/Alikargar04/',
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