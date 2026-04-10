/* eslint-disable react/react-in-jsx-scope */
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
];

const socialLinks = [
    { href: "https://github.com/umartils/", icon: "ri-github-fill" },
    { href: "https://www.instagram.com/umartils_", icon: "ri-instagram-fill" },
    { href: "https://www.linkedin.com/in/umartils/", icon: "ri-linkedin-box-fill" },
]
export default function Footer() {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      {/* <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
        </div> */}
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.icon}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-violet-500 transition-colors"
          >
            <i className={`${link.icon} ri-2x`}></i>
          </a>
        ))}
      </div>
      <p className="text-xs text-zinc-400">
        © {new Date().getFullYear()} Umar Tilmisani. All rights reserved.
      </p>
    </div>
  );
}