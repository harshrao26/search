import { useEffect } from "react";
import { initOTPless } from "./components/initOtpless";
const Test = () => {
  useEffect(() => initOTPless(handleUserData), []);
  const handleUserData = (otplessUser) => {
    // Replace the following code with your own logic
    console.log(otplessUser);
    alert(JSON.stringify(otplessUser));
  };

  return (
    <>
      <div id="otpless-login-page"></div>
    </>
  );
};

export default Test;
