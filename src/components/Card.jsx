import React from "react";

const Card = () => {
  return (
    <div className="mx-[15px] md:mx-[100px]">
      <div className="w-full md:w-[1200px]">
        <div className="flex items-center justify-center mt-10">
          <div className="flex gap-[20px] flex-wrap  md:gap-[40px]">
            <div className="flex items-start px-[12px] py-0 gap-[10px] border-b-2 border-[#06286E]">
              <span class="text-[#06286E]  font-[Inter] font-semibold text-[20px] not-italic leading-normal">
                Study
              </span>
            </div>
            <div className="flex items-start px-[12px] py-0 gap-[10px]">
              <span class="text-[#696671]  font-[Inter] font-semibold text-[20px] not-italic leading-normal">
                Quiz
              </span>
            </div>
            <div className="flex items-start px-[12px] py-0 gap-[10px]">
              <span class="text-[#696671]  font-[Inter] font-semibold text-[20px] not-italic leading-normal">
                Test
              </span>
            </div>
            <div className="flex items-start px-[12px] py-0 gap-[10px]">
              <span class="text-[#696671]  font-[Inter] font-semibold text-[20px] not-italic leading-normal">
                Games
              </span>
            </div>
            <div className="flex items-start px-[12px] py-0 gap-[10px]">
              <span class="text-[#696671]  font-[Inter] font-semibold text-[20px] not-italic leading-normal">
                Others
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full md:w-[712px] p-[34px] h-[393.194px] rounded-[42.507px] customBg mt-10">
            <div>
              <div className="flex items-center justify-between">
                <div className="h-[34px] w-[34px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M12.7582 29.7612C12.7582 30.5405 13.3958 31.1781 14.1752 31.1781H19.8428C20.6221 31.1781 21.2597 30.5405 21.2597 29.7612V28.3443H12.7582V29.7612ZM17.009 2.83981C11.5397 2.83981 7.09058 7.28893 7.09058 12.7582C7.09058 16.1305 8.77671 19.0918 11.3413 20.8913V24.0935C11.3413 24.8728 11.9789 25.5105 12.7582 25.5105H21.2597C22.039 25.5105 22.6766 24.8728 22.6766 24.0935V20.8913C25.2413 19.0918 26.9274 16.1305 26.9274 12.7582C26.9274 7.28893 22.4783 2.83981 17.009 2.83981ZM21.0472 18.5676L19.8428 19.4177V22.6766H14.1752V19.4177L12.9708 18.5676C12.0321 17.9168 11.2647 17.0486 10.7342 16.037C10.2038 15.0254 9.92593 13.9005 9.92441 12.7582C9.92441 8.84753 13.0983 5.67364 17.009 5.67364C20.9197 5.67364 24.0936 8.84753 24.0936 12.7582C24.0936 15.0678 22.96 17.2357 21.0472 18.5676Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </div>
                <div className="w-[34px] h-[34px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.8249 7.50143V4.58258C26.5067 5.87197 30.7433 10.9445 30.7433 17.0089C30.7433 23.0733 26.5067 28.1459 20.8249 29.4353V26.5164C24.9198 25.2979 27.9094 21.5005 27.9094 17.0089C27.9094 12.5173 24.9198 8.71997 20.8249 7.50143ZM5.2388 12.7582V21.2597H10.9065L17.991 28.3443V5.67361L10.9065 12.7582H5.2388ZM24.3672 17.0089C24.3669 15.8217 24.0351 14.6582 23.4093 13.6493C22.7834 12.6405 21.8884 11.8264 20.8249 11.2988V22.7049C22.9219 21.6706 24.3672 19.5169 24.3672 17.0089Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-center text-[#fff] mt-[100px] text-[38.257px] leading-normal not-italic font-[700] tracking-wider">
                9 + 6 + 7x - 2x - 3
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-center gap-[140px]">
            <div className="w-[30px] h-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z"
                  fill="url(#paint0_linear_1_169)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_169"
                    x1="15"
                    y1="0.184647"
                    x2="15"
                    y2="30.2034"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#06286E" />
                    <stop offset="1" stop-color="#164EC0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className=" flex items-center gap-[43px]">
              <div className="w-[60px] h-[60px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                >
                  <path
                    d="M30 0.194031C35.9334 0.194031 41.7336 1.9535 46.6671 5.24994C51.6006 8.54638 55.4457 13.2317 57.7164 18.7135C59.987 24.1953 60.5811 30.2273 59.4235 36.0467C58.266 41.8662 55.4088 47.2116 51.2132 51.4072C47.0176 55.6028 41.6721 58.46 35.8527 59.6176C30.0333 60.7751 24.0013 60.181 18.5195 57.9104C13.0377 55.6398 8.35235 51.7946 5.05591 46.8611C1.75947 41.9277 0 36.1275 0 30.194C0.0154533 22.2423 3.18112 14.6206 8.80386 8.99789C14.4266 3.37515 22.0482 0.209481 30 0.194031ZM20.3661 31.8956L31.9046 42.2802C32.3325 42.6651 32.8861 42.8806 33.4615 42.8863C33.782 42.8876 34.0991 42.8214 34.3922 42.6921C34.6854 42.5627 34.948 42.3731 35.1631 42.1356C35.3678 41.912 35.5265 41.6502 35.6301 41.3652C35.7336 41.0803 35.78 40.7777 35.7666 40.4748C35.7532 40.1719 35.6802 39.8747 35.5518 39.6C35.4234 39.3253 35.2422 39.0786 35.0185 38.874L25.3846 30.194L35.0185 21.511C35.4459 21.0922 35.6939 20.5237 35.7103 19.9255C35.7266 19.3274 35.5099 18.7462 35.106 18.3047C34.702 17.8633 34.1424 17.596 33.5451 17.5592C32.9478 17.5225 32.3596 17.7192 31.9046 18.1079L20.3661 28.4925C20.1302 28.7087 19.9417 28.9716 19.8128 29.2645C19.6839 29.5574 19.6174 29.874 19.6174 30.194C19.6174 30.5141 19.6839 30.8306 19.8128 31.1235C19.9417 31.4165 20.1302 31.6794 20.3661 31.8956Z"
                    fill="url(#paint0_linear_1_171)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_171"
                      x1="30"
                      y1="0.194031"
                      x2="30"
                      y2="60.194"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#06286E" />
                      <stop offset="1" stop-color="#164EC0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[24px] font-[Inter] text-[#202B37] leading-normal not-italic">
                01/10
              </span>
              <div className="w-[60px] h-[60px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                >
                  <path
                    d="M30 0.194031C24.0666 0.194031 18.2664 1.9535 13.3329 5.24994C8.39943 8.54638 4.55426 13.2317 2.28363 18.7135C0.0129984 24.1953 -0.581101 30.2273 0.576455 36.0467C1.73401 41.8662 4.59123 47.2116 8.78681 51.4072C12.9824 55.6028 18.3279 58.46 24.1473 59.6176C29.9667 60.7751 35.9987 60.181 41.4805 57.9104C46.9623 55.6398 51.6476 51.7946 54.9441 46.8611C58.2405 41.9277 60 36.1275 60 30.194C59.9845 22.2423 56.8189 14.6206 51.1961 8.99789C45.5734 3.37515 37.9518 0.209481 30 0.194031ZM39.6339 31.8956L28.0954 42.2802C27.6675 42.6651 27.1139 42.8806 26.5385 42.8863C26.218 42.8876 25.9009 42.8214 25.6078 42.6921C25.3146 42.5627 25.052 42.3731 24.8369 42.1356C24.6322 41.912 24.4735 41.6502 24.3699 41.3652C24.2664 41.0803 24.22 40.7777 24.2334 40.4748C24.2468 40.1719 24.3198 39.8747 24.4482 39.6C24.5766 39.3253 24.7578 39.0786 24.9815 38.874L34.6154 30.194L24.9815 21.511C24.5541 21.0922 24.3061 20.5237 24.2897 19.9255C24.2734 19.3274 24.4901 18.7462 24.894 18.3047C25.298 17.8633 25.8576 17.596 26.4549 17.5592C27.0522 17.5225 27.6404 17.7192 28.0954 18.1079L39.6339 28.4925C39.8698 28.7087 40.0583 28.9716 40.1872 29.2645C40.3161 29.5574 40.3826 29.874 40.3826 30.194C40.3826 30.5141 40.3161 30.8306 40.1872 31.1235C40.0583 31.4165 39.8698 31.6794 39.6339 31.8956Z"
                    fill="url(#paint0_linear_1_173)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_173"
                      x1="30"
                      y1="0.194031"
                      x2="30"
                      y2="60.194"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#06286E" />
                      <stop offset="1" stop-color="#164EC0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-[30px] h-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z"
                  fill="url(#paint0_linear_1_174)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_174"
                    x1="15"
                    y1="0.194031"
                    x2="15"
                    y2="30.194"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#06286E" />
                    <stop offset="1" stop-color="#164EC0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
