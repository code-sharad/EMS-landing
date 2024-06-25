import PropTypes from "prop-types";

const WomanPlanning = ({ className = "" }) => {
  return (
    <section
      className={`w-full h-[75.563rem] absolute !m-[0] right-[0rem] bottom-[64.438rem] left-[0rem] ${className}`}
    >
      <div className="absolute top-[6.063rem] left-[49.75rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_#bd8aff)] w-[17.938rem] h-[11.375rem]" />
      <div className="absolute top-[11.757rem] left-[12.313rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_#bd8aff)] w-[18.619rem] h-[16.388rem] [transform:_rotate(-37.2deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[0rem] left-[-5.812rem] w-[100rem] h-[75rem] object-cover mix-blend-overlay z-[1]"
        alt=""
        src="/texture@2x.png"
      />
      <img
        className="absolute top-[52.938rem] left-[50.313rem] w-[32.813rem] h-[22.625rem] object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/woman-planning-on-a-calendar@2x.png"
      />
      <img
        className="absolute top-[5.063rem] left-[16.5rem] w-[19.438rem] h-[15.813rem] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/planner-calendar-for-time-management-1@2x.png"
      />
      <img
        className="absolute top-[1.019rem] left-[52.813rem] w-[18.125rem] h-[19.688rem] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/business-analytics-on-tablet-screen@2x.png"
      />
    </section>
  );
};

WomanPlanning.propTypes = {
  className: PropTypes.string,
};

export default WomanPlanning;
