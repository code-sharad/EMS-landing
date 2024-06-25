import PropTypes from "prop-types";

const DistanceNebulae = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-11.438rem] w-[106.125rem] h-[41.125rem] bg-black overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[11.687rem] pb-[1.062rem] pr-[15.125rem] pl-[33.625rem] box-border relative gap-[3.125rem] max-w-[130%] text-center text-[3rem] text-white font-poppins mq800:gap-[1.563rem] mq800:pl-[8.375rem] mq800:pr-[3.75rem] mq800:box-border mq1350:pl-[16.813rem] mq1350:pr-[7.563rem] mq1350:box-border mq1150:pt-[7.625rem] mq1150:pb-[1.25rem] mq1150:box-border mq450:pl-[1.25rem] mq450:pt-[4.938rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="h-[62.125rem] w-[62.813rem] absolute !m-[0] bottom-[-18.312rem] left-[12.813rem]">
        <div className="absolute top-[10.875rem] left-[11.563rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_rgba(137,_96,_255,_0.98)_97.5%)] w-[51.25rem] h-[51.25rem]" />
        <img
          className="absolute top-[0rem] left-[0rem] w-[11.563rem] h-[15rem] object-contain"
          loading="lazy"
          alt=""
          src="/digital-business-organizer-for-time-management@2x.png"
        />
        <img
          className="absolute top-[27.063rem] left-[1rem] w-[14.063rem] h-[16.75rem] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/task-management-system-for-productivity@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[9.187rem] box-border min-h-[28.375rem] max-w-[calc(100%_-_296px)] shrink-0 mq1150:max-w-full mq450:pb-[6rem] mq450:box-border">
        <div className="self-stretch flex flex-col items-end justify-start gap-[5.687rem] max-w-full mq800:gap-[2.813rem] mq450:gap-[1.438rem]">
          <h1 className="m-0 self-stretch relative text-inherit font-light font-inherit z-[1] mq800:text-[2.375rem] mq450:text-[1.813rem]">
            Streamline Your Employee Management
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.937rem] pl-[1rem] box-border max-w-full text-[1.5rem]">
            <div className="flex-1 relative font-light inline-block max-w-full z-[1] mq450:text-[1.188rem]">
              <p className="m-0">Effortlessly manage your employees</p>
              <p className="m-0">with our all-in-one platform.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40.813rem] w-[15.375rem] flex flex-col items-end justify-start gap-[18.25rem] mq1150:hidden">
        <img
          className="w-[10.75rem] flex-1 relative max-h-full object-contain"
          loading="lazy"
          alt=""
          src="/planner-calendar-for-time-management@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start">
          <img
            className="h-[11.438rem] w-[11.875rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/agile-management-system-on-laptop@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

DistanceNebulae.propTypes = {
  className: PropTypes.string,
};

export default DistanceNebulae;
