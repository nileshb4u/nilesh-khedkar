
import type { CVData } from './types';

export const cvData: CVData = {
  header: {
    name: "Nilesh S. Khedkar",
    title: "Applied AI Consultant | Digital Transformation Leader",
    certifications: ["PMP®", "Google Certified Project Manager®"],
    email: "nileshb4u@gmail.com",
    linkedin: "https://www.linkedin.com/in/nilesh-khedkar-pmp%C2%AE-24628b17/",
    github: "https://github.com/nileshb4u",
    researchGate: "https://www.researchgate.net/profile/Nilesh-Khedkar-4",
    twitter: "https://x.com/nileshb4u",
    // To use your own image:
    // 1. Place your image in the 'public/assets' folder (e.g., public/assets/my-photo.jpg)
    // 2. Update this URL to: "/assets/my-photo.jpg"
    imageUrl: "https://placehold.co/128x128/e0e0e0/333333?text=NK",
    cvPdfUrl: "#",
  },
  aboutMe: {
    title: "Applied AI & Transformation",
    content: "I am an Applied AI Consultant and Digital Transformation Leader with 20+ years of industrial experience. My mission is to demystify AI and help organizations transition from 'AI hype' to 'AI reality' by deploying practical, SME-driven solutions that solve real operational bottlenecks.",
    points: [
      "Practical AI Architect: Specializing in moving AI models from proof-of-concept to production-grade tools that field operators and engineers actually use.",
      "SME-Driven Frameworks: Creator of the MAHER Agentic AI framework, which leverages Domain Subject Matter Expertise to build intelligent assistants with high accuracy and business relevance.",
      "Industrial Digitalization: Expert in integrating AI within legacy Maintenance, Reliability, and Supply Chain ecosystems (SAP/Primavera/XR).",
      "Strategic Value Realization: Defining clear economic evaluation frameworks for AI projects, ensuring technology investments translate into measurable cost avoidance and efficiency gains.",
      "Sustainable Innovation: Aligning digital transformation with Circular Economy principles, turning waste management and material optimization into digital-first revenue savers."
    ],
    note: "My unique value lies in the 'Middle Layer'—I speak the language of both the field engineer and the data scientist, ensuring that AI solutions are operationally viable and economically sound."
  },
  recognitions: [
    { year: 2022, description: "Corporate Award for developing MAHER RPA – The first non-assisted RPA deployed to 50+ maintenance organizations, proving the scalability of practical automation." },
    { year: 2023, description: "Corporate recognition for Inventory Optimization Program, merging data science with circular economy principles for industrial resource efficiency." },
    { year: 2024, description: "Engineering Services Excellence Award for Circular Economy digitalization initiative, achieving $400M+ in cost avoidance." },
    { year: 2025, description: "Winner Aramco Immersive Industry Upstream Hackathon for 'Bassmah', a gamified web platform for sustainability awareness." },
    { year: 2025, description: "EVP Selection: MAHER Agentic AI Assistant chosen for enterprise deployment, projected to generate $50M+ in operational savings." }
  ],
  experience: [
    {
      company: "Saudi Aramco",
      location: "Dhahran, KSA",
      period: "2018 - Present",
      title: "Senior Maintenance Engineer & AI Champion",
      role: "Applied AI Lead",
      details: [
        "Architected the MAHER SME-Driven AI/ML Framework, a production-grade Agentic AI system that automates decision support for maintenance workflows, resulting in projected $50M+ savings.",
        "Built and deployed a full-stack Python + React Maintenance AI Assistant that utilizes RAG (Retrieval-Augmented Generation) to provide technical answers from massive corporate knowledge bases.",
        "Led the Digitalization Strategy for 50+ departments, creating a standardized pipeline for identifying, vetting, and scaling AI use cases across the industrial enterprise.",
        "Co-developed industrial XR solutions with Qualcomm, integrating AI-driven audio assistants into AR safety gear for field technicians.",
        "Pioneered the 'Citizen Developer' movement, mentoring 100+ engineers in building their own PowerBI and automated reporting tools to drive a data-first culture."
      ]
    },
    {
      company: "Industrial Consulting Projects",
      location: "Global",
      period: "2010 - 2018",
      title: "Consultant & Lead Planner",
      role: "Digital Process Optimization",
      details: [
        "Managed large-scale digital turnarounds (STO) for global energy leaders (HPCL-Mittal, Borouge), focusing on integrating SAP PM/PS with real-time scheduling tools.",
        "Implemented scope-challenge algorithms that reduced project scope by 60% through data-driven risk assessment.",
        "Developed custom cost-monitoring dashboards for C-suite stakeholders, providing real-time visibility into $100M+ capital projects."
      ]
    }
  ],
  certifications: [
    { name: "Google Certified Project Management Professional", date: "2024" },
    { name: "Certified PMP® (Project Management Professional)", date: "2019" },
    { name: "Certified Operational Excellence External Assessor", date: "2019" },
    { name: "Piping Engineering - IIT Bombay", date: "2007" }
  ],
  education: [
      { degree: "Bachelor of Engineering - Mechanical", institution: "Nagpur University" },
      { degree: "Diploma in Mechanical Engineering", institution: "S. D. M. Polytechnic" }
  ],
  achievements: [
    {
        title: "Agentic AI Launch",
        description: "Leading the beta launch of the MAHER Agentic AI platform, demonstrating practical LLM applications in heavy industry.",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award3.jpg"
    },
    {
        title: "Engineering Excellence 2024",
        description: "Recognition for the Circular Economy digitalization initiative, combining AI with sustainability.",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award1.jpg"
    },
    {
        title: "Hackathon Winner 2025",
        description: "Winning the Immersive Industry Hackathon by building a functional web application for industrial gamification in 48 hours.",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award11.jpg"
    }
    {
        title: "G-talk - Excess material management and applciation of digitalization 2024 ",
        description: "Presented a in person session which was broadcasted to more than 300 attendees on how deployment of digitalization and AI can improve maniteance practices ",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award4.jpg"
    },
    {
        title: "Annual achievement award by IS -SVP for introdcution of MAHER 2022",
        description: "Received a presidetgius recognition from Industrial services Senior VIce President for leading development and deployment of a Digitalization and AI long term initiative",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award6.jpg"
    },
    {
        title: "Annual achievement award by IS -SVP for introdcution of MAHER 2022",
        description: "Received a presidetgius recognition from Industrial services Senior VIce President for leading development and deployment of a Digitalization and AI long term initiative",
        imageUrl: "https://raw.githubusercontent.com/nileshb4u/nilesh-khedkar/main/assets/award6.jpg"
    },
  ]
};

export const getSystemPrompt = (language: string): string => {
  return `You are Nilesh S. Khedkar, an Applied AI Consultant and Digital Transformation Leader. You are speaking to business leaders, project managers, and engineers who are interested in how AI can practically transform their operations.

Your tone is expert, pragmatic, and helpful. You don't just talk about AI theory; you talk about implementation, SME-driven accuracy, and business value. You bridge the gap between "IT" and "Operations."

Answer questions *exclusively* based on the CV data provided. Speak in the first person ("I", "my"). 

If someone asks how you can help them, focus on:
1. Strategy & Roadmapping for AI adoption.
2. Developing custom Agentic AI/LLM tools (like MAHER).
3. Digitalizing industrial processes (Maintenance, Reliability, Supply Chain).
4. Realizing ROI from digital investments.

IMPORTANT: Respond in ${language}.

CV Data:
${JSON.stringify(cvData, null, 2)}`;
};

export const getGreeting = (language: string): string => {
    const greetings: { [key: string]: string } = {
        'spanish': "¡Hola! Soy Nilesh Khedkar, Consultor de IA Aplicada. Ayudo a las organizaciones a implementar soluciones de IA prácticas y basadas en el valor. ¿Cómo puedo ayudarle hoy?",
        'french': "Bonjour ! Je suis Nilesh Khedkar, consultant en IA appliquée. J'aide les organisations à mettre en œuvre des solutions d'IA pratiques et axées sur la valeur. Comment puis-je vous aider aujourd'hui ?",
        'german': "Hallo! Ich bin Nilesh Khedkar, Berater für angewandte KI. Ich helfe Unternehmen dabei, praktische und wertorientierte KI-Lösungen zu implementieren. Wie kann ich Ihnen heute helfen?",
        'hindi': "नमस्ते! मैं नीलेश खेड़कर हूँ, एक एप्लाइड AI कंसल्टेंट। मैं संगठनों को व्यावहारिक और मूल्य-आधारित AI समाधान लागू करने में मदद करता हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?",
        'arabic': "مرحباً! أنا نيلش خيدكر، مستشار في الذكاء الاصطناعي التطبيقي. أساعد المؤسسات على تنفيذ حلول ذكاء اصطناعي عملية وقائمة على القيمة. كيف يمكنني مساعدتك اليوم؟",
        'japanese': "こんにちは！ニレシュ・ケードカルです。実用的なAIコンサルタントとして、組織が価値中心のAIソリューションを導入するお手伝いをしています。本日はどのようなご用件でしょうか？",
        'mandarin': "您好！我是尼莱什·凯德卡尔，应用人工智能顾问。我帮助组织实施务实且以价值为导向的人工智能解决方案。今天我能为您做些什么？",
        'english': "Hello! I'm Nilesh Khedkar, an Applied AI Consultant. I specialize in helping organizations bridge the gap between industrial operations and practical AI implementation. How can I help you explore my expertise today?"
    };
    return greetings[language.toLowerCase()] || greetings['english'];
};
