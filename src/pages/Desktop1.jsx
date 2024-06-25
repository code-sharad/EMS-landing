import DistanceNebulae from "../components/DistanceNebulae";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[35.625rem] box-border gap-[1.062rem] leading-[normal] tracking-[normal] text-left text-[3rem] text-white font-poppins">
      <div className="flex flex-row items-start justify-start py-[0rem] px-[4.437rem]">
        <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[5.813rem] mq800:text-[2.375rem] mq450:text-[1.813rem]">
          EMS
        </a>
      </div>
      <div className="w-[92.5rem] h-[0.75rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.562rem] box-border max-w-[103%] shrink-0">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-0.125rem]"
          alt=""
        />
      </div>
      <main className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[2.437rem] pl-[5.625rem] box-border gap-[10rem] max-w-full mq800:gap-[2.5rem] mq800:pl-[1.375rem] mq800:box-border mq1350:gap-[5rem] mq1350:pl-[2.813rem] mq1350:box-border mq450:gap-[1.25rem]">
        <DistanceNebulae />
        <section className="self-stretch flex flex-col items-start justify-start gap-[5.143rem] max-w-full text-left text-[2.25rem] text-white font-poppins mq800:gap-[2.563rem] mq450:gap-[1.313rem]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-[1.25rem] mq1350:flex-wrap">
            <h3 className="m-0 w-[30.313rem] relative text-inherit font-bold font-inherit flex items-center shrink-0 min-w-[30.313rem] max-w-full mq800:text-[1.813rem] mq800:min-w-full mq1350:flex-1 mq450:text-[1.375rem]">
              Streamline your employee management with ease
            </h3>
            <div className="w-[45.688rem] relative text-[1.125rem] font-light flex items-center shrink-0 max-w-full">
              Our employee management platform offers a range of powerful
              features designed to simplify your HR processes. From seamless
              onboarding to efficient time tracking and insightful performance
              reviews, we've got you covered.
            </div>
          </div>
          <FrameComponent1 />
          <FrameComponent />
          <div className="w-[78.813rem] flex flex-row items-start justify-start py-[0rem] px-[3rem] box-border max-w-full shrink-0 text-[2rem] mq1350:pl-[1.5rem] mq1350:pr-[1.5rem] mq1350:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap">
              <div className="w-[30.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.937rem] box-border min-w-[30.75rem] max-w-full mq800:min-w-full mq1150:flex-1">
                <div className="self-stretch relative">
                  <p className="m-0 font-semibold">Admin Features</p>
                  <p className="m-0 font-semibold">&nbsp;</p>
                  <p className="m-0 text-[1rem]">
                    Admins have access to comprehensive tools for managing
                    employee data, generating reports, and configuring system
                    settings. With real-time data and analytics, admins can make
                    informed decisions to optimize workforce performance.
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
        </section>
      </main>
    </div>
  );
};

export default Desktop;
