import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timeline.css"; // Import the CSS

const workExperience = [
  {
    date: "Aug 2024 - Present",
    company: "Singapore Armed Forces",
    role: "Service Medic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Agilite.svg/1024px-Agilite.svg.png",
  },
  {
    date: "Mar 2023 - May 2024",
    company: "OCBC",
    role: "Test Automation Engineer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Maximl_logo.png",
  },
];

const education = [
  {
    date: "2021-2024",
    institution: "Republic Polytechnic",
    degree: "Diploma in Information Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/University_logo.png",
  },
  {
    date: "2016-2020",
    institution: "Serangoon Garden Secondary School",
    degree: "N + O Levels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Highschool_logo.png",
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="timeline-wrapper">
      {/* 🔥 "My Experience" Header */}
      <h2
        style={{ fontFamily: "Courgette, cursive", color: "mediumorchid" }}
        className="experience-header"
      >
        My Experience
      </h2>

      <div className="timeline-container w-[850px] px-8 py-6">
        {/* Tab Navigation */}
        <div className="tabs">
          <button
            className={`tab-button font-extralight ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`tab-button font-extralight ${
              activeTab === "work" ? "active" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </button>
        </div>

        {/* Timeline Content */}
        <div
          className="timeline-content font-extralight"
          style={{ fontWeight: 200 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="timeline-logo"
                    />
                    <div>
                      <p className="date">{edu.date}</p>
                      <p className="company">{edu.institution}</p>
                      <p className="role">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {workExperience.map((job, index) => (
                  <div key={index} className="timeline-item">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="timeline-logo"
                    />
                    <div>
                      <p className="date">{job.date}</p>
                      <p className="company">{job.company}</p>
                      <p className="role">{job.role}</p>
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
