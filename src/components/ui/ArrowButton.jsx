import ArrowRight from "../../svg/arrow-right";

const ArrowButton = ({ text, children }) => {
  return (
    <button className="cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 backdrop-blur-sm rounded-[20px] flex items-center text-secondary-000 gap-[25px] py-[4px] pl-[16px] pr-[4px] w-auto group buttonBorder">
      <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10 text-[14px] ">{text}</span>
      {children}
      <div className="w-[44px] h-[35px] py-[13px] px-[3px] flex items-center justify-center rounded-[16px] bg-secondary-000 relative z-10">
        <ArrowRight stroke="#262535" />
      </div>
    </button>
  );
};

export default ArrowButton;
