
import React from "react";

interface SkillNameProps {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

const SkillName: React.FC<SkillNameProps> = ({ name, level }) => {
  
  const style = {
    padding: "4px 8px",
    borderRadius: "12px",
    marginRight: "8px",
    marginBottom: "8px",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: "#e0e0e0",
    color: "#333",
  };

  if (level === "Beginner") {
    style.backgroundColor = "#bbf7d0";
    style.color = "#166534";
  } else if (level === "Intermediate") {
    style.backgroundColor = "#fef08a";
    style.color = "#854d0e";
  } else if (level === "Advanced") {
    style.backgroundColor = "#fecaca";
    style.color = "#991b1b";
  }

  return <span style={style}>{name} {level && `(${level})`}</span>;
};

export default SkillName;
