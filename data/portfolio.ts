export const technologies = [
  { name: "PYTHON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "JAVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "REACT NATIVE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TAILWIND CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FLASK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", darkInvert: true },
  { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "VS CODE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "CANVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "WORKSPACE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
  { name: "NUMPY", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "SCIKIT-LEARN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "MATPLOTLIB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "PANDAS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "SEABORN", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo-seaborn.png/330px-Logo-seaborn.png" },
  { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GITHUB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", darkInvert: true },
  { name: "MICROSOFT APPS", icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "GOOGLE COLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" },
  { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" }
];

export const projects = [
  {
    id: "01",
    title: "Talk2DHand",
    category: "UI/UX DESIGNER, RESEARCHER, & QA",
    description: "A real-time, dynamic hand sign language recognition web system processing American and Filipino Sign Language.",
    images: ["img/talk2dhand.jpg", "img/proj/img7.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "MediaPipe", icon: "https://viz.mediapipe.dev/logo.png" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" }
    ],
    links: [
      { label: "Demo", url: "https://talk2dhand-1.onrender.com/" },
      { label: "Code", url: "https://github.com/neinzaut/talk2dhand-v3" },
      { label: "Video", url: "https://drive.google.com/file/d/1mFtealLhmXdaS_hjkpm4lIHvJiNM5_3G/view" }
    ],
    awards: ["Finalist (SikapTala 2025)"],
    certificates: ["img/certificate/img3.png", "img/certificate/img4.png", "img/certificate/img1.jpg", "img/certificate/img2.png"]
  },
  {
    id: "02",
    title: "ReStitch",
    category: "FRONTEND DEVELOPER",
    description: "A mobile application powered by Google's platform that helps repair the future of fashion by reducing the impact of fast fashion.",
    images: ["img/restitch.jpg", "img/proj/img8.png"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/proto/iRn5u2xqlj5FHJic0xV4Pk/restitch" },
      { label: "Publication", url: "https://www.facebook.com/share/p/1BqVfJTyy3/" },
      { label: "Facebook Shorts", url: "https://www.facebook.com/reel/2765715960298662" },
      { label: "Youtube Shorts", url: "https://www.youtube.com/shorts/HwGHEC5tj7I" }
    ],
    awards: ["Champion (EDUtech Asia 2025)"],
    certificates: ["img/certificate/img5.png", "img/certificate/img8.jpg"]
  },
  {
    id: "03",
    title: "Automata Simulator",
    category: "FRONTEND DEVELOPER",
    description: "A web-based simulator that converts a given regular expression into Deterministic Finite Automaton (DFA), Context‑Free Grammar (CFG), and Pushdown Automaton (PDA).",
    images: ["img/dfa.jpg"],
    tags: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", darkInvert: true },
      { name: "Graphviz", icon: "https://graphviz.org/Resources/app.png" }
    ],
    links: [
      { label: "Demo", url: "https://automatatool.vercel.app/" },
      { label: "Code", url: "https://github.com/ejlumakang/automata-simulator" }
    ]
  },
  {
    id: "04",
    title: "DocuMed",
    category: "UI/UX DESIGNER, RESEARCHER, & QA",
    description: "A web-based clinic management system for De La Salle University-Dasmarinas' East and West Clinic.",
    images: ["img/documed.jpg", "img/proj/img6.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/design/0KQ5NmuRsotqN9uSuRaDQ7/Thesis" }
    ]
  },
  {
    id: "05",
    title: "Denang's",
    category: "UI/UX DESIGNER",
    description: "A mobile application prototype designed for an online meat shop that allows users to sign in, explore products, and track deliveries.",
    images: ["img/denangs.jpg", "img/proj/img1.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Mobile", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='2' width='14' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='18' x2='12.01' y2='18'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/proto/wVwcycFldsE0Kzy6jPfFDF/DENANG-S--updated-" }
    ]
  },
  {
    id: "06",
    title: "MedGrocer (Redesign)",
    category: "UI/UX DESIGNER & RESEARCHER",
    description: "A visual hierarchy overhaul prototype for an e-pharmacy checkout ecosystem built to mitigate user navigation drops.",
    images: ["img/medgrocer.jpg", "img/proj/img3.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Web", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/design/f4FBq1ojxsfU7IoEVyWks7/MedGrocer" }
    ]
  },
  {
    id: "07",
    title: "JetSetGo",
    category: "UI/UX DESIGNER",
    description: "A prototype for a mobile application designed for airline ticket booking.",
    images: ["img/jetsetgo.jpg", "img/proj/img4.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Mobile", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='2' width='14' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='18' x2='12.01' y2='18'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/proto/J21kLLpMJDigfMki5xY4uD/JETSETGO" }
    ]
  },
  {
    id: "08",
    title: "Drag Gesture",
    category: "UI/UX DESIGNER",
    description: "A prototype featuring characters from Jojo's Bizarre Adventures and incorporating a drag gesture.",
    images: ["img/drag-gesture.jpg", "img/proj/img5.jpg"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Mobile", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='2' width='14' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='18' x2='12.01' y2='18'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/design/SWMIGl815xZ0VmjdCWFpio/LAB-ACT--4---DRAG-GESTURE" }
    ]
  },
  {
    id: "09",
    title: "Reddit (Redesign)",
    category: "UI/UX DESIGNER",
    description: "A high-fidelity prototype for a redesigned version of Reddit tailored to improve usability for elderly users.",
    images: ["img/reddit.jpg", "img/proj/img5.png"],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Mobile", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='2' width='14' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='18' x2='12.01' y2='18'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ],
    links: [
      { label: "Demo", url: "https://www.figma.com/design/eMqQNr1IYgrbEk3tL3BoSS/Reddit" }
    ]
  },
  {
    id: "10",
    title: "Filter",
    category: "UI/UX DESIGNER",
    description: "A high-fidelity prototype that replicates key Instagram features such as user sign-in, an explore feed, and a profile sidebar.",
    images: ["img/filter.jpg", "img/proj/img2.jpg"],
    links: [
      { label: "Demo", url: "https://www.figma.com/design/5GtPXaNRamViZPX7Mye1X0/Lab-Act-No.-6-Sticky-Scroll-2-Contacts" }
    ],
    tags: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Mobile", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='2' width='14' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='18' x2='12.01' y2='18'%3E%3C/line%3E%3C/svg%3E", darkInvert: true }
    ]
  }
  
];

export const techCategories = {
  "Languages": ["PYTHON", "JAVASCRIPT", "JAVA", "HTML5", "CSS3"],
  "Frameworks & Tools": ["REACT NATIVE", "TAILWIND CSS", "FLASK", "GRAPHVIZ", "GIT", "GITHUB"],
  "Data Science": ["NUMPY", "SCIKIT-LEARN", "MATPLOTLIB", "PANDAS", "SEABORN"],
  "Design & Workflow": ["FIGMA", "VS CODE", "CANVA", "WORKSPACE", "MICROSOFT APPS"]
};

export const experience = [
  {
    id: 1,
    role: "UI/UX Intern",
    company: "Unioil Petroleum Philippines, Inc.",
    logo: "https://play-lh.googleusercontent.com/8NFsVYs68xgjbPkOzzRdzxObtk5cEYmLcWrFtxyeY-Y96ITsnpML7n6Y2OPW5ryvfw0=w240-h480-rw",
    period: "Jun 2025 - Aug 2025",
    description: [
      "Designed responsive user interfaces for web and mobile applications.",
      "Created structured user and administrator documentation to simplify complex software features.",
      "Designed visual assets for email marketing campaigns.",
    ],
    tech: ["Figma", "Canva", "Microsoft Apps",]
  },
  {
    id: 2,
    role: "UI/UX Virtual Apprentice",
    company: "KadaKareer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbYv6RFUWmr0VEhFtJrKIAhiZ0B_64krlPKFdNxZPOK_EYFe8z4Gm7sg&s=10",
    period: "Aug 2023",
    description: [
      "Conducted a UX audit across 4 core platforms to establish a consolidated brand identity.",
      "Designed prototypes for Home, Log-in, and Contact pages, streamlining ordering and teleconsultation flows.",
      "Co-authored technical documentation and final project deliverables for submission."
    ],
    tech: ["Figma", "Canva", "Workspace",]
  },
   {
    id: 3,
    role: "B.S. Computer Science",
    company: "De La Salle University-Dasmarinas",
    logo: "https://www.dlsud.edu.ph/images/about-logo.png",
    period: "2022 - 2026",
    description: [
      "GPA: (3.7/4.0) Consistent Dean's Lister.",
      "Specializing in Intelligent Systems.", 
      "Courseworks: Artificial Intelligence, Intelligent Systems, Machine Learning, Natural Language Processing, Object-Oriented Programming.",
    ],
    tech: ["Google Colab", "Python", "JavaScript","MATLAB", "Figma"]
  },
];

export const certifications = [
  {
    id: "cert-01",
    title: "Linux Essentials",
    issuer: "Cisco",
    date: "2026",
    image: "img/certificate/linux.png"
  },
  {
    id: "cert-02",
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "2026",
    image: "img/certificate/os-basics.png"
  },
  {
    id: "cert-03",
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "2025",
    image: "img/certificate/data-analytics.png"
  },
  {
    id: "cert-04",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    image: "img/certificate/cybersecurity.png"
  },
  {
    id: "cert-05",
    title: "Introduction to IoT",
    issuer: "Cisco",
    date: "2024",
    image: "img/certificate/iot.png"
  },
  {
    id: "cert-06",
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "2024",
    image: "img/certificate/data-science.png"
  }
];