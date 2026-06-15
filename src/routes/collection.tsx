import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute('/collection')({
  component: CollectionsPage,
});

function CollectionsPage() {
  const collections = [
    { name: 'Luxury Silk', img: '/fabric/silk.png' },
    { name: 'Fancy Shimmer', img: '/fabric/shimmer.png' },
    { name: 'Premium Linen', img: '/fabric/linen.png' },
    { name: 'Organic Cotton', img: '/fabric/organicCotton.png' },
    { name: 'Khadi Cotton', img: '/fabric/khadiCotton.png' },
    { name: 'Cora Cotton', img: '/fabric/coraCotton.png' },
    { name: 'Muslin Fabric', img: '/fabric/muslin.png' },
    { name: 'Wool Blends', img: '/fabric/wool.png' },
    { name: 'Velvet Soft', img: '/fabric/velvet.png' },
    { name: 'Chiffon', img: '/fabric/shiffon.png' },
    { name: 'Poplin Fabric', img: '/fabric/poplin.png' },
    { name: 'Kota Fabric', img: '/fabric/Kota.png' },
    { name: 'Rich Rayon', img: '/fabric/rayon.png' },
    { name: 'Foil Fabric', img: '/fabric/foil.png' },
    { name: 'Cambric Cotton', img: '/fabric/cambricCotton.png' },
    { name: 'Fine Denim', img: '/fabric/denim.png' },
  ];

  return (
    <main className="bg-[#FAFAFA]">
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:items-center text-center mb-16 gap-6">
            <h1 className="text-5xl md:text-6xl font-serif text-[#111]">
              Our Collections
            </h1>
            <p className="text-neutral-600 text-lg max-w-2xl">
              From timeless classics to modern textures, explore our hand-picked range of high-quality fabrics curated for your next masterpiece.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((cat) => (
              <div
                key={cat.name}
                className="group relative h-[450px] w-full overflow-hidden rounded-3xl cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.img})` }}
                />

                {/* Dark Overlay */}
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

          {/* CTA Footer */}
          <div className="text-center mt-20 p-12 bg-[#FFFDF8] rounded-3xl border border-neutral-100">
            <h3 className="text-2xl font-serif mb-4">Can't find what you need?</h3>
            <p className="text-neutral-600 mb-8">Visit our shop in Kashipur for personalized fabric consultations.</p>
            <button
            onClick={() => window.open('https://maps.app.goo.gl/UGGqtgVimaDpdbFV7', '_blank')}
             className="flex items-center gap-2 mx-auto text-[#C8A04A] font-bold hover:gap-4 transition-all">
              Get Directions <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}