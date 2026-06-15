import { MapPin, Phone, Mail } from "lucide-react";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/store')({
    component: VisitShopPage,
});

function VisitShopPage() {
    return (
        <main className="bg-[#FAFAFA] text-neutral-900 py-10 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">Visit Our Shop</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Experience the texture, quality, and richness of our fabric collections in person. Our expert team is ready to assist your creative journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Details Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
                            <h3 className="text-xl font-bold mb-6">Shop Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-[#C8A04A] mt-1 shrink-0" />
                                    <p className="text-neutral-600">Amritsar Cotton Cloth House
                                        Nagar palika, near madan confectionery, Kashipur, Uttarakhand, India</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-[#C8A04A] shrink-0" />
                                    <p className="text-neutral-600">+91 8532085547</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-[#C8A04A] shrink-0" />
                                    <p className="text-neutral-600">amritsarcottonclothhouse@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
                            <h3 className="text-xl font-bold mb-6">Operating Hours</h3>
                            <div className="space-y-3 text-neutral-600">
                                <div className="flex justify-between"><span>Mon - Sun</span> <span>10 AM - 8 PM</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section replacing the form */}
                    <div className="lg:col-span-2 h-[450px] w-full overflow-hidden rounded-3xl shadow-lg border border-neutral-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.3879190347916!2d78.9582073!3d29.212142199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a436c7ee29c5f%3A0x7ce015848d35cf15!2sAmritsar%20Cotton%20Cloth%20House!5e0!3m2!1sen!2sin!4v1781268073467!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}