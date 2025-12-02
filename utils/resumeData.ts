export const RESUME_DATA = {
  profile: {
    name: "Deep Shahriar",
    title: "IT Professional & Business Analyst",
    tagline: "Bridging the gap between technology and business strategy to enhance operational performance.",
    location: "49 Woodford Villas Dublin 22, D22 Y5H0",
    phone: "+353 89 497 4337",
    email: "deepshahriar97@gmail.com",
    linkedin: "www.linkedin.com/in/deepshahriar",
    github: "github.com/Tzariar",
    portfolio: "www.coursera.org/learner/deep-shahriar",
    summary: "Stamp 1G Holder. A highly dynamic IT professional and business analyst with a strong foundation in IT support, system administration, networking, and data analytics. Equipped with a BSc in Electrical & Electronic Engineering and an MSc in Business Analytics from Dublin Business School, expertise has been developed in IT infrastructure, cloud computing (Azure, Office 365), cybersecurity, and automation. Proven ability to bridge the gap between technology and business strategy ensuring delivery of efficient solutions."
  },
  technicalExpertise: [
    {
      category: "IT Support & Troubleshooting",
      skills: ["Hardware", "Software", "Network Issues", "System Issues"]
    },
    {
      category: "Windows Server & Active Directory",
      skills: ["User Management", "Group Policy", "Security Policies"]
    },
    {
      category: "Networking & Security",
      skills: ["Firewalls", "VPN", "TCP/IP", "DHCP", "DNS", "VoIP", "WiFi Networks", "CCTV Monitoring", "Alarm Systems"]
    },
    {
      category: "Cloud & Virtualization",
      skills: ["Microsoft Azure", "Office 365", "SharePoint", "Entra ID"]
    },
    {
      category: "Data Analytics & Automation",
      skills: ["Python", "SQL", "Power BI", "Excel Dashboards"]
    },
    {
      category: "Compliance",
      skills: ["Network Security Audits", "Backup Management", "IT Compliance"]
    }
  ],
  experience: [
    {
      company: "G4S Secure Solutions Ireland",
      role: "Data Center Security Officer",
      period: "Nov 2025 - Present",
      location: "Echolon Data Center, Dublin",
      description: [
        "Monitor data center environment using CCTV, access control, and alarm systems (Lenel, Genetec, Milestone).",
        "Conduct incident triage and escalate issues according to SOPs.",
        "Manage badge access and secure entry procedures for restricted zones.",
        "Collaborate with GSOC teams and emergency responders."
      ]
    },
    {
      company: "Freelance",
      role: "Information Technology Technical Specialist",
      period: "Feb 2025 - Present",
      location: "Remote / Dublin",
      description: [
        "Evaluate and rank AI-generated code for Outliers AI.",
        "Craft questions to train AI models.",
        "Troubleshoot network issues and optimize IT systems.",
        "Analyze business data for strategic growth."
      ]
    },
    {
      company: "RFC Security Group",
      role: "Retail Security Officer",
      period: "May 2025 - Oct 2025",
      location: "Dublin",
      description: [
        "Monitored store environment through CCTV and patrols.",
        "Responded to safety incidents and created detailed reports.",
        "Collaborated with Gardaí to address security concerns."
      ]
    },
    {
      company: "Bidvest Noonan",
      role: "Corporate Security Officer",
      period: "Nov 2024 - Feb 2025",
      location: "Amazon Ireland",
      description: [
        "Supported GSOC-style operations at a high-volume Amazon facility.",
        "Monitored CCTV feeds and access points.",
        "Responded to alarms and ensured compliance with policies for visitors and deliveries."
      ]
    },
    {
      company: "Aramark Ireland",
      role: "Event Staff",
      period: "June 2024 - Oct 2024",
      location: "Croke Park, Dublin",
      description: [
        "Supported large-scale events ensuring crowd safety and smooth operations.",
        "Managed queues and responded to on-site queries.",
        "Coordinated with security teams and supervisors."
      ]
    },
    {
      company: "SPACE ARCHITECTURE & ENGINEERING",
      role: "Management Trainee",
      period: "June 2022 - Jan 2024",
      location: "Dhaka, Bangladesh",
      description: [
        "Provided Level 1 & 2 IT support for hardware/software.",
        "Managed Windows Server administration, Active Directory, and Group Policy.",
        "Oversaw network security, VPN, and firewall configuration.",
        "Deployed and maintained Office 365 and SharePoint."
      ]
    },
    {
      company: "Rupali Bank Limited",
      role: "Internship (ICT Operations)",
      period: "Feb 2022 - May 2022",
      location: "Dhaka, Bangladesh",
      description: [
        "Provided IT support for Alternative Delivery Channels (Debit/Credit Cards, POS).",
        "Assisted with Data Center, Storage, and Database management.",
        "Monitored network security and UAT infrastructure."
      ]
    }
  ],
  education: [
    {
      institution: "Dublin Business School",
      degree: "MSc in Business Analytics",
      period: "Jan 2024 - Jan 2025"
    },
    {
      institution: "Ahsanullah University of Science and Technology",
      degree: "BSc in Electrical & Electronic Engineering",
      period: "Nov 2015 - Jan 2022"
    },
    {
      institution: "Government Laboratory High School",
      degree: "Secondary School Certificate, Science",
      period: "Jan 2002 - May 2012"
    }
  ],
  certifications: [
    "What is Copilot? Get Started with Microsoft's Everyday AI Companion",
    "What Is Copilot? An Overview of Microsoft’s AI Tools",
    "Learning Microsoft 365 Copilot",
    "Lean Six Sigma Foundations",
    "Streamlining Your Work with Microsoft Copilot",
    "Cisco Certified"
  ],
  languages: [
    { language: "English", level: "Professional Working" },
    { language: "Bengali", level: "Native or Bilingual" }
  ]
};

export const RESUME_CONTEXT_STRING = `
You are an AI assistant for Deep Shahriar's portfolio website. You answer questions about Deep based on his resume.
Here is Deep's Resume:
Name: ${RESUME_DATA.profile.name}
Title: ${RESUME_DATA.profile.title}
Visa Status: Stamp 1G (Ireland)
Summary: ${RESUME_DATA.profile.summary}
Skills: ${RESUME_DATA.technicalExpertise.map(t => `${t.category}: ${t.skills.join(', ')}`).join('; ')}
Experience: ${RESUME_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}
Education: ${RESUME_DATA.education.map(e => `${e.degree} at ${e.institution}`).join('; ')}
Certifications: ${RESUME_DATA.certifications.join(', ')}
Contact Email: ${RESUME_DATA.profile.email}

If asked about something not in the resume, gently state that you don't have that information but they can contact Deep directly.
Keep answers concise and professional.
`;