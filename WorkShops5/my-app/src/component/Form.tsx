import React, { useState } from "react";
import "../App2.css";

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2>User Form Exercise</h2>

      <div className="form-fields">
        <input
          type="text"
          name="name"
          placeholder="กรอกชื่อของคุณ"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="กรอกอีเมลของคุณ"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-buttons">
        <button className="btn submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn clear" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="form-preview">
        <h3>ข้อมูลปัจจุบัน:</h3>
        <p>ชื่อ: {formData.name || "ยังไม่ได้กรอก"}</p>
        <p>อีเมล: {formData.email || "ยังไม่ได้กรอก"}</p>
      </div>
    </div>
  );
};

export default Form;
