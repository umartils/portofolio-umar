/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useEffect, useCallback } from 'react';
import { listSertifikat } from '../data';

const bidangColors = {
  'Web Development': 'bg-sky-100 text-sky-700 border-sky-200',
  'AI / Machine Learning': 'bg-violet-100 text-violet-700 border-violet-200',
  'UI/UX Design': 'bg-pink-100 text-pink-700 border-pink-200',
  'Frontend Development': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Cloud Computing': 'bg-orange-100 text-orange-700 border-orange-200',
  'Data Science': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Microsoft Office': 'bg-sky-100 text-sky-700 border-sky-200',
};

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_PLAY_INTERVAL = 3500;

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const total = listSertifikat.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // Update visible count based on container width
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 960) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setIsAnimating(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, maxIndex]
  );

  const goPrev = useCallback(
    () => goTo(currentIndex - 1),
    [currentIndex, goTo]
  );
  const goNext = useCallback(
    () => goTo(currentIndex + 1),
    [currentIndex, goTo]
  );

  // Auto-play
  const startAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);
  }, [maxIndex]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlayRef.current);
  }, [startAutoPlay]);

  const pauseAutoPlay = () => clearInterval(autoPlayRef.current);

  // Drag / touch handlers
  const onDragStart = (clientX) => {
    pauseAutoPlay();
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const onDragMove = (clientX) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const onDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) goNext();
    else if (dragOffset > 60) goPrev();
    setDragOffset(0);
    startAutoPlay();
  }, [isDragging, dragOffset, goNext, goPrev, startAutoPlay]);

  const translateX =
    -(currentIndex * CARD_STEP) + (isDragging ? dragOffset : 0);

  return (
    <div className="certificates mt-32 py-10" id="certificates">
      <h1
        className="text-center text-4xl/snug font-bold mb-10 text-slate-800"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Certificates
      </h1>

      {/* Slider wrapper */}
      <div
        ref={containerRef}
        className="relative px-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={() => {
          onDragEnd();
          startAutoPlay();
        }}
      >
        {/* Prev button */}
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-amber-700 hover:border-amber-300 hover:shadow-amber-100 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <i className="ri-arrow-left-s-line text-xl"></i>
        </button>

        {/* Overflow mask */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: isDragging
                ? 'none'
                : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform',
            }}
          >
            {listSertifikat.map((sertif) => (
              <div
                key={sertif.id}
                style={{
                  minWidth: `${CARD_WIDTH}px`,
                  width: `${CARD_WIDTH}px`,
                }}
                className={`group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${
                  isDragging ? 'pointer-events-none' : ''
                }`}
                onClick={() => !isDragging && setSelected(sertif)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={sertif.gambar}
                    alt={sertif.nama}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    {/* <span className="text-sm font-medium text-white bg-amber-500 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                      <i className="ri-eye-line"></i>
                      Detail
                    </span> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${
                      bidangColors[sertif.bidang] ||
                      'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <i className="ri-award-line ri-sm"></i>
                    {sertif.bidang}
                  </span>
                  <h3 className="font-semibold text-base leading-snug mb-2 text-slate-600 group-hover:text-amber-700 transition-colors">
                    {sertif.nama}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <i className="ri-building-line"></i>
                      {sertif.penerbit}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      {sertif.tahun}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-amber-700 hover:border-amber-300 hover:shadow-amber-100 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <i className="ri-arrow-right-s-line text-xl"></i>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'w-6 h-2 bg-amber-600'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl shadow-slate-300/50"
            style={{ animation: 'fadeScaleIn 0.25s ease forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes fadeScaleIn {
                from { opacity: 0; transform: scale(0.95) translateY(8px); }
                to   { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>
            <img
              src={selected.gambar}
              alt={selected.nama}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${
                  bidangColors[selected.bidang] ||
                  'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                <i className="ri-award-line ri-sm"></i>
                {selected.bidang}
              </span>
              <h2 className="text-xl font-bold mb-3 text-slate-800">
                {selected.nama}
              </h2>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="ri-building-line"></i>
                  {selected.penerbit}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-calendar-line"></i>
                  {selected.tahun}
                </span>
              </div>
              <a
                href={selected.credentials}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-amber-900 font-medium bg-amber-200 px-5 py-2.5 rounded-full hover:bg-amber-300 transition-all shadow-sm"
              >
                <i className="ri-external-link-line"></i>
                View Credential
              </a>
              <button
                onClick={() => setSelected(null)}
                className="mt-3 w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-xl transition-colors font-medium text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}