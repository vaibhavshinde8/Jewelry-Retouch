import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../styles/FreeTrial.css";
import { ToastContainer, toast } from 'react-toastify';

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    state: "",
    country: "",
    services: [],
    instruction: "",
    files: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const services = checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value);
      return { ...prevState, services };
    });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const validate = () => {
    const newErrors = {};

    // Validation logic
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must not contain alphabets";
    }
    

    if (!formData.state) {
      newErrors.state = "Please select your state";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        state: formData.state,
        country: formData.country,
        services: formData.services.join(", "),
        instruction: formData.instruction,
        files: formData.files ? formData.files[0].name : "No files uploaded",
      };

      emailjs
        .send(
          "service_waggq6v", // Replace with your EmailJS Service ID
          "template_3t2y449", // Replace with your EmailJS Template ID
          templateParams,
          "JRZ4D4K-EU7nlq1lo" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("thank you for filling the form, we will get back to you shortly.")
          },
          (error) => {
            console.error("FAILED...", error);
            toast.error("Form submission failed.")
          }
        );

      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        state: "",
        country: "",
        services: [],
        instruction: "",
        files: null,
      });
    }
  };

  return (
    <section className="free-trial-form" id="trial">
      <h2>— FREE TRIAL —</h2>
      <p>Get up to 5 Photos free of cost</p>
      <h3>Try us before you decide to use our service</h3>
      <p>
        We offer up to 10 images for a free trial. there is an opportunity to
        justify our quality before submitting your final order.{" "}
      </p>
      <div className="form-layout">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <div className="contact-title">
          <h3 style={{textAlign:"start", marginBottom:"0px"}} >Contact Info</h3>
          <hr style={{width:"20%", marginBottom:"50px" }} />
          </div>
          <div className="contact-main-div" >
            <a
              href="https://www.google.com/maps?q=Noida, India" // Link to Google Maps with the address
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v1/24px.svg"
                alt="Location"
              />
            </a>
            <p style={{textAlign:"start"}}>D 247/1, Sector 63, Noida, India 201301</p>
          </div>
          <div className="contact-main-div">
            <a
              href="tel:+01204558100" // Click to call phone number
               className="contact-item"
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/phone/v1/24px.svg"
                alt="Phone"
              />
            </a>
            <p>
              <strong>Contact:</strong> 0120-4558100
            </p>
          </div>
          <div className="contact-main-div" >
            <a
              href="prashant@myjewelryretouch.com" // Open default mail client
               className="contact-item"
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/email/v1/24px.svg"
                alt="Email"
              />
            </a>
            <p>
              <strong>Email:</strong>prashant@myjewelryretouch.com
            </p>
          </div>
        </div>

        {/* Right Section: Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
           <div className="" style={{display:"flex", flexDirection:"column", flex:"auto" }}>
           <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)",  color: "black",
                ":placeholder": {
                  color: "black", 
                },}}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
           </div>

            <div className=""  style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            </div>
          </div>

          <div className="form-row">
          <div className=""  style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="address">Address</label>
          <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Full Address"
              value={formData.address}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
           <div className="" style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="phone">Phone</label>
           <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
           </div>
          </div>

          <div className="form-row">
            <div className="" style={{display:"flex", flexDirection:"column", flex:"auto", width:"50%"  }}>
              <label htmlFor="state">State</label>
              <input 
              name="state"
              id="state"
              placeholder="Enter Your State"
              value={formData.state}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
/>
              
            </div>

            <div className="" style={{display:"flex", flexDirection:"column", flex:"auto",  width:"50%" }}>
              <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            >
              <option value="" disabled>
                Select Your Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="South Africa">South Africa</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
              <option value="South Korea">South Korea</option>
              <option value="Argentina">Argentina</option>
              <option value="New Zealand">New Zealand</option>
            </select>
            </div>
          </div>

          <div className="form-row service-types" style={{display:"flex" ,flexDirection:"column"}}>
            <div className="" style={{display:"flex", alignItems:"start",  flexDirection:"column"}}>
              <h2 className="">Service Type</h2>
              <p style={{textAlign:"start", marginLeft:"10px" , width:"200px"}}>Pick One!</p>
            </div>
            <div className="main-super-main-checkbox" >
            <div className="super-main-checkbox" >
            
              <div className="main-checkbox " >
              <label className="checkbox-label"  >
              Background removal
            </label>
            <label class="round-checkbox">
              <input
              className="inp-checkbox"
                type="checkbox"
                value="Background removal"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
              
              </div>
            <div className="main-checkbox" >
            <label className="checkbox-label" > Metal Retouching
            </label>
            <label class="round-checkbox">
              <input
              className="inp-checkbox"
                type="checkbox"
                value="Metal Retouching"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
            </div>
             
            </div>
            <div className="super-main-checkbox">
            <div  className="main-checkbox" >
            <label className="checkbox-label" >Color Correction
            </label>
            <label class="round-checkbox">
              <input
              className="inp-checkbox"
                type="checkbox"
                value="Color Correction"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
            </div>
              
            <div className="main-checkbox" >
            <label className="checkbox-label" >Shadow Creation
            </label>
            <label class="round-checkbox">
              <input
              className="inp-checkbox"
                type="checkbox"
                value="Shadow Creation"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
              
            </div>
            </div>
            <div id="supeer-main-checkbox-ID" className="super-main-checkbox">
            <div id="main-checkbox-ID" className="main-checkbox">
              <label className="checkbox-label" > Re-color
            </label><label class="round-checkbox">
              <input
              className="inp-checkbox "
                type="checkbox"
                value="Re-color"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
              </div>
             
            <div  className="main-checkbox" >
            <label className="checkbox-label" > Gemstone Enhancement
            </label><label class="round-checkbox">
              <input
              className="inp-checkbox"
                type="checkbox"
                value="Gemstone Enhancement"
                onChange={handleCheckboxChange}
              /><span></span>
              </label>
            </div>
             
            </div>
          </div>
          </div>
         
          <div className="form-row" style={{display:"flex", flexDirection:'column', gap:'16px'}}>
            <label className="file-upload  " style={{ marginTop:'16px' }}>
              <strong>Upload Files:</strong> JPG / JPEG / PNG / GIF / TIF / TIFF
              / PSD / DNG/RAW/CR2</label>
              <input type="file" className="file-input" multiple onChange={handleFileUpload} />
              </div>
            

          <div className="form-row">
            <textarea
              name="instruction"
              placeholder="Instruction: Tell us what to do with your images."
              value={formData.instruction}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          

          <button type="submit" className="submit-button">
            Submit Form
          </button>
        </form>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default FreeTrialForm;
