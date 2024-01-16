import React, { useState } from "react";
import logo from "../assets/hyggexlogo.png";
import "../App.css";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
    const [active,setActive] = useState(false)
  return (
    <div className="mx-[15px] md:mx-[100px]">
        <div className="w-full md:w-[1200px] flex items-center justify-between">
      <div className="w-[111.544px] h-[113.651px] flex items-center  flex-shrink-0">
        <img src={logo} className="" />

        <div className="flex flex-shrink-0 -ml-2">
          <div className="w-[21.722px] h-[24.796px] -mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
            >
              <path
                d="M3.56129 0.564392H0.109009V25.3607H3.56129V13.6453H18.3785V25.3607H21.8308V0.564392H18.3785V10.4013H3.56129V0.564392Z"
                fill="#06286E"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
          >
            <path
              d="M0.466675 0.985596L8.64578 19.3607C7.90809 21.957 6.93629 22.8104 4.58902 22.8104C4.11977 22.8104 3.5163 22.7425 2.67872 22.6058V25.748C3.68382 25.8498 4.4215 25.8847 4.92406 25.8847C9.38245 25.8847 10.1201 24.2108 12.2989 19.224L20.2772 0.985596H16.4898L10.4895 16.4581L4.3549 0.985596H0.466675Z"
              fill="#06286E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
          >
            <path
              d="M16.9977 0.985541V3.991C15.5567 1.73716 13.1428 0.404602 9.99125 0.404602C4.32693 0.404602 0.371094 4.46912 0.371094 10.2076C0.371094 15.911 4.29262 19.8727 10.0256 19.8727C12.9077 19.8727 15.1207 18.8147 16.9977 16.6627V17.2775C16.9977 21.2732 15.154 22.8782 10.2264 22.8782C7.24335 22.8782 5.56717 21.9569 5.23213 19.9755H1.57803C1.94637 23.8005 4.9304 25.9525 10.1931 25.9525C17.2318 25.9525 20.2492 23.1856 20.2492 17.004V0.985541H16.9977ZM10.4948 3.47895C14.6515 3.47895 17.2318 6.00629 17.2318 10.2076C17.2318 14.3399 14.6515 16.7994 10.4948 16.7994C6.33815 16.7994 3.79007 14.3739 3.79007 10.2076C3.79007 6.00629 6.33815 3.47895 10.4948 3.47895Z"
              fill="#06286E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
          >
            <path
              d="M16.9977 0.985541V3.991C15.5567 1.73716 13.1428 0.404602 9.99125 0.404602C4.32693 0.404602 0.371094 4.46912 0.371094 10.2076C0.371094 15.911 4.29262 19.8727 10.0256 19.8727C12.9077 19.8727 15.1207 18.8147 16.9977 16.6627V17.2775C16.9977 21.2732 15.154 22.8782 10.2264 22.8782C7.24335 22.8782 5.56717 21.9569 5.23213 19.9755H1.57803C1.94637 23.8005 4.9304 25.9525 10.1931 25.9525C17.2318 25.9525 20.2492 23.1856 20.2492 17.004V0.985541H16.9977ZM10.4948 3.47895C14.6515 3.47895 17.2318 6.00629 17.2318 10.2076C17.2318 14.3399 14.6515 16.7994 10.4948 16.7994C6.33815 16.7994 3.79007 14.3739 3.79007 10.2076C3.79007 6.00629 6.33815 3.47895 10.4948 3.47895Z"
              fill="#06286E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.9861 10.8564V10.2076C19.9861 4.09382 16.332 0.404602 10.1642 0.404602C4.1305 0.404602 0.275574 4.2645 0.275574 10.2076C0.275574 16.1156 4.0972 19.8727 10.1642 19.8727C14.9576 19.8727 18.4109 17.6189 19.6844 13.6572H15.8961C15.1594 15.6725 13.014 16.7994 10.1642 16.7994C6.30924 16.7994 3.72785 14.4428 3.72785 10.8564H19.9861ZM3.79546 8.4997C4.33132 5.35749 6.71188 3.47895 10.1642 3.47895C13.6507 3.47895 15.997 5.39142 16.4996 8.4997H3.79546Z"
              fill="#06286E"
            />
          </svg>
          <div className="-mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                d="M1.28395 0.564392L10.8375 12.7919L0.814697 25.3607H8.45694L14.4916 17.4024L20.1559 25.3607H28L18.0781 12.724L27.665 0.564392H20.1559L14.5582 8.31709L8.9605 0.564392H1.28395Z"
                fill="#06286E"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={` flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0  gap-[40px] md:translate-x-0 ${active ? "translate-x-0" : "-translate-x-full"} transition ease-in-out duration-300 ${active ? "block" : "hidden"} z-40`}>
        <span className="navigation text-[#3A3740] font-[400] text-[18px] leading-normal not-italic font-[Inter]">
          Home
        </span>
        <span className="navigation text-[#3A3740] font-[400] text-[18px] leading-normal not-italic font-[Inter]">
          Flashcard
        </span>
        <span className="navigation text-[#3A3740] font-[400] text-[18px] leading-normal not-italic font-[Inter]">
          Content
        </span>
        <span className="navigation text-[#3A3740] font-[400] text-[18px] leading-normal not-italic font-[Inter]">
          FAQ
        </span>
        <button className="flex items-center justify-center px-[40px] py-[13px] rounded-[32px] bg-gradient-to-b from-blue-900 to-blue-500">
          <span className="text-white font-[500] text-[18px] leading-normal not-italic font-[Inter]">
            Login
          </span>
        </button>
      </div>
      <div className="w-[30px] h-[30px] md:hidden" onClick={()=>setActive(!active)}>
        <SlMenu />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
