import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Leaf, ShieldCheck, Palette, Target } from "lucide-react";

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="bg-[#FFFDF8] text-neutral-900 py-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        

        {/* Story Section - Added Visual Flow */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C8A04A] rounded-3xl -z-10" />
            <img 
              src="/about.jpeg" 
              alt="Craftsmanship" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[#C8A04A] font-bold tracking-widest uppercase text-sm">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Bridging Tradition & Modern Design</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
  Amritsar Cloth House was born from the belief that fabric is the essential canvas for every great design. What began as a dedicated boutique space has grown into a premier destination, renowned for its unmatched variety of high-quality textiles and a legacy of premium craftsmanship.
</p>
<p className="text-neutral-600 leading-relaxed text-lg">
  We house an extensive collection of diverse fabrics to suit every style and occasion, all carefully curated to ensure absolute excellence in every thread. Guided by our deeply experienced in-store team, we don't just sell fabric—we provide the expert guidance and personalized service you need to bring your creative visions to life.
</p>
          </div>
        </section>

        {/* Timeline/Values - Enhanced to a 4-column grid */}
        <section className="py-12">
          <h2 className="text-4xl font-serif mb-16 text-center">Our Pillars of Quality</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Ethical Sourcing", desc: "Fair-trade partnerships with sustainable local looms." },
              { icon: ShieldCheck, title: "Rigorous Testing", desc: "Inspection for weave density and color fastness." },
              { icon: Palette, title: "Designer Focused", desc: "Exclusive textures curated for modern trends." },
              { icon: Target, title: "Personalized Service", desc: "Guidance to help you select the perfect fabric for your unique vision." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all hover:border-[#C8A04A] group">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF8E8] text-[#C8A04A] flex items-center justify-center mb-6 group-hover:bg-[#C8A04A] group-hover:text-white transition">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - Enhanced for higher impact */}
        <section className="bg-[#111] text-white p-16 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A04A]/10 rounded-full blur-[100px]" />
  
  <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to see our fabrics?</h2>
  
  <p className="text-neutral-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
    Our collection is best experienced in person. Visit our shop in Kashipur to explore our latest arrivals and feel the quality of our fabrics firsthand with expert guidance.
  </p>
  
  <a 
    href="https://maps.app.goo.gl/UGGqtgVimaDpdbFV7" 
    target="_blank" 
    rel="noreferrer"
    className="bg-[#C8A04A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition flex items-center gap-3 mx-auto w-fit"
  >
    Visit Our Shop <ArrowRight size={20} />
  </a>
</section>
      </div>
    </main>
  );
}