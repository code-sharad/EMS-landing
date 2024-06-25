import PropTypes from "prop-types";

const DistanceNebulae = ({ className = "" }) => {
  return (
    <div
      className={`w-[106.125rem] relative bg-black h-[41.125rem] overflow-hidden shrink-0 text-center text-[3rem] text-white font-poppins ${className}`}
    >
      <div className="absolute top-[8.188rem] left-[24.375rem] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(0,_194,_255,_0),_rgba(137,_96,_255,_0.98)_97.5%)] w-[51.25rem] h-[51.25rem]" />
      <div className="absolute top-[11.688rem] left-[calc(50%_-_311px)] font-light flex items-center justify-center w-[38.875rem]">
        Streamline Your Employee Management
      </div>
      <img
        className="absolute top-[-2.687rem] right-[81.75rem] w-[11.563rem] h-[15rem] object-cover"
        alt=""
        src="/digital-business-organizer-for-time-management@2x.png"
      />
      <img
        className="absolute top-[24.375rem] left-[13.813rem] w-[14.063rem] h-[16.75rem] object-cover"
        alt=""
        src="/task-management-system-for-productivity@2x.png"
      />
      <img
        className="absolute top-[-0.75rem] right-[15.125rem] w-[10.75rem] h-[11.125rem] object-cover"
        alt=""
        src="/planner-calendar-for-time-management@2x.png"
      />
      <img
        className="absolute top-[28.625rem] right-[18.625rem] w-[11.875rem] h-[11.438rem] object-cover"
        alt=""
        src="/agile-management-system-on-laptop@2x.png"
      />
      <div className="absolute top-[26.375rem] left-[calc(50%_-_295px)] text-[1.5rem] font-light flex items-center w-[36.938rem]">
        <span className="w-full">
          <p className="m-0">Effortlessly manage your employees</p>
          <p className="m-0">with our all-in-one platform.</p>
        </span>
      </div>
    </div>
  );
};

DistanceNebulae.propTypes = {
  className: PropTypes.string,
};

export default DistanceNebulae;
