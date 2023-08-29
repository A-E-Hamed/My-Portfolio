import { useState, useEffect } from "react";

const parseSkills = (mdContent) => {
    const skills = {};
  
    const lines = mdContent.split("\n");
    let currentSection = null;
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
  
      if (line.startsWith("## ")) {
        const section = line.substr(3).trim();
        currentSection = section;
        skills[currentSection] = [];
      } else if (currentSection) {
        const skill = line.trim();
        if (skill) {
          skills[currentSection].push(skill);
        }
      }
    }
  
    return skills;
  };

const SkillsArray = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch("/content/Skills.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setSkills(parseSkills(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return skills;
};

export default SkillsArray;