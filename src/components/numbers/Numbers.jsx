// import { LetterRevealTest } from "../ui/LetterRevealTest";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <section className="h-[100vh] md:h-[655px] lg:h-[842px] overflow-hidden w-full relative bg-p-blue-600">
      <img
        src="/img/r.png"
        className="absolute top-0 right-0 h-full w-auto z-0"
      />
      <div className="my-[90px] px-[32px] z-30 relative">
        <div className="w-full h-[1px] bg-secondary-600 relative">
          <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] right-0"></div>
        </div>
        <div className="flex h-[237px]  items-end justify-center gap-[48px] my-[38px] relative">
          <div className="absolute top-0 right-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="60"
              viewBox="0 0 26 60"
              fill="none"
            >
              <path
                d="M14 0.839996V55.34L24.5 44.84L26 46.16L13 59.16L0 46.16L1.5 44.84L12 55.34V0.839996H14Z"
                fill="#7D7F83"
              />
            </svg>
          </div>
          <p className="text-secondary-000 font-muli font-normal text-[320px] leading-[294px] tracking-[-20px]">
            +350
          </p>
          <p className="text-secondary-000 font-muli font-normal text-[60px] leading-[84px] tracking-[-2.4px]">
            proyectos ejecutados
          </p>
        </div>
        <div className="w-full h-[1px] bg-secondary-600 relative">
          <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] left-0"></div>
        </div>
        <div className="flex h-[160px]  items-end justify-center gap-[24px] relative">
          <div className="absolute top-[50%] translate-y-[-50%] right-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z"
                fill="#7D7F83"
              />
            </svg>
          </div>
          <p className="text-secondary-000 font-muli font-normal text-[97px] tracking-[-7.76px]">
            +150
          </p>
          <p className="text-secondary-000 font-muli font-normal text-[24px] leading-[89px] tracking-[-1.2px]">
            profesionales
          </p>
        </div>
        <div className="w-full h-[1px] bg-secondary-600 relative">
          <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] right-0"></div>
        </div>
        <div className="flex h-[160px]  items-end justify-center gap-[24px] relative">
          <div className="absolute top-[50%] translate-y-[-50%] right-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z"
                fill="#7D7F83"
              />
            </svg>
          </div>
          <p className="text-secondary-000 font-muli font-normal text-[97px] tracking-[-7.76px]">
            250k
          </p>
          <p className="text-secondary-000 font-muli font-normal text-[24px] leading-[89px] tracking-[-1.2px]">
            h/año de Ingeniería
          </p>
        </div>
        <div className="w-full h-[1px] bg-secondary-600 relative">
          <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] left-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
