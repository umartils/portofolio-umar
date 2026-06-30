/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import DataImage from '../data';

const socialLinks = [
  { href: 'https://github.com/umartils/', icon: 'ri-github-fill' },
  { href: 'https://www.instagram.com/umartils_', icon: 'ri-instagram-fill' },
  {
    href: 'https://www.linkedin.com/in/umartils/',
    icon: 'ri-linkedin-box-fill',
  },
];

export default function Hero({ loading }) {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-12 lg:px-20"
    >
      {/* LEFT */}
      <div
        className={`order-2 md:order-1 transition-all duration-700 ${
          !loading
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10 md:translate-x-10'
        }`}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-start text-center md:text-5xl font-bold text-slate-900 leading-tight mb-3">
          Halo, Saya <span className="text-stone-700">Umar Tilmisani</span>
        </h1>

        {/* Certification Badge */}
        <div className="flex flex-wrap md:justify-start justify-center md:gap-2 gap-1 mb-4">
          <span className="md:px-3 px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
            <i className="ri-award-fill ri-sm" /> Microsoft Azure AI Certified
          </span>
          <span className="md:px-3 px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
            <i className="ri-award-fill ri-sm" /> Microsoft Office Specialist
          </span>
        </div>

        {/* Role */}
        {/* <h2 className="text-lg md:text-xl text-slate-600 mb-4">
          Fullstack Developer • AI/ML Engineer • IoT Enthusiast
        </h2> */}

        {/* Description */}
        <p className="md:text-start text-center text-slate-500 leading-relaxed mb-8 max-w-xl">
          Fresh graduate Teknik Komputer (IPK 3.91) yang lulus dalam 3.5 tahun,
          dengan pengalaman sebagai intern di Telkomsel dan peserta Coding Camp
          2025 dengan pencapaian sebagai 100 Top-Scoring Students dan most
          active students. Berpengalaman membangun solusi end-to-end mulai dari
          IoT, backend, hingga aplikasi berbasis AI/ML yang efisien dan
          scalable.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap md:justify-start justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-200 text-amber-900 rounded-full shadow-sm hover:bg-amber-300 transition"
          >
            <i className="ri-eye-line ri-sm" />
            Lihat Project
          </a>
          <a
            href="/files/cv-umar.pdf"
            download={true}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-full hover:bg-slate-100 transition"
          >
            <i className="ri-download-line ri-sm" />
            Download CV
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-3 md:justify-start justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:text-amber-700 hover:border-amber-500 transition"
            >
              <i className={`${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="order-1 md:mt-0 mt-5 md:order-2 flex flex-col items-center relative">
        {/* Glow (lebih subtle untuk light mode) */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

        {/* Image */}
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          loading="lazy"
          className={`relative w-60 md:w-80 rounded-full object-cover shadow-xl transition duration-700 hover:scale-105 ${
            !loading ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        />

        {/* Badge */}
        {/* <div className="mt-6 px-5 py-2 bg-amber-50 border border-amber-200 hover:bg-amber-100 rounded-xl shadow-sm flex justify-center">
          <span className="text-sm text-center text-amber-700 font-medium">
            Fullstack Developer • AI/ML Engineer • IoT Enthusiast
          </span>
        </div> */}
      </div>
    </section>
  );
}