import { useEffect } from "react";
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".social-icons div",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
      id="contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-800 to-black opacity-75 animate-gradient">
        <div className="absolute top-10 left-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-2xl opacity-50"></div>
        <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-50"></div>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-400 sm:text-6xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Have questions? Let’s connect and explore the multiverse together.
        </p>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4">
        <div className="contact-form max-w-3xl mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 py-3 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons mt-12 flex justify-center gap-8">
        {[FaDiscord, FaTwitter, FaYoutube, FaMedium, FaEnvelope].map(
          (Icon, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg transform transition-transform hover:scale-125"
            >
              <Icon className="text-2xl text-white group-hover:animate-pulse" />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ContactPage;
