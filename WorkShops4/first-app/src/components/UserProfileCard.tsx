
import React from "react";
import SkillName from "./SkillName";

export interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: Array<{ name: string; level?: "Beginner" | "Intermediate" | "Advanced" }>;
}

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      maxWidth: "300px",
      marginBottom: "16px",
    }}>
      {/* รูปโปรไฟล์ + ข้อมูล */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <img
          src={user.avatarUrl || "https://via.placeholder.com/80"}
          alt={user.name}
          style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", marginRight: "12px" }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>{user.name}</div>
          <div style={{ fontSize: "12px", color: "#555" }}>{user.email}</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
            <div style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: user.isOnline ? "green" : "gray",
              marginRight: "6px"
            }} />
            <span style={{ fontSize: "12px" }}>{user.isOnline ? "ออนไลน์" : "ออฟไลน์"}</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "4px" }}>ทักษะ:</div>
        <div>
          {user.skills.map((skill, index) => (
            <SkillName key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      {/* ปุ่มดูรายละเอียด */}
      <button
        onClick={() => onViewDetails(user.id)}
        style={{
          padding: "6px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        ดูรายละเอียด
      </button>
    </div>
  );
};

export default UserProfileCard;
