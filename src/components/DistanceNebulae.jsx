import PropTypes from "prop-types";

const DistanceNebulae = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-10.25rem] mb-[7.125rem] w-[106.125rem] h-[41.125rem] bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[11.687rem] pb-[10.25rem] pr-[6.125rem] pl-[0rem] box-border relative gap-[109.687rem] max-w-[128%] text-center text-[3rem] text-black font-poppins mq800:gap-[27.438rem] mq800:pt-[4.938rem] mq800:pr-[1.5rem] mq800:pb-[4.375rem] mq800:box-border mq450:gap-[13.688rem] mq1350:gap-[54.813rem] mq1350:pt-[7.625rem] mq1350:pr-[3.063rem] mq1350:pb-[6.688rem] mq1350:box-border ${className}`}
    >
      <div className="w-[93.875rem] flex flex-row items-start justify-center max-w-full shrink-0">
        <div className="w-[38.875rem] flex flex-col items-end justify-start gap-[5.687rem] shrink-0 max-w-full mq800:gap-[2.813rem] mq450:gap-[1.438rem]">
          <h1 className="m-0 self-stretch relative text-inherit font-light font-inherit z-[3] mq800:text-[2.375rem] mq450:text-[1.813rem]">
            Streamline Your Employee Management
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.937rem] pl-[1rem] box-border max-w-full text-[1.5rem]">
            <div className="flex-1 relative font-light inline-block max-w-full z-[3] mq450:text-[1.188rem]">
              <p className="m-0">Effortlessly manage your employees</p>
              <p className="m-0">with our all-in-one platform.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82.875rem] h-[70.625rem] absolute !m-[0] right-[11.188rem] bottom-[-25.687rem]">
        <div className="absolute top-[12rem] left-[12.313rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_rgba(137,_96,_255,_0.98)_97.5%)] w-[51.25rem] h-[51.25rem]" />
        <div className="absolute top-[35.688rem] left-[25.625rem] w-[24.625rem] h-[34.938rem] z-[1] flex items-center justify-center">
          <img
            className="w-full h-full z-[1] object-contain absolute left-[0rem] top-[0rem] [transform:scale(2.015)]"
            alt=""
            src="/rectangle-29.svg"
          />
        </div>
        <img
          className="absolute top-[3.813rem] left-[0rem] w-[14.625rem] h-[17.375rem] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/digital-business-organizer-for-time-management@2x.png"
        />
        <img
          className="absolute top-[25.688rem] left-[3.625rem] w-[17.375rem] h-[19.25rem] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/task-management-system-for-productivity@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[57.438rem] w-[18.5rem] h-[15.75rem] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/planner-calendar-for-time-management@2x.png"
        />
        <img
          className="absolute top-[30.188rem] left-[68.188rem] w-[14.688rem] h-[15.313rem] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/agile-management-system-on-laptop@2x.png"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay shrink-0 z-[2]"
        loading="lazy"
        alt=""
        src="/texture@2x.png"
      />
    </section>
  );
};

DistanceNebulae.propTypes = {
  className: PropTypes.string,
};

export default DistanceNebulae;
