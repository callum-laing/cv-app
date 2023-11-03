import React, { useState } from "react";

function ExperienceForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, by sending the data to a server or performing any other action.
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Company Name: </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title: </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="responsibilities">Job Responsibilities: </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="form-submit-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ExperienceForm;
