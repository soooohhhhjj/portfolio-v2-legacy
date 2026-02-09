// src/pages/home/Skills.tsx
export default function Skills() {
  return (
    <section className="section-style relative flex flex-col h-[200vh]">
      <div className="section-content flex flex-col relative z-10">
        <div className="responsiveness">
          {/* Title */}
          <div className="text-center">
            <h1 className="font-bruno 
            lg:mt-[90px]
            text-[35px] sm:text-[38px] lg:text-5xl
            font-bold
            tracking-[2px] 
            text-white journey-header">
              Skills & Tools
            </h1>

            <p className="lg:mt-[12px] 
            text-[13px] sm:text-[16px] lg:text-[17px]
            max-w-[80%] md:max-w-[100%] mx-auto
             text-white tracking-[.3px] font-jura journey-subheader">
              The technologies I've built my foundation on -- and the ones I'm still exploring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
