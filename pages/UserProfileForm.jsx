import React, { useState } from 'react';
import './UserProfileForm.css';
import { Link, useNavigate } from 'react-router-dom';

function UserProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactDetails: '',
    skills: '',
    flexibleHours: false,
    remoteWork: false,
    workType: '',
    careerGrowth: '',
    industryPreferences: '',
    previousExperience: '',
    availability: '',
  });

  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/userProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        navigate('/dashboard');  // Use navigate() to redirect after form submission
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
      alert('Server error, please try again later');
    }
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Basic Information</h3>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        <input type="text" name="contactDetails" value={formData.contactDetails} onChange={handleChange} placeholder="Contact Details" required />
      </div>

      <div className="form-section">
        <h3>Skills</h3>
        <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="List your technical and soft skills (e.g., communication, project management, coding languages)" required></textarea>
      </div>

      <div className="form-section">
        <h3>Work Preferences</h3>
        <label>
          <input type="checkbox" name="flexibleHours" checked={formData.flexibleHours} onChange={handleChange} />
          Flexible Hours
        </label>
        <label>
          <input type="checkbox" name="remoteWork" checked={formData.remoteWork} onChange={handleChange} />
          Remote Work
        </label>
        <select name="workType" value={formData.workType} onChange={handleChange} required>
          <option value="">Select Work Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
        <input type="text" name="careerGrowth" value={formData.careerGrowth} onChange={handleChange} placeholder="Career Growth Preferences" />
        <input type="text" name="industryPreferences" value={formData.industryPreferences} onChange={handleChange} placeholder="Industry Preferences" />
      </div>

      <div className="form-section">
        <h3>Previous Job Experience</h3>
        <textarea name="previousExperience" value={formData.previousExperience} onChange={handleChange} placeholder="Describe your current or past roles, companies, years of experience, and key responsibilities"></textarea>
      </div>

      <div className="form-section">
        <h3>Availability</h3>
        <textarea name="availability" value={formData.availability} onChange={handleChange} placeholder="Specify your available time slots or days for work"></textarea>
      </div>

      <button type="submit" className="submit-btn">Update Profile</button>
      <Link to="/dashboard" className="back-link">Back to Dashboard</Link>
    </form>
  );
}

export default UserProfileForm;
