import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        jobFunction: "",
        jobTitle: "",
        email: "",
        phone: "",
        country: "",
        inquiryType: "",
        comments: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <div className="min-h-screen bg-white text-[#0d152e]">
            <Navigation />

            {/* MAIN WRAPPER */}
            <div className="pt-28 pb-20">
                {/* Perfect centered container with left/right gap */}
                <div className="container mx-auto px-6 grid lg:grid-cols-2 xl:grid-cols-[1fr_540px] gap-16">

                    {/* LEFT SIDE — FULL WIDTH */}
                    <div className="w-full">
                        <h1 className="text-3xl md:text-[40px] font-bold tracking-tight mb-6">
                            GETTING IN TOUCH
                        </h1>

                        <div className="space-y-6 text-base md:text-[17px] leading-[26px] text-[#304266]">
                            <p>
                                Do you have a question or need more info? Please enter your
                                information and describe your inquiry, and we’ll get back to you
                                as soon as possible. Thanks!
                            </p>

                            <p>
                                We do not accept job applications from this form. Please visit our{" "}
                                <a href="#" className="text-blue-600 font-medium hover:underline">
                                    careers page
                                </a>{" "}
                                for opportunities.
                            </p>

                            <p>
                                Looking for product support? To get the fastest response,{" "}
                                <a href="#" className="text-blue-600 font-medium hover:underline">
                                    please open a ticket within our support portal
                                </a>.
                            </p>

                            <p>
                                Need an <strong className="text-black">Employment Verification</strong>{" "}
                                for one of our employees?{" "}
                                <a href="#" className="text-blue-600 font-medium hover:underline">
                                    Click here
                                </a>.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM — PLACEHOLDER DESIGN */}
                    <div className="bg-white border shadow-sm rounded-2xl p-6 md:p-10 w-full max-w-lg mx-auto lg:mx-0">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* SIMPLE PLACEHOLDER INPUT FIELDS */}
                            {[
                                ["First Name *", "firstName"],
                                ["Last Name *", "lastName"],
                                ["Company Name *", "companyName"],
                                ["Email Address *", "email"],
                                ["Phone Number *", "phone"],
                            ].map(([label, field]) => (
                                <div key={field}>
                                    <input
                                        type="text"
                                        required={label.includes("*")}
                                        placeholder={label}
                                        value={formData[field as keyof typeof formData]}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="
                      w-full 
                      bg-transparent 
                      border-b 
                      border-blue-500 
                      focus:border-blue-700 
                      text-[15px] 
                      py-2 
                      focus:outline-none 
                      placeholder:text-gray-500
                    "
                                    />
                                </div>
                            ))}

                            {/* COUNTRY DROPDOWN */}
                            <div>
                                <select
                                    required
                                    value={formData.country}
                                    onChange={(e) => handleInputChange("country", e.target.value)}
                                    className="
                    w-full
                    bg-transparent
                    border-0
                    border-b
                    border-blue-500
                    focus:border-blue-700
                    text-[15px]
                    py-2
                    focus:outline-none
                    appearance-none
                  "
                                >
                                    <option value="" disabled>Country *</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                    <option>Australia</option>
                                    <option>Japan</option>
                                </select>
                            </div>


                            {/* INQUIRY TYPE */}
                            <div>
                                <select
                                    required
                                    value={formData.inquiryType}
                                    onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                                    className="
                    w-full
                    bg-transparent
                    border-0
                    border-b
                    border-blue-500
                    focus:border-blue-700
                    text-[15px]
                    py-2
                    focus:outline-none
                    appearance-none
                  "
                                >
                                    <option value="" disabled>Inquiry Type *</option>
                                    <option>General Inquiry</option>
                                    <option>Sales</option>
                                    <option>Support</option>
                                </select>
                            </div>

                            {/* COMMENTS */}
                            <div>
                                <textarea
                                    placeholder="Comments"
                                    value={formData.comments}
                                    onChange={(e) => handleInputChange("comments", e.target.value)}
                                    className="
                    w-full 
                    bg-transparent 
                    border 
                    border-blue-500 
                    focus:border-blue-700 
                    rounded-md
                    text-[15px] 
                    p-3 
                    focus:outline-none 
                    placeholder:text-gray-500
                    min-h-[120px]
                  "
                                />
                            </div>

                            {/* CONSENT TEXT */}
                            <p className="text-[13px] text-[#304266] leading-[20px]">
                                By submitting this form, I understand MOVICLOUD will process my personal
                                information in accordance with their Privacy Notice. I understand I may
                                withdraw my consent or update my preferences here at any time.
                            </p>

                            {/* SUBMIT BUTTON CENTERED */}
                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="
                    px-10 
                    py-3 
                    bg-blue-600 
                    text-white 
                    rounded-full 
                    hover:bg-blue-700 
                    transition-all 
                    text-[15px]
                    font-medium
                  "
                                >
                                    SUBMIT
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
