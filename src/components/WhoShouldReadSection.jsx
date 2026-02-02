import AnimatedUnderline from "./ui/AnimatedUnderline.jsx";
const audienceItems = [
  "Heads",
  "Customer Support",
  "Contact Centre",
  "Digital Heads",
  "Head of Digital Martech"
];

function WhoShouldReadSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-[#0A1A36] text-3xl md:text-4xl font-extrabold mb-2">Who Should Read This?</h2>
          <div className="flex justify-center">
            <AnimatedUnderline width={100} height={6} lineColor="#0A1A36" dotColor="#fff" duration={1.2} />
          </div>
        </div>
        <div className="overflow-x-hidden w-full mb-8 relative" style={{overflowY: 'hidden'}}>
          <div className="audience-marquee-mask" />
          <div className="audience-marquee">
            <div className="audience-marquee-inner gap-3">
              {audienceItems.concat(audienceItems).map((item, index) => (
                <div
                  key={index}
                  className="audience-pill flex items-center justify-center px-6 py-2 rounded text-base"
                  style={{ minWidth: 180, height: 60, marginRight: 16, textAlign: 'center' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoShouldReadSection;
