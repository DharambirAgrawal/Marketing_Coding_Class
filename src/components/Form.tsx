'use client'
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", phone: "", className: "" };

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      valid = false;
    }

    // Class selection validation
    if (!formData.className) {
      newErrors.className = "Please select a class.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        className: "",
      });
      alert("Thank you for submitting your information!");
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
      <h2 className="text-center text-2xl font-semibold mb-4">Join Our Class</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="form-group mb-4">
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Class Selection */}
        <div className="form-group mb-4">
          <label htmlFor="className" className="block mb-2">Select Class</label>
          <select
            id="className"
            name="className"
            value={formData.className}
            onChange={handleSelectChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">--Select a Class--</option>
            <option value="Yoga">Yoga</option>
            <option value="Dance">Dance</option>
            <option value="Cooking">Cooking</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
          </select>
          {errors.className && <p className="text-red-500 text-sm mt-1">{errors.className}</p>}
        </div>

        {/* Submit Button */}
        <div className="form-group mb-4">
          <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
