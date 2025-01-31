import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timeline.css"; // Import optional additional styles

const workExperience = [
  {
    date: "Aug 2024 - Present",
    company: "Singapore Armed Forces",
    role: "Service Medic",
    description: [
      "Ensures that patients within the camp receive the best medical care at all times by dispensing medication, performing blood draws, administering vaccinations, and treating wounds.",
      "Assist doctors as needed, providing crucial support in medical procedures and emergency situations.",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/DBS_Bank_logo.svg",
  },
  {
    date: "Mar 2023 - May 2024",
    company: "OCBC",
    role: "Test Automation Engineer",
    description: [
      "Conduct comprehensive mobile and software testing, including writing and documenting test cases to validate user stories based on business requirements.",
      "Perform automation scripting with Tricentis Tosca, assist with regression testing for upcoming releases, and ensure quality assurance through thorough test execution.",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Singapore_Institute_of_Technology_logo.svg",
  },
];

const education = [
  {
    date: "2021 - 2024",
    institution: "Republic Polytechnic",
    degree: "Diploma in Information Technology",
    briefDescription: "learning about computer systems, software development, networking, and cybersecurity to design and manage digital solutions in a rapidly evolving tech landscape.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/University_logo.png",
  },
  {
    date: "2016 - 2020",
    institution: "Serangoon Garden Secondary School",
    degree: "N + O Levels",
    briefDescription:
      "Attained N Level certificate in Secondary 4 and proceeded to attain O Level certificate in Secondary 5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Highschool_logo.png",
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="timeline-wrapper">
      {/* Header */}
      <h2 style={{ fontFamily: "Courgette, cursive", color: "mediumorchid" }}className="text-white text-3xl font-semibold text-center mb-4">
        My Experience
      </h2>

      <div className="timeline-container w-[850px] px-8 py-6 bg-gray-900 text-white rounded-lg shadow-lg">
        {/* Tab Navigation */}
        <div className="tabs flex justify-center mb-6">
          <button
            className={`tab-button ${activeTab === "work" ? "active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </button>
          <button
            className={`tab-button ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Timeline Content */}
        <div className="timeline-content border border-gray-600 rounded-lg p-6">
          <AnimatePresence mode="wait">
            {activeTab === "work" ? (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {workExperience.map((job, index) => (
                  <div key={index} className="timeline-item flex items-start mb-6">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm text-gray-400">{job.date}</p>
                      <p className="text-lg font-bold">{job.company}</p>
                      <p className="text-gray-300">{job.role}</p>
                      <ul className="list-disc ml-4 text-gray-400 mt-2">
                        {job.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item flex items-start mb-6">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm text-gray-400">{edu.date}</p>
                      <p className="text-lg font-bold">{edu.institution}</p>
                      <p className="text-gray-300">{edu.degree}</p>
                      <p className="text-gray-400 italic">{edu.briefDescription}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
