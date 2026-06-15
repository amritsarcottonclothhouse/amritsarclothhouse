import { ArrowRight, ChevronRight, CheckCircle2, Store, Star, Truck, ShieldCheck, HelpCircle } from "lucide-react";
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {

  const navigate = useNavigate();

  const categories = [
    { name: 'Luxury Silk', count: '120+ Designs' },
    { name: 'Premium Linen', count: '85+ Designs' },
    { name: 'Sustainable Cotton', count: '200+ Designs' },
    { name: 'Designer Rayon', count: '95+ Designs' }
  ];

  const faqs = [
    {
      q: "Do you sell fabrics online?",
      a: "Currently, we showcase our fabric collections online, but purchases can only be made by visiting our physical store."
    },
    {
      q: "What types of fabrics do you offer?",
      a: "We offer a wide variety of fabrics including cotton, linen, rayon, silk, denim, polyester, printed fabrics, embroidery fabrics, and many more."
    },
    {
      q: "Do you offer wholesale and retail purchases?",
      a: "Yes, we cater to both retail customers and wholesale buyers. Whether you need a small quantity or bulk fabric, we're here to help."
    },
    {
      q: "Can I check fabric availability before visiting?",
      a: "Yes. You can contact us via phone or WhatsApp to inquire about the availability of any fabric before visiting our shop."
    },
    {
      q: "Do you provide fabric samples?",
      a: "Yes, samples for selected fabrics may be available. Please contact us or visit our shop for more information."
    },
    {
      q: "Do you provide stitching or tailoring services?",
      a: "No. We specialize in selling premium unstitched fabrics only and do not offer stitching or tailoring services."
    },
    {
      q: "Where is your shop located?",
      a: "Our shop is conveniently located and can be easily found using the Google Maps link available on our Contact page."
    },
    {
      q: "What are your shop timings?",
      a: "Our shop is open during business hours throughout the week. Please check the Contact page for the latest opening and closing times."
    }
  ];


  const images = [
    "/home1.png",
    "/home2.png",
    "/home3.png",
    "/home4.png",
    "/home5.png",
  ];

  const baseUrl =
    'https://raw.githubusercontent.com/amritsarcottonclothhouse/assests/main/';

  return (
    <main className="bg-[#ffffff] text-neutral-900 selection:bg-[#D4AF37] selection:text-white">

      {/* HERO SECTION */}
      <section className="pt-5 pb-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top: Auto-Scrolling Carousel */}
        <div className="relative w-full h-[250px] flex overflow-hidden rounded-[rem]">
          <div className="flex animate-scroll gap-4">
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="min-w-[350px] md:min-w-[500px] h-full">
                <img 
                  src={src} 
                  alt="Fabric Gallery" 
                  className="w-full h-full object-cover rounded-[0.5rem]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Text and Call to Action */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="max-w-xl text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight">
            Amritsar <span className="text-[#C8A04A]">Cloth House</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We specialize in offering premium-quality unstitched fabrics with an extensive collection of colors, textures, and designs. Whether you're creating everyday wear or something extraordinary, our carefully selected fabrics are designed to inspire confidence, creativity, and style. Visit our store to explore a collection where quality meets craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => navigate({ to: '/store' })}
            className="group flex items-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full font-medium transition hover:bg-[#C8A04A] cursor-pointer">
              Visit Shop <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>

      {/* CATEGORIES SECTION */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Remastered Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div className="m-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#111]">
                Explore Our Fabric Collections
              </h2>
              <p className="text-neutral-600 text-lg ">
                Whether you are crafting a personal project or sourcing for a boutique, find the perfect material to bring your vision to life.
              </p>
            </div>
            {/* <button className="flex items-center gap-2 text-[#C8A04A] font-bold hover:gap-4 transition-all whitespace-nowrap">
        Browse Full Catalog <ArrowRight size={20} />
      </button> */}
          </div>

          {/* Category Grid with Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Luxury Silk', img: `${baseUrl}/silk.png` },
              { name: 'Premium Linen', img: `${baseUrl}/linen.png` },
              { name: 'Organic Cotton', img: `${baseUrl}/organicCotton.png` },
              { name: 'Rich Rayon', img: `${baseUrl}/rayon.png` },
            ].map((cat) => (
              <div
                key={cat.name}
                className="group relative h-[400px] w-full overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.img})` }}
                />

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white mb-1">{cat.name}</h4>
                  <div className="flex items-center gap-2 text-[#C8A04A] font-medium text-sm">
                    {/* Explore Now <ArrowRight size={16} /> */}
                  </div>
                </div>
              </div>
            ))}


          </div>

          <button onClick={()=> navigate({to: '/collection'})} className="flex items-center gap-2 m-auto my-10 text-[#C8A04A] font-bold hover:gap-4 transition-all whitespace-nowrap">
            Browse Full Catalog <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="pb-24 max-w-4xl mx-auto bg-white px-6">
        <h2 className="text-4xl font-serif text-center mb-16">Frequently Asked</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-neutral-200 rounded-2xl p-6 hover:border-[#D4AF37] transition-all">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-lg">
                {faq.q}
                <span className="text-[#C8A04A] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-neutral-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
