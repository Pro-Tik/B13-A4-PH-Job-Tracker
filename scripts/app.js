
const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "pending"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Design and build websites using Webflow.",
    status: "pending"
  },
  {
    id: 3,
    company: "Startup Labs",
    role: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    description: "Work on modern frontend applications.",
    status: "pending"
  },
  {
    id: 4,
    company: "CloudNet Solutions",
    role: "Full Stack Developer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Develop scalable web applications using MERN stack.",
    status: "pending"
  },
  {
    id: 5,
    company: "AI Ventures",
    role: "Frontend Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$70/hr - $90/hr",
    description: "Build UI components for AI-powered platforms.",
    status: "pending"
  },
  {
    id: 6,
    company: "Ecomify",
    role: "React Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Develop and maintain e-commerce frontend features.",
    status: "pending"
  },
  {
    id: 7,
    company: "FinTech Hub",
    role: "UI Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$95,000 - $125,000",
    description: "Create clean and accessible user interfaces for fintech apps.",
    status: "pending"
  },
  {
    id: 8,
    company: "DevStudio",
    role: "Junior Frontend Developer",
    location: "San Francisco, CA",
    type: "Internship",
    salary: "$60,000 - $75,000",
    description: "Assist in building responsive frontend applications.",
    status: "pending"
  }
];


//   DOM ELEMENTS

const jobsContainer = document.getElementById("jobsContainer");
const jobTabs = document.querySelectorAll(".jobsbtn");
const jobCount = document.getElementById("jobCount");


//   APP STATE (current selected tab)

let currentFilter = "all";


  //STATUS BADGE FUNCTION

