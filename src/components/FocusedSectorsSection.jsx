import financeImage from "@/assets/about.jpg";
import insurtechImage from "@/assets/insurtech.avif";
import ecommerceImage from "@/assets/ecommerce.avif";
import AnimatedUnderline from "./ui/AnimatedUnderline.jsx";

const sectors = [
  {
    title: "Finance",
    image: financeImage
  },
  {
    title: "Retail & eCommerce",
    image: ecommerceImage
  },
  {
    title: "Fintech",
    image: financeImage
  },
  {
    title: "Insuretech",
    image: insurtechImage
  }
];

function FocusedSectorsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
            <h2 className="text-[#0A1A36] text-3xl md:text-4xl font-extrabold mb-2">Focused Sectors</h2>
            <div className="flex justify-center">
              <AnimatedUnderline width={120} height={6} lineColor="#0A1A36" dotColor="#fff" duration={1.2} />
            </div>
        </div>
        {/* Sector Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow border border-gray-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover sector-image-zoom"
                  tabIndex={0}
                />
              </div>
              <div className="p-3 text-center bg-[#FFF5ED]">
                <h3 className="font-semibold text-[#0A1A36]">{sector.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusedSectorsSection;
