import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
  { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 text-white">
      {/* Decorative Animated Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-[120px] opacity-40 animate-floating"></div>
        <div className="absolute bottom-16 right-1/3 h-28 w-28 rounded-full bg-gradient-to-br from-teal-500 to-green-600 blur-[100px] opacity-40 animate-floating delay-2000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-sm tracking-wider">
            ©Ebrahim 2024. All rights reserved.
          </p>
          <a
            href="#privacy-policy"
            className="mt-2 text-xs tracking-wide hover:underline transition-colors duration-300 hover:text-indigo-400"
          >
            Privacy Policy
          </a>
        </div>

        {/* Central Logo / Quote */}
        <div className="text-center">
          <p className="text-2xl font-bold tracking-wider text-indigo-500 animate-pulse">
            Ebrahim
          </p>
          <p className="mt-2 text-sm font-light tracking-wide text-gray-400">
            "Innovating through the boundless multiverse."
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={link.label}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Icon */}
              <div className="relative z-10 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:text-indigo-300">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Animated Accent Line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm animate-wipe"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
