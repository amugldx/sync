"use client";
import { useEffect, useRef, useState } from "react";
import SubmissionOverlay from "./SubmissionOverlay";

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Field({ children, delay = 0, inView, className = "" }) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AnalysisForm({
  onComplete = () => { },
  compact = false,
}) {
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const { ref, inView } = useInView();

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    website: "",
    companySize: "",
    revenue: "",
    challenge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus("loading");

    try {
      const response = await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Growth System Analysis",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        // We don't call onComplete immediately, wait for the user to close the success modal
      } else {
        setSubmissionStatus("idle");
        try {
          const errData = await response.json();
          alert(`Server Error: ${errData.error || response.statusText}`);
        } catch (e) {
          alert(`Server Error: ${response.status}`);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("idle");
      alert(`Network Error: ${error.message}. Is the backend running?`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="Run-Analysis"
      className="relative overflow-hidden bg-[#f7fbff] text-slate-900 scroll-mt-28 md:scroll-mt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-[-40px] bg-[radial-gradient(at_18%_22%,rgba(99,102,241,0.18),transparent_56%),radial-gradient(at_82%_30%,rgba(168,85,247,0.16),transparent_58%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,255,255,0.85),transparent_60%)]" />
      </div>

      <div
        className={`relative z-10 mx-auto font-sans ${compact ? "w-full max-w-xl px-6 py-4" : "w-[min(860px,92vw)] px-0 py-10 md:py-14"
          }`}
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >

        <h2
          className={`${compact ? "mt-0" : "mt-2"} text-[clamp(1.5rem,3vw,1.8rem)] font-black leading-[1.1] transition-all duration-700 ease-out ${compact ? "pl-2" : ""
            } ${inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
        >
          Run your{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            growth system
          </span>{" "}
          analysis
        </h2>

        <p
          className={`mt-1.5 text-sm font-semibold text-slate-900/65 transition-all duration-700 ease-out ${compact ? "pl-2" : ""
            } ${inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
        >
          Enter a few details. We&apos;ll map what your business actually needs.
        </p>

        <form
          onSubmit={submit}
          className={`${compact ? "mt-3" : "mt-5"} grid grid-cols-1 gap-2.5 rounded-[18px] bg-white/85 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-[14px] ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"
            }`}
        >
          <Field delay={0} inView={inView}>
            <input
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-[14px] border border-slate-400/30 px-3 py-3 text-sm font-semibold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15"
            />
          </Field>

          <Field delay={60} inView={inView}>
            <input
              required
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className={`w-full rounded-[14px] border border-slate-400/30 px-3 ${compact ? "py-2.5" : "py-3"} text-sm font-semibold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
            />
          </Field>

          <Field delay={120} inView={inView}>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email"
              className={`w-full rounded-[14px] border border-slate-400/30 px-3 ${compact ? "py-2.5" : "py-3"} text-sm font-semibold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
            />
          </Field>

          <Field delay={180} inView={inView}>
            <input
              required
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website URL"
              className={`w-full rounded-[14px] border border-slate-400/30 px-3 ${compact ? "py-2.5" : "py-3"} text-sm font-semibold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
            />
          </Field>

          <Field delay={240} inView={inView}>
            <div className="relative">
              <select
                required
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className={`w-full appearance-none rounded-[14px] border border-slate-400/30 px-3 ${compact ? "py-2.5" : "py-3"} pr-9 text-sm font-bold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
              >
                <option value="" disabled>
                  Company Size
                </option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>200+</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[13px]">
                ▾
              </span>
            </div>
          </Field>

          <Field delay={300} inView={inView}>
            <div className="relative">
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                className={`w-full appearance-none rounded-[14px] border border-slate-400/30 px-3 ${compact ? "py-2.5" : "py-3"} pr-9 text-sm font-bold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
              >
                <option value="">Monthly Revenue (optional)</option>
                <option>&lt; $10k</option>
                <option>$10k–$50k</option>
                <option>$50k–$250k</option>
                <option>$250k+</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[13px]">
                ▾
              </span>
            </div>
          </Field>

          <Field delay={360} inView={inView} className="md:col-span-2">
            <textarea
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Anything we should know?(optional)"
              className={`${compact ? "h-[70px]" : "h-[90px]"} w-full resize-none rounded-[14px] border border-slate-400/30 px-3 py-3 text-sm font-semibold outline-none transition focus:border-purple-500/55 focus:ring-4 focus:ring-purple-500/15`}
            />
          </Field>

          <Field delay={420} inView={inView} className={compact ? "sm:col-span-2" : "md:col-span-2"}>
            <button
              disabled={loading}
              type="submit"
              className={`mx-auto ${compact ? "mt-1" : "mt-2"} inline-flex w-full max-w-[180px] items-center justify-center rounded-[14px] bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(79,70,229,0.25)] disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {loading ? "Running…" : "Run analysis"}
              <span className="ml-1.5">→</span>
            </button>
          </Field>
        </form>
      </div>

      <SubmissionOverlay
        status={submissionStatus}
        onClose={() => {
          setSubmissionStatus("idle");
          setFormData({
            fullName: "",
            businessName: "",
            email: "",
            website: "",
            companySize: "",
            revenue: "",
            challenge: "",
          });
          onComplete?.();
        }}
      />
    </section>
  );
}