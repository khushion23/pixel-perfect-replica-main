import contactBackground from "@/assets/contact-us.avif";

function QueriesSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
      <div className="w-full flex items-center justify-center">
        <div className="relative rounded-2xl min-h-[380px] w-[90vw] max-w-6xl overflow-hidden flex flex-row shadow-lg" style={{margin: '0 0'}}>
          {/* Background image */}
          <img src={contactBackground} alt="Contact" className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0" />
          {/* Orange overlay gradient */}
          <div className="absolute inset-0 rounded-2xl z-10" style={{background: 'linear-gradient(90deg, #E85D2A 40%, rgba(232,93,42,0.1) 100%)'}} />
          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center min-h-[260px] w-1/2 pl-12 pr-6 py-10">
            <h3 className="text-white text-4xl font-extrabold mb-4" style={{fontFamily: 'Lato, sans-serif'}}>For More Queries</h3>
            <div className="mb-6">
              <p className="font-extrabold text-black text-2xl mb-2">Raveena Kumari</p>
              <p className="font-bold text-black text-xl mb-2">+91 6202557868</p>
              <p className="font-bold text-black text-xl">raveena@observenow.co.in</p>
            </div>
            <div className="mt-6">
              <button className="bg-black text-white px-7 py-3 rounded font-semibold w-[200px] text-base">Express Your Interest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QueriesSection;
