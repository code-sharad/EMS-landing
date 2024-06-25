import DistanceNebulae from "../components/DistanceNebulae";
import OurPlatform from "../components/OurPlatform";
import WomanPlanning from "../components/WomanPlanning";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0.812rem] pb-[35.625rem] pr-[2.437rem] pl-[4.437rem] box-border gap-[2.875rem] min-h-[213.75rem] leading-[normal] tracking-[normal] text-left text-[3rem] text-black font-poppins mq800:gap-[1.438rem] mq1350:pl-[2.188rem] mq1350:box-border">
      <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[5.813rem] mq800:text-[2.375rem] mq450:text-[1.813rem]">
        EMS
      </a>
      <DistanceNebulae />
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.187rem] box-border max-w-full">
        <OurPlatform />
      </section>
      <WomanPlanning />
    </div>
  );
};

export default Desktop;
