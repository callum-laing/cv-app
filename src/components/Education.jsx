// export default function Education() {
//   return (
//     <div className="education">
//       <h1>Educational Experience</h1>
//       <form className="generalForm">
//         <label htmlFor="">School</label>
//         <input type="text" />
//         <hr />
//         <label htmlFor="">Title of Study</label>
//         <input type="email" />
//         <hr />
//         <label htmlFor="">Number</label>
//         <input type="number" />
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";

function EducationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    studyName: "",
    startDate: "",
    endDate: "",
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
      <h2>Education Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="studyName">Study Name:</label>
          <input
            type="text"
            id="studyName"
            name="studyName"
            value={formData.studyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationForm;
