import PropTypes from "prop-types";

const OurPlatform = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[18.875rem] max-w-full text-left text-[2.25rem] text-black font-poppins mq800:gap-[4.688rem] mq450:gap-[2.375rem] mq1350:gap-[9.438rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[5.956rem] box-border max-w-full gap-[1.25rem] mq1350:flex-wrap">
        <h3 className="m-0 w-[30.313rem] relative text-inherit font-bold font-inherit flex items-center shrink-0 min-w-[30.313rem] max-w-full mq800:text-[1.813rem] mq800:min-w-full mq450:text-[1.375rem] mq1350:flex-1">
          Streamline your employee management with ease
        </h3>
        <div className="w-[45.688rem] relative text-[1.125rem] font-light flex items-center shrink-0 max-w-full">
          Our employee management platform offers a range of powerful features
          designed to simplify your HR processes. From seamless onboarding to
          efficient time tracking and insightful performance reviews, we've got
          you covered.
        </div>
      </div>
      <div className="w-[77.313rem] flex flex-row items-start justify-start py-[0rem] px-[3rem] box-border max-w-full text-[1.5rem] mq1350:pl-[1.5rem] mq1350:pr-[1.5rem] mq1350:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[10.875rem] max-w-full mq800:gap-[2.688rem] mq450:gap-[1.375rem] mq1150:gap-[5.438rem]">
          <div className="w-[62.625rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap">
            <div className="w-[24.563rem] flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem] box-border min-w-[24.563rem] max-w-full mq800:min-w-full mq1150:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
                <div className="self-stretch relative z-[2] mq450:text-[1.188rem]">
                  Accurate Time Tracking
                </div>
                <div className="w-[21.688rem] relative font-light flex items-center max-w-full z-[2] mq450:text-[1.188rem]">
                  Track employee hours and attendance with precision and ease.
                </div>
              </div>
            </div>
            <div className="w-[27.125rem] flex flex-col items-start justify-start gap-[2.5rem] min-w-[27.125rem] max-w-full mq800:min-w-full mq450:gap-[1.25rem] mq1150:flex-1">
              <div className="w-[25.688rem] relative flex items-center max-w-full z-[2] mq450:text-[1.188rem]">
                Insightful Performance Reviews
              </div>
              <div className="self-stretch relative font-light z-[2] mq450:text-[1.188rem]">
                Track employee hours and attendance with precision and ease.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-[3rem]">
            <div className="w-[64.438rem] flex flex-col items-start justify-start gap-[9.125rem] max-w-full mq800:gap-[2.25rem] mq450:gap-[1.125rem] mq1150:gap-[4.563rem]">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <h1 className="m-0 w-[59.375rem] relative text-inherit font-semibold font-inherit flex items-center justify-center shrink-0 max-w-full z-[2] mq800:text-[2.375rem] mq450:text-[1.813rem]">
                  FEATURES
                </h1>
              </div>
              <div className="relative text-left inline-block max-w-full z-[2] text-[2rem]">
                <p className="m-0 font-semibold">
                  How We Track Employee Progress
                </p>
                <p className="m-0 font-semibold">&nbsp;</p>
                <p className="m-0 text-[0.938rem]">
                  Our system provides detailed performance metrics and progress
                  tracking tools to help employees stay on track with their
                  goals. We utilize a variety of key performance indicators
                  (KPIs) to measure productivity, task completion rates, and
                  overall efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[78.813rem] flex flex-row items-start justify-start py-[0rem] px-[3rem] box-border max-w-full text-[2rem] mq1350:pl-[1.5rem] mq1350:pr-[1.5rem] mq1350:box-border">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap">
          <div className="w-[30.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.937rem] box-border min-w-[30.75rem] max-w-full mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch relative">
              <p className="m-0 font-semibold">Admin Features</p>
              <p className="m-0 font-semibold">&nbsp;</p>
              <p className="m-0 text-[1rem]">
                Admins have access to comprehensive tools for managing employee
                data, generating reports, and configuring system settings. With
                real-time data and analytics, admins can make informed decisions
                to optimize workforce performance.
              </p>
            </div>
          </div>
          <img
            className="w-[27.688rem] relative max-h-full object-cover max-w-full mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/dashboard@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

OurPlatform.propTypes = {
  className: PropTypes.string,
};

export default OurPlatform;
