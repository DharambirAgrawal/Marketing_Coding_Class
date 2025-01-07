"use client";
import { useState } from "react";
import { sendFormData } from "@/lib/actions";
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
  const [pending, setPending] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

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

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    if (validateForm()) {
     
      // Call sendFormData function
      const res= await sendFormData(formData);

      if(res.success){
        setMessage({
          type: "success",
          message: "Form submitted successfully!",
        })
        
      }
      else{
        setMessage({
          type: "error",
          message: "Error submitting form",
        })
      }
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        className: "",
      });
      

    }
    setTimeout(() => {
      setMessage({
        type: "",
        message: "",
      });
    }
    , 5000);
    setPending(false);

  };

  return (
    <div
      className="form-container  scroll-my-10"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
      }}
      id="Form"
    >
      <h2 className="text-center text-2xl font-semibold mb-4">
        Join Our Class
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="form-group mb-4">
          <label htmlFor="phone" className="block mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Class Selection */}
        <div className="form-group mb-4">
          <label htmlFor="className" className="block mb-2">
            Select Class
          </label>
          <select
            id="className"
            name="className"
            value={formData.className}
            onChange={handleSelectChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">--Select a Class--</option>
            <option value="Python">Python</option>
            <option value="JavaScript">Javascript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>

          </select>
          {errors.className && (
            <p className="text-red-500 text-sm mt-1">{errors.className}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-group mb-4">
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            disabled={pending}
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
          <span className="block mt-2 text-center ">

          {message.type === "success" && (
            <p className="text-green-500 text-lg mt-1">{message.message}</p>
          )}
          {message.type === "error" && (
            <p className="text-red-500 text-lg mt-1">{message.message}</p>
          )}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Form;
