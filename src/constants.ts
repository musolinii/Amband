/** Site-wide section IDs for in-page navigation */
export const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  rfid: "rfid",
  communications: "communications",
  bigData: "big-data",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/** Image and asset URLs */
export const IMAGES = {
  logo: "/assets/amband.png",
  hero: "/assets/hero.png",
  team: "/assets/team.png",
  teamBanner: "/assets/team-banner.png",
  mobile: "/assets/mobile.png",
  laptop: "/assets/laptop.png",
  services: "/assets/services.jpg",
  code: "/assets/code.jpeg",
  handshake: "/assets/handshake.jpg",
  bpr: "/assets/bpr.jpeg",
  support: "/assets/support.png",
  audit: "/assets/audit.jpg",
  computers: "/assets/computers.jpg",
  rfid: "/assets/RFID.jpg",
  bigData: "/assets/bigdata.png",
  subBanner: "/assets/sub-banner01.png",
  studio: "/assets/studio.jpg",
  marketing: "/assets/marketing.png",
  identity: "/assets/identity.png",
} as const;

export const SITE = {
  name: "Amband",
  tagline: "Innovative IT solutions",
  copyright: "© 2024 Amband. All rights reserved.",
  phone: "+254 720 970 959",
  email: "info@amband.co.ke",
  website: "www.amband.co.ke",
  address: {
    line1: "Pili Trade Center,",
    line2: "Opp Hilton Garden Inn, Mombasa Road",
    line3: "P.O. Box 2882 - 00200, NAIROBI, Kenya",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7041934904664!2d36.90457527491678!3d-1.3540618357038279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d9f19275123%3A0xc92bcb4c6a816b34!2sHilton%20Garden%20Inn%20Nairobi%20Airport!5e0!3m2!1sen!2ske!4v1717393922083!5m2!1sen!2ske",
} as const;

export type NavChild = { label: string; sectionId: SectionId };
export type NavItem = {
  label: string;
  sectionId: SectionId;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", sectionId: SECTION_IDS.home },
  { label: "About Us", sectionId: SECTION_IDS.about },
  {
    label: "Services",
    sectionId: SECTION_IDS.services,
    children: [
      { label: "Website & Software Development", sectionId: SECTION_IDS.services },
      { label: "Business Process Reengineering", sectionId: SECTION_IDS.services },
      { label: "ICT Consulting Services", sectionId: SECTION_IDS.services },
      { label: "IT Support", sectionId: SECTION_IDS.services },
      { label: "IS Audit and Governance", sectionId: SECTION_IDS.services },
      { label: "Cyber Security", sectionId: SECTION_IDS.services },
    ],
  },
  {
    label: "RFID Solutions",
    sectionId: SECTION_IDS.rfid,
    children: [
      { label: "RFID/Bar-Code Asset Management", sectionId: SECTION_IDS.rfid },
      { label: "RFID Supply Chain Management", sectionId: SECTION_IDS.rfid },
      { label: "RFID File and Document Management", sectionId: SECTION_IDS.rfid },
      { label: "RFID Armory Management", sectionId: SECTION_IDS.rfid },
    ],
  },
  { label: "Communications and Media", sectionId: SECTION_IDS.communications },
  {
    label: "Big Data",
    sectionId: SECTION_IDS.bigData,
    children: [
      { label: "Data Analytics", sectionId: SECTION_IDS.bigData },
      { label: "Visualization", sectionId: SECTION_IDS.bigData },
      { label: "Machine Learning", sectionId: SECTION_IDS.bigData },
    ],
  },
  { label: "Contact Us", sectionId: SECTION_IDS.contact },
];

export const HOME = {
  welcomeTitle: "WELCOME TO AMBAND",
  welcomeBody:
    "We are an innovative and dynamic information technology company that prides itself by offering bespoke and “out of the box” IT related solutions to our clients.",
  whoWeAreTitle: "WHO WE ARE",
  philosophyTitle: "Our philosophy",
  philosophyParagraphs: [
    "We have a very good track record working with satisfied clients all around the globe. Up to now, no client was left unsatisfied. This is because we make sure that in every project partnership opportunity handed to us, requirements are met, all modifications are worked out, arising problems are diagnosed and given solution at the soonest possible time and continuous maintenance and updates are never forgotten.",
    "We can do all these because of the human and technology resources that we have. Amband gives you products and services that are worthy of every amount spent.",
  ],
  ourWorkTitle: "OUR WORK",
  workItems: [
    {
      title: "Our Services",
      body: "Amband offers the following services to our clients; Software and website development, ICT consultancy, ICT support and maintenance, Monitoring and Evaluation, IS audit and IT governance.",
      sectionId: SECTION_IDS.services,
    },
    {
      title: "Security Products",
      body: "Amband offers a variety of security services ranging from Absolute software, stoptrack and CCTV installation and maintenance.",
      sectionId: SECTION_IDS.services,
    },
    {
      title: "BIG DATA",
      body: "Big Data brings together data from many disparate sources and applications.",
      sectionId: SECTION_IDS.bigData,
    },
    {
      title: "Solutions",
      body: "Amband offers the following solutions to our clients; Asset management system, Hospital Management Information Systems, Academic and student management systems.",
      sectionId: SECTION_IDS.services,
    },
    {
      title: "RFID",
      body: "Supply chain management, asset/inventory management, document/file tracking, production automation, healthcare, and vehicle tracking.",
      sectionId: SECTION_IDS.rfid,
      list: [
        "Supply chain management",
        "Asset/ inventory management",
        "Document/ file tracking",
        "Production automation",
        "Healthcare",
        "Vehicle tracking and management",
      ],
    },
    {
      title: "Research",
      body: "Professional ICT research consultants",
      sectionId: SECTION_IDS.contact,
    },
  ],
  mobileTitle: "MOBILE APP DEVELOPMENT",
  mobileBody:
    "Leverage our mobile application development teams to develop novel apps, which can help you to scale-up your businesses.",
  ctaTitle: "Impressed With Our Services?",
  ctaBody: "Leave us a message or request for a service.",
  ctaButton: "Contact Us",
} as const;

export const ABOUT = {
  bannerTitle: "About Us",
  heading: "Amband is an Information System Company",
  paragraphs: [
    "We are an innovative and dynamic information technology company that prides itself by offering bespoke and \"out of the box\" IT related solutions to our clients. With Amband’s company philosophy of providing a large range of services and solutions at an affordable price, we should be your one and only port of call.",
    "Amband has a specialist team of consultants who are skilled and qualified in their various fields, technologies and methodologies and who discharge their duties effectively, efficiently and flexibly to ensure an organization’s goals are met and objectives satisfied.",
  ],
  footerBlurb:
    "We are an innovative and dynamic information technology company that prides itself by offering bespoke and “out of the box” IT related solutions to our clients. With Amband’s company philosophy of providing a large range of services and solutions at an affordable price, we should be your one and only port of call.",
  footerBlurbContinued:
    "Amband has a specialist team of consultants who are skilled and qualified in their various fields, technologies and methodologies and who discharge their duties effectively, efficiently and flexibly to ensure an organization’s goals are met and objectives satisfied.",
  cards: [
    {
      front: "MISSION",
      title: "Mission",
      body: "To provide fast, secure and reliable solutions and services which are aligned to the clients’ needs and help their organization to achieve their set goals and objectives.",
    },
    {
      front: "VISION",
      title: "Vision",
      body: "To be the best provider of integrated ICT security, solutions and services.",
    },
    {
      front: "OBJECTIVES",
      title: "Objectives",
      intro: "Amband Objectives are as follows;",
      list: [
        "Commitment to the customer",
        "Teamwork",
        "Provision of quality services and solutions to our customers.",
        "Meeting the customers' needs within the agreed period.",
        "Putting customers’ needs first.",
      ],
    },
  ],
} as const;

export const SERVICES = {
  bannerTitle: "Services",
  introTitle: "WHAT WE OFFER",
  introBody: "Amband offers a variety of Information technology services from;",
  items: [
    {
      title: "01. Website And Software Development",
      subtitle: "Developing Responsive, mobile Friendly Websites",
      body: "Website design & development is a process that has different steps taken to create, launch and make a website accessible.",
      image: IMAGES.code,
      imageAlt: "Software development",
      imageFirst: true,
    },
    {
      title: "02. ICT Consulting Services",
      subtitle: "We Provide Expert Advice To Clients",
      body: "Information and communication technologies (ICT) have become critical business tools, essential in any workplace, educational or entertainment environment.",
      image: IMAGES.handshake,
      imageAlt: "ICT consulting",
      imageFirst: false,
    },
    {
      title: "03. Business Process Reengineering",
      subtitle: "We reengineer your business to success",
      body: "Business process reengineering (BPR) is a business management strategy, focusing on the analysis and design of workflows and business processes within an organization.",
      image: IMAGES.bpr,
      imageAlt: "Business process reengineering",
      imageFirst: true,
    },
    {
      title: "04. IT Support",
      subtitle: "We offer IT support and maintenance services to our clients.",
      body: "We are regarded as the “go-to” service provider by organizations as we provide friendly customer service; our qualified technicians work fast to get your equipment serviced and ready as quickly as possible.",
      image: IMAGES.support,
      imageAlt: "IT support",
      imageFirst: false,
    },
    {
      title: "05. IS Audit and Governance",
      subtitle: "We Audit your information System To enhance your business",
      body: "Information technology audit is an examination of the management controls within an IT infrastructure to determine if information systems are safeguarding assets and operating effectively.",
      image: IMAGES.audit,
      imageAlt: "IS audit",
      imageFirst: true,
    },
    {
      title: "06. Cyber Security",
      subtitle: "AMBAND’s goal is to help clients protect their ICT assets from hackers.",
      body: "The growth of cybercrime means businesses of all sizes need to rethink their approach to the security of their ICT infrastructure and information.",
      image: IMAGES.computers,
      imageAlt: "Cyber security",
      imageFirst: false,
    },
  ],
} as const;

export const RFID = {
  bannerTitle: "RFID Solutions",
  intro: [
    "Radio-frequency identification (RFID) is the use of a wireless non-contact system that uses radio-frequency electromagnetic fields to transfer data from a tag attached to an object, for the purposes of automatic identification and tracking.",
    "Unlike a bar code, the tag does not need to be within line of sight of the reader and may be embedded in the tracked object.",
  ],
  cards: [
    {
      title: "RFID/Bar-Code Asset Management",
      body: "Amband provides clients with a proven fixed asset solution that enables the management of all types of fixed assets including property, equipment and furniture.",
    },
    {
      title: "RFID Supply Chain Management",
      body: "The key to getting the most business value out of retail RFID technology is to maintain visibility across the supply chain and maximize the opportunity for benefits.",
    },
    {
      title: "RFID Document and File Management",
      body: "RFID document and file management systems are designed to reduce employee time spent maintaining and managing hundreds or thousands of files within a workplace.",
    },
    {
      title: "RFID Armory Management",
      body: "AMBAND has partnered with ARMS RFID to supply their RFID Armory management system for weapons, gear, ammo, officers, and certifications.",
    },
  ],
} as const;

export const COMMUNICATIONS = {
  bannerTitle: "Communications and Media",
  items: [
    {
      title: "1. Digital Content Development",
      paragraphs: [
        "Website content is the words and images which make up your webpages. Almost every piece of content you add to your site impacts in multiple ways.",
        "Content is designed to engage those who visit your site. We make sure your content works on every level.",
      ],
    },
    {
      title: "2. Digital Marketing and Social Media Consulting",
      paragraphs: [
        "At AMBAND, we generate solutions based on our understanding of clients, audiences and interactions.",
        "We combine digital expertise with pragmatism to focus your efforts on the right channels for your business.",
      ],
      image: IMAGES.studio,
      imageAlt: "Studio",
    },
    {
      title: "3. Media and Public Relations",
      paragraphs: [
        "We tailor our content to find the most suitable ways to deliver your message.",
        "Press releases, media training, interviews, and media liaison.",
      ],
      image: IMAGES.marketing,
      imageAlt: "Marketing",
    },
    {
      title: "4. Advertising",
      paragraphs: [
        "Market research, creative design testing, target audience analysis, and production with quality checks at competitive levels.",
      ],
    },
    {
      title: "5. Brand Marketing and Strategies",
      paragraphs: [
        "We create stronger corporate or personal brand identity and implement marketing campaigns that drive customer engagement.",
      ],
      image: IMAGES.identity,
      imageAlt: "Brand identity",
    },
    {
      title: "6. Corporate Communications",
      paragraphs: [
        "We bring fresh eyes to your business and help you consider the bigger brand.",
        "We help you work out when, how and with whom you need to communicate.",
      ],
    },
    {
      title: "7. Content Management",
      paragraphs: [
        "A solid content management strategy is essential in today’s cluttered digital environment.",
        "Blog posts, articles, videos, and images developed to be relevant to your most valuable audiences.",
      ],
    },
    {
      title: "8. Audio Visual Production",
      paragraphs: [
        "Our experienced team of videographers provide total concept, scripting, and development of corporate videos.",
      ],
    },
  ],
} as const;

export const BIG_DATA = {
  bannerTitle: "BIG DATA",
  paragraphs: [
    "The term “big data” refers to data that is so large, fast or complex that it’s difficult or impossible to process using traditional methods.",
    "Big data has one or more of the following characteristics: high volume, high velocity or high variety.",
    "It’s what organizations do with the data that matters. These massive volumes of data can be used to address business problems organizations wouldn’t have been able to tackle before.",
  ],
  cards: [
    {
      title: "Data Analytics",
      body: "Big data analytics is the use of advanced analytic techniques against very large, diverse data sets from different sources and sizes ranging from gigabytes to terabytes.",
    },
    {
      title: "Visualization",
      body: "Data visualization is the presentation of data in a pictorial or graphical format so decision makers can grasp difficult concepts or identify new patterns.",
    },
    {
      title: "Machine Learning",
      body: "Machine learning is the scientific study of algorithms and statistical models that computer systems use to perform tasks without explicit instructions.",
    },
  ],
} as const;

export const CONTACT = {
  bannerTitle: "Contact us",
  inquiryNote:
    "For general inquiry, send an email to this contact. All fields are required.",
  formLabels: {
    name: "Your Name (required)*",
    phone: "Your Phone (required)*",
    email: "Email Address (required)*",
    message: "Your Message",
    submit: "Send",
  },
} as const;

export const FOOTER_QUICK_LINKS = [
  "Absolute Software",
  "Business Process Reengineering",
  "Data Analytics",
  "ICT Consulting Services",
  "IS Audit and Governance",
  "Machine Learning",
  "RFID/Bar-Code Asset Management",
  "RFID Supply Chain Management",
  "Website and Software Management",
  "Stoptrack",
] as const;
