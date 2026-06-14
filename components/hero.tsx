"use client";

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.querySelector("#menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/Thai-Take-Away-Vega-feature-image-PinThaifood.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.60) 50%, rgba(26,26,26,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Tag */}
        <p
          className="inline-block text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 border"
          style={{ color: "#C9A84C", borderColor: "#C9A84C" }}
        >
          Äkta Thai — Take Away
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight mb-4"
          style={{ color: "#F8F9FA" }}
        >
          Thai Take Away
          <br />
          <span style={{ color: "#C9A84C" }}>Vega</span>
        </h1>

        <p
          className="text-base md:text-lg font-mono font-light max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#CED4DA" }}
        >
          Autentisk thaimat tillagad med färska råvaror och genuina smaker —
          direkt till dig på Nynäsvägen i Stockholm.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToMenu}
            className="px-8 py-3.5 font-mono font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "#C9A84C",
              color: "#1A1A1A",
              borderRadius: "3px",
            }}
          >
            Se Meny
          </button>
          <a
            href="tel:0760560777"
            className="px-8 py-3.5 font-mono font-semibold text-sm tracking-wider uppercase border transition-all duration-200 hover:bg-white hover:bg-opacity-10"
            style={{
              color: "#F8F9FA",
              borderColor: "#F8F9FA",
              borderRadius: "3px",
            }}
          >
            Ring Oss
          </a>
        </div>
      </div>

      {/* Hours badge */}
      <div
        className="relative z-10 mt-12 md:mt-16 px-6 py-3 border flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
        style={{
          borderColor: "rgba(201,168,76,0.4)",
          backgroundColor: "rgba(26,26,26,0.6)",
          borderRadius: "3px",
        }}
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "#C9A84C" }}
        >
          Öppettider
        </span>
        <div
          className="hidden sm:block w-px h-4"
          style={{ backgroundColor: "#C9A84C", opacity: 0.4 }}
        />
        <span className="text-sm font-mono" style={{ color: "#E9ECEF" }}>
          Mån–Fre: 11–19
        </span>
        <div
          className="hidden sm:block w-px h-4"
          style={{ backgroundColor: "#C9A84C", opacity: 0.4 }}
        />
        <span className="text-sm font-mono" style={{ color: "#E9ECEF" }}>
          Söndag: 16–19
        </span>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scrolla ned"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
