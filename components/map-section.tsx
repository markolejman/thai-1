export default function MapSection() {
  return (
    <section
      id="map"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p
            className="text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Hitta oss
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold font-mono"
            style={{ color: "#1A1A1A" }}
          >
            Hitta Hit
          </h2>
          <div
            className="mt-3 w-12 h-0.5"
            style={{ backgroundColor: "#C9A84C" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Map */}
          <div
            className="lg:col-span-2 overflow-hidden"
            style={{
              borderRadius: "3px",
              border: "1px solid #DEE2E6",
              aspectRatio: "16/9",
              minHeight: "280px",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Nynäsvägen+3F,+Haninge,+Sweden&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thai Take Away Vega på Google Maps"
            />
          </div>

          {/* Info card */}
          <div
            className="flex flex-col justify-between p-6 md:p-8"
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: "3px",
              border: "1px solid #2D2D2D",
            }}
          >
            <div>
              <h3
                className="text-lg font-mono font-bold mb-4"
                style={{ color: "#F8F9FA" }}
              >
                Thai Take Away Vega
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-1"
                    style={{ color: "#ADB5BD" }}
                  >
                    Adress
                  </p>
                  <p className="text-sm font-mono" style={{ color: "#E9ECEF" }}>
                    Vid Mattcenter, Nynäsvägen 3F
                    <br />
                    136 47 Haninge
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-1"
                    style={{ color: "#ADB5BD" }}
                  >
                    Telefon
                  </p>
                  <a
                    href="tel:0760560777"
                    className="text-sm font-mono transition-colors duration-200"
                    style={{ color: "#C9A84C" }}
                  >
                    076-056 07 77
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-1"
                    style={{ color: "#ADB5BD" }}
                  >
                    Parkering
                  </p>
                  <p className="text-sm font-mono" style={{ color: "#E9ECEF" }}>
                    Finns längs Nynäsvägen
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/hwFvhNMRdzZxFZiKA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center py-3 text-sm font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#C9A84C",
                color: "#1A1A1A",
                borderRadius: "3px",
              }}
            >
              Öppna i Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
