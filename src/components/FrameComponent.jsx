import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[80.5rem] flex flex-row items-start justify-start pt-[0rem] px-[3rem] pb-[5.231rem] box-border max-w-full shrink-0 text-center text-[3rem] text-white font-poppins mq800:pb-[3.375rem] mq800:box-border mq1350:pl-[1.5rem] mq1350:pr-[1.5rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[6.75rem] max-w-full mq800:gap-[1.688rem] mq1350:gap-[3.375rem]">
        <div className="w-[69.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h1 className="m-0 w-[59.375rem] relative text-inherit font-semibold font-inherit flex items-center justify-center shrink-0 max-w-full mq800:text-[2.375rem] mq450:text-[1.813rem]">
            FEATURES
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[2rem] mq1350:flex-wrap mq1350:justify-center">
          <div className="flex flex-col items-start justify-start pt-[2.375rem] px-[0rem] pb-[0rem] box-border min-w-[33.875rem] max-w-full mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch relative">
              <p className="m-0 font-semibold">
                How We Track Employee Progress
              </p>
              <p className="m-0 font-semibold">&nbsp;</p>
              <p className="m-0 text-[0.938rem]">
                Our system provides detailed performance metrics and progress
                tracking tools to help employees stay on track with their goals.
                We utilize a variety of key performance indicators (KPIs) to
                measure productivity, task completion rates, and overall
                efficiency.
              </p>
            </div>
          </div>
          <img
            className="w-[32.813rem] relative max-h-full object-cover max-w-full mq1350:flex-1"
            loading="lazy"
            alt=""
            src="/woman-planning-on-a-calendar@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
