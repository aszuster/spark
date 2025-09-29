export default function SectionLabel({ text, className }) {
  return (
    <div
      className={`absolute lg:top-[55px] left-[20px] lg:left-[35px] p-[8px] bg-[#F1F1F1] rounded-[6px] flex items-center justify-center ${className}`}
    >
      <span className="font-inter uppercase text-[14px] font-normal tracking-[-0.7px] text-p-blue-500">
        {text}
      </span>
    </div>
  );
}
