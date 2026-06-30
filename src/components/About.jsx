/* eslint-disable react/react-in-jsx-scope */
import DataImage from '../data';

export default function About() {
  return (
    <div className="about mt-32 py-10" id="about">
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-12 text-slate-900"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Tentang Saya
      </h1>

      <div
        className="max-w-4xl mx-auto p-8 md:p-10 bg-linear-to-br from-amber-50 to-orange-100 rounded-3xl shadow-xl border border-amber-200"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={DataImage.FormalImage}
            alt="Umar Tilmisani"
            loading="lazy"
            className="w-28 h-28 object-cover rounded-xl ring-4 ring-amber-300/40 shadow-md md:hidden"
          />

          {/* Text */}
          <div>
            <p className="text-amber-900 text-center md:text-start text-base md:text-lg leading-relaxed opacity-95">
              Saya <span className="font-semibold">Umar Tilmisani</span>, fresh
              graduate Teknik Komputer yang memiliki minat besar di bidang data
              dan kecerdasan buatan. Saya dikenal sebagai pribadi yang ulet,
              mampu menyelesaikan tantangan, serta senang mengeksplorasi
              teknologi baru dan terus mengembangkan kemampuan untuk menciptakan
              solusi yang inovatif dan relevan dengan kebutuhan saat ini. Saya
              memiliki pengalaman sebagai
              <span className="font-semibold">
                {' '}
                intern di Telkomsel sebagai SQA intern
              </span>{' '}
              serta mengikuti
              <span className="font-semibold"> Coding Camp 2025</span> dengan
              pencapaian
              <span className="font-semibold"> Top-Scoring Student</span>.
            </p>

            <p className="text-amber-900 text-center md:text-start text-base md:text-lg leading-relaxed mt-4 opacity-90">
              Saya juga telah mengikuti berbagai pelatihan di bidang IT,
              khususnya
              <span className="font-semibold"> AI/Machine Learning</span>, yang
              dibuktikan dengan beberapa sertifikat profesional, termasuk
              <span className="font-semibold">
                {' '}
                Microsoft Azure AI Fundamentals
              </span>{' '}
              dan
              <span className="font-semibold">
                {' '}
                Microsoft Office Specialist
              </span>
              .
            </p>

            <p className="text-amber-900 text-center md:text-start text-base md:text-lg leading-relaxed mt-4 opacity-90">
              Saya telah mengerjakan berbagai proyek di bidang
              <span className="font-semibold"> software development</span>,
              <span className="font-semibold"> AI/Machine Learning</span>, dan
              <span className="font-semibold"> IoT</span>. Fokus saya adalah
              membangun solusi yang tidak hanya fungsional, tetapi juga efisien,
              scalable, dan memberikan dampak nyata.
            </p>

            {/* Highlight Badge */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mt-6">
              <img
                src={DataImage.FormalImage}
                alt="Umar Tilmisani"
                loading="lazy"
                className="w-20 h-20 object-cover rounded-xl ring-4 ring-amber-300/40 shadow-md hidden md:block"
              />

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <span className="md:px-3 px-2 py-1 text-xs text-amber-900 bg-white/60 rounded-full">
                  Fullstack Developer
                </span>
                <span className="md:px-3 px-2 py-1 text-xs text-amber-900 bg-white/60 rounded-full">
                  AI/ML Enthusiast
                </span>
                <span className="md:px-3 px-2 py-1 text-xs text-amber-900 bg-white/60 rounded-full">
                  IoT Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-30 py-10">
        <h1
          className="text-center text-4xl/snug font-bold mb-12 text-gray-900"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Skill
        </h1>

        <div
          className="grid lg:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Fullstack Developer */}
          <div className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                <i className="ri-macbook-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  Fullstack Developer
                </h3>
                <p className="text-xs text-amber-700 font-medium">
                  Web & Backend Engineering
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Membangun aplikasi web end-to-end, mulai dari antarmuka pengguna
              yang responsif hingga sistem backend yang skalabel dan RESTful
              API.
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-4" />

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                {
                  name: 'Next.js',
                  color: 'bg-gray-100 text-gray-700 border-gray-300',
                },
                {
                  name: 'React.js',
                  color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
                },
                {
                  name: 'Tailwind CSS',
                  color: 'bg-sky-50 text-sky-700 border-sky-200',
                },
                {
                  name: 'Laravel',
                  color: 'bg-red-50 text-red-600 border-red-200',
                },
                {
                  name: 'MySQL',
                  color: 'bg-orange-50 text-orange-600 border-orange-200',
                },
                {
                  name: 'Flask',
                  color: 'bg-slate-100 text-slate-600 border-slate-300',
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* ML / AI */}
          <div className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                <i className="ri-robot-2-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  Machine Learning / AI
                </h3>
                <p className="text-xs text-emerald-600 font-medium">
                  Data & Intelligent Systems
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Merancang dan melatih model machine learning dan deep learning
              untuk klasifikasi, deteksi objek, serta membangun aplikasi
              berbasis LLM dengan LangChain.
            </p>

            <div className="h-px bg-gray-100 mb-4" />

            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                {
                  name: 'Python',
                  color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                },
                {
                  name: 'Scikit-learn',
                  color: 'bg-orange-50 text-orange-600 border-orange-200',
                },
                {
                  name: 'TensorFlow',
                  color: 'bg-orange-50 text-orange-700 border-orange-200',
                },
                {
                  name: 'PyTorch',
                  color: 'bg-red-50 text-red-600 border-red-200',
                },
                {
                  name: 'LangChain',
                  color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                },
                {
                  name: 'Pandas',
                  color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* IoT */}
          <div className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                <i className="ri-cpu-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  Internet of Things
                </h3>
                <p className="text-xs text-blue-600 font-medium">
                  Embedded & Hardware Systems
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Mengembangkan sistem embedded dan perangkat keras cerdas,
              mengintegrasikan sensor, aktuator, serta computer vision langsung
              di edge device.
            </p>

            <div className="h-px bg-gray-100 mb-4" />

            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                {
                  name: 'Arduino',
                  color: 'bg-teal-50 text-teal-700 border-teal-200',
                },
                {
                  name: 'ESP',
                  color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
                },
                {
                  name: 'Jetson Nano',
                  color: 'bg-green-50 text-green-700 border-green-200',
                },
                {
                  name: 'Raspberry Pi',
                  color: 'bg-pink-50 text-pink-600 border-pink-200',
                },
                {
                  name: 'Python',
                  color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                },
                {
                  name: 'C',
                  color: 'bg-slate-100 text-slate-600 border-slate-300',
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Data Analyst / BI */}
          <div className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                <i className="ri-bar-chart-box-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  Data Analyst / BI
                </h3>
                <p className="text-xs text-amber-700 font-medium">
                  Data Analytics & Reporting
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Mengolah, menganalisis, dan memvisualisasikan data untuk
              menghasilkan insight bisnis, mulai dari query database, dashboard
              interaktif, hingga laporan berbasis cloud data warehouse.
            </p>

            <div className="h-px bg-gray-100 mb-4" />

            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                {
                  name: 'SQL',
                  color: 'bg-blue-50 text-blue-700 border-blue-200',
                },
                {
                  name: 'Python',
                  color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                },
                {
                  name: 'Excel',
                  color: 'bg-green-50 text-green-700 border-green-200',
                },
                {
                  name: 'Looker Studio',
                  color: 'bg-red-50 text-red-600 border-red-200',
                },
                {
                  name: 'Power BI',
                  color: 'bg-amber-50 text-amber-700 border-amber-200',
                },
                {
                  name: 'BigQuery',
                  color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}