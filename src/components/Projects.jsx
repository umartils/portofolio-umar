/* eslint-disable react/react-in-jsx-scope */
import { listProyek } from '../data';
function Projects() {
  return (
    <div className="projects mt-32 py-10" id="projects">
      <h1
        className="text-center text-4xl/snug font-bold mb-15"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <div
        className="projects-box grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                loading="lazy"
                className="w-full h-55 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold my-3 group-hover:text-amber-700 transition-colors">
                {proyek.nama}
              </h1>
              <p className="text-sm/loose mb-4 opacity-70">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs py-1 px-2.5 border bg-white border-slate-200 rounded-md font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-200 hover:bg-amber-300 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm font-medium text-amber-900"
                >
                  <i className="ri-external-link-line"></i>
                  Lihat Proyek
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;