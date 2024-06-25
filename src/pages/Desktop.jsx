import { useEffect } from "react";
import DistanceNebulae from "../components/DistanceNebulae";

const Desktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="w-full relative bg-black overflow-hidden flex flex-row flex-wrap items-center justify-center py-[0.812rem] px-[0rem] box-border gap-[7.187rem_9.062rem] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-[3rem] text-white font-poppins sm:w-auto sm:[align-self:unset] sm:gap-[2.5rem] sm:items-center sm:justify-center [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
      data-animate-on-scroll
    >
      <div className="relative font-light">EMS</div>
      <DistanceNebulae />
      <div className="flex flex-row items-center justify-center text-[2.25rem]">
        <b className="w-[30.313rem] relative flex items-center shrink-0">
          Streamline your employee management with ease
        </b>
      </div>
      <div className="flex flex-row items-center justify-center text-[1.125rem]">
        <div className="w-[45.688rem] relative font-light flex items-center h-[6rem] shrink-0">
          Our employee management platform offers a range of powerful features
          designed to simplify your HR processes. From seamless onboarding to
          efficient time tracking and insightful performance reviews, we've got
          you covered.
        </div>
      </div>
      <div className="w-[26.938rem] h-[30.813rem] flex flex-row flex-wrap items-end justify-start text-[1.5rem]">
        <div className="w-[21.375rem] flex flex-row flex-wrap items-end justify-start gap-[1.5rem_4.062rem]">
          <img
            className="w-[17.5rem] relative h-[14.563rem] object-cover"
            alt=""
            src="/planner-calendar-for-time-management@2x.png"
          />
          <div className="w-[24.563rem] relative font-medium flex items-center h-[2.063rem] shrink-0">
            Accurate Time Tracking
          </div>
          <div className="w-[19.5rem] relative font-light flex items-center h-[5.75rem] shrink-0">
            Track employee hours and attendance with precision and ease.
          </div>
        </div>
      </div>
      <div className="w-[27.188rem] h-[32.063rem] flex flex-col items-start justify-center gap-[1.5rem] text-[1.5rem]">
        <img
          className="w-[18.125rem] relative h-[19.688rem] object-cover"
          alt=""
          src="/business-analytics-on-tablet-screen@2x.png"
        />
        <div className="w-[25.688rem] relative font-medium flex items-center h-[1.688rem] shrink-0">
          Insightful Performance Reviews
        </div>
        <div className="w-[27.125rem] relative font-light flex items-center h-[5.063rem] shrink-0">
          Track employee hours and attendance with precision and ease.
        </div>
      </div>
      <div className="w-[59.375rem] relative font-semibold text-center flex items-center justify-center shrink-0">
        FEATURES
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start text-[2rem]">
        <div className="w-[33.875rem] relative flex items-center h-[20.25rem] shrink-0">
          <span className="w-full">
            <p className="m-0 font-semibold">How We Track Employee Progress</p>
            <p className="m-0 font-semibold">&nbsp;</p>
            <p className="m-0 text-[0.938rem]">
              Our system provides detailed performance metrics and progress
              tracking tools to help employees stay on track with their goals.
              We utilize a variety of key performance indicators (KPIs) to
              measure productivity, task completion rates, and overall
              efficiency.
            </p>
          </span>
        </div>
      </div>
      <img
        className="w-[32.813rem] relative h-[22.625rem] object-cover"
        alt=""
        src="/woman-planning-on-a-calendar@2x.png"
      />
      <div className="w-[33.875rem] h-[20.25rem] flex flex-row flex-wrap items-center justify-start text-[2rem]">
        <div className="w-[30.75rem] relative flex items-center shrink-0">
          <span className="w-full">
            <p className="m-0 font-semibold">Admin Features</p>
            <p className="m-0 font-semibold">&nbsp;</p>
            <p className="m-0 text-[1rem]">
              Admins have access to comprehensive tools for managing employee
              data, generating reports, and configuring system settings. With
              real-time data and analytics, admins can make informed decisions
              to optimize workforce performance.
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <img
          className="w-[27.688rem] relative h-[18.438rem] object-cover"
          alt=""
          src="/dashboard@2x.png"
        />
      </div>
    </div>
  );
};

export default Desktop;
