import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const server_url = 'http://localhost:3000'

const OtpInput = ({setIsUserValid}) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^[0-9]?$/.test(value)) return;

    e.target.value = value;

      const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }

    // Optional: You can handle OTP submission when all fields are filled
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    if (/^\d{4}$/.test(paste)) {
      paste.split("").forEach((digit, i) => {
        inputsRef.current[i].value = digit;
      });
      inputsRef.current[3].focus();
    }
  };

  const validatatingPassCode = async(e) => {
    try {
       const response = await axios.post(`${server_url}/validate-user`,otp)

    if (!response.data.success) {
      return toast.error(response.data.message)
    }
    setIsUserValid(true)
    return toast.success(response.data.message)
    } catch (error) {
      toast.error("Internal Server Error")
      console.error("Internal Server Error",error)
    }
   
    
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <h2 className="text-2xl font-semibold text-gray-100">Enter Passcode</h2>
      <div className="flex space-x-3" onPaste={handlePaste}>
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            className="w-14 h-14 text-center text-2xl border-2 border-gray-300 rounded-lg focus:border-[#2e3136] focus:outline-none transition-all"
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => (inputsRef.current[i] = el)}
          />
        ))}
      </div>
      <button onClick={validatatingPassCode} className="mt-4 bg-[rgb(28,141,100)] text-white px-6 py-2 rounded-md hover:bg-[rgb(24,120,85)]  transition-all">
        Verify
      </button>
    </div>
  );
};

export default OtpInput;
