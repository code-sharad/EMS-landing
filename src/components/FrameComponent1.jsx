import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[5.731rem] pr-[1.25rem] pl-[5.312rem] box-border max-w-full shrink-0 text-left text-[1.5rem] text-white font-poppins mq800:pl-[1.313rem] mq800:pb-[3.75rem] mq800:box-border mq1150:pl-[2.625rem] mq1150:box-border ${className}`}
    >
      <div className="w-[62.625rem] flex flex-col items-end justify-start max-w-full">
        <div className="w-[39.188rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="h-[19.688rem] w-[21.188rem] relative max-w-full">
            <div className="absolute top-[5.044rem] left-[0rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_#bd8aff)] w-[17.938rem] h-[11.375rem]" />
            <img
              className="absolute top-[0rem] left-[3.063rem] w-[18.125rem] h-[19.688rem] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/business-analytics-on-tablet-screen@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap mq1150:justify-center">
          <div className="w-[24.563rem] flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem] box-border min-w-[24.563rem] max-w-full mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-[1.188rem]">
                  Accurate Time Tracking
                </div>
                <div className="h-[24.306rem] w-[24.738rem] absolute !m-[0] top-[-20.375rem] left-[-5rem]">
                  <div className="absolute top-[11.257rem] left-[0rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_#bd8aff)] w-[18.619rem] h-[16.388rem] [transform:_rotate(-37.2deg)] [transform-origin:0_0]" />
                  <img
                    className="absolute top-[4.563rem] left-[4.188rem] w-[19.438rem] h-[15.813rem] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/planner-calendar-for-time-management-1@2x.png"
                  />
                </div>
              </div>
              <div className="w-[21.688rem] relative font-light flex items-center max-w-full z-[1] mq450:text-[1.188rem]">
                Track employee hours and attendance with precision and ease.
              </div>
            </div>
          </div>
          <div className="w-[27.125rem] flex flex-col items-start justify-start gap-[2.5rem] min-w-[27.125rem] max-w-full mq800:min-w-full mq1150:flex-1 mq450:gap-[1.25rem]">
            <div className="w-[25.688rem] relative flex items-center max-w-full mq450:text-[1.188rem]">
              Insightful Performance Reviews
            </div>
            <div className="self-stretch relative font-light mq450:text-[1.188rem]">
              Track employee hours and attendance with precision and ease.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
