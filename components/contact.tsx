import { Phone, MapPin, Clock } from "lucide-react";

const hours = [
  { day: "Måndag", time: "11–19" },
  { day: "Tisdag", time: "11–19" },
  { day: "Onsdag", time: "11–19" },
  { day: "Torsdag", time: "11–19" },
  { day: "Fredag", time: "11–19" },
  { day: "Lördag", time: "Stängt" },
  { day: "Söndag", time: "16–19" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p
            className="text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Kom i kontakt
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold font-mono"
            style={{ color: "#F8F9FA" }}
          >
            Kontakt
          </h2>
          <div
            className="mt-3 w-12 h-0.5"
            style={{ backgroundColor: "#C9A84C" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Phone */}
          <div
            className="p-6 flex flex-col gap-4"
            style={{
              backgroundColor: "#2D2D2D",
              borderRadius: "3px",
              border: "1px solid #3A3A3A",
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.12)", borderRadius: "3px" }}
            >
              <Phone size={18} style={{ color: "#C9A84C" }} />
            </div>
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#ADB5BD" }}
              >
                Ring oss
              </p>
              <a
                href="tel:0760560777"
                className="text-xl font-mono font-bold transition-colors duration-200 hover:opacity-80"
                style={{ color: "#F8F9FA" }}
              >
                076-056 07 77
              </a>
            </div>
          </div>

          {/* Address */}
          <div
            className="p-6 flex flex-col gap-4"
            style={{
              backgroundColor: "#2D2D2D",
              borderRadius: "3px",
              border: "1px solid #3A3A3A",
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.12)", borderRadius: "3px" }}
            >
              <MapPin size={18} style={{ color: "#C9A84C" }} />
            </div>
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#ADB5BD" }}
              >
                Adress
              </p>
              <address
                className="text-sm font-mono not-italic leading-relaxed"
                style={{ color: "#F8F9FA" }}
              >
                Nynäsvägen 3F
                <br />
                Stockholm, Sverige
              </address>
            </div>
          </div>

          {/* Hours */}
          <div
            className="p-6 flex flex-col gap-4"
            style={{
              backgroundColor: "#2D2D2D",
              borderRadius: "3px",
              border: "1px solid #3A3A3A",
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.12)", borderRadius: "3px" }}
            >
              <Clock size={18} style={{ color: "#C9A84C" }} />
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#ADB5BD" }}
              >
                Öppettider
              </p>
              <ul className="space-y-1.5">
                {hours.map(({ day, time }) => {
                  const isClosed = time === "Stängt";
                  return (
                    <li
                      key={day}
                      className="flex justify-between items-center text-xs font-mono"
                    >
                      <span
                        style={{
                          color: "#CED4DA",
                        }}
                      >
                        {day}
                      </span>
                      <span
                        style={{
                          color: isClosed ? "#6B7280" : "#F8F9FA",
                        }}
                      >
                        {time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
