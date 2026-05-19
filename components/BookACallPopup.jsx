"use client";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmissionOverlay from "./SubmissionOverlay";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-sky-400/40 focus:bg-white/[0.07]";

export default function BookACallPopup({ onClose }) {
  const modalRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    industry: "",
    phone: "",
    socialLink: "",
    marketingChannels: "",
    businessModel: "",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose?.();
    }
  };

  const setField = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select an appointment slot.");
      return;
    }

    setIsSending(true);
    setSubmissionStatus("loading");

    try {
      const response = await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Strategy Call Request",
          ...form,
          appointment_slot: selectedDate.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
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
      setIsSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-6"
      onMouseDown={handleBackdropClick}
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          ref={modalRef}
          className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b1020]/98 shadow-2xl transition-all duration-300"
        >
          <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />

          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Book Free Strategy Call
              </h2>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                onChange={setField("name")}
                className={inputClass}
              />

              <input
                required
                placeholder="Business Name"
                onChange={setField("businessName")}
                className={inputClass}
              />

              <input
                required
                type="email"
                placeholder="Work Email"
                onChange={setField("email")}
                className={inputClass}
              />

              <input
                required
                placeholder="Industry/niche"
                onChange={setField("industry")}
                className={inputClass}
              />

              <input
                required
                type="tel"
                pattern="[+0-9]{10,15}"
                title="Please enter a valid phone number (digits and '+' only)"
                placeholder="Enter Your Phone NO"
                onChange={setField("phone")}
                onKeyPress={(e) => {
                  if (!/[0-9+]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={inputClass}
              />

              <input
                placeholder="Social Link (optional)"
                onChange={setField("socialLink")}
                className={inputClass}
              />

              <div className="w-full">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  minTime={new Date(new Date().setHours(8, 0, 0))}
                  maxTime={new Date(new Date().setHours(18, 0, 0))}
                  placeholderText="Select Appointment Slot"
                  className={inputClass}
                  wrapperClassName="w-full"
                />
              </div>

              <input
                required
                placeholder="Current Marketing Channels"
                onChange={setField("marketingChannels")}
                className={inputClass}
              />

              <textarea
                rows={3}
                placeholder="Describe your business model (optional)"
                onChange={setField("businessModel")}
                className={`${inputClass} resize-none sm:col-span-2`}
              />

              <button
                type="submit"
                disabled={isSending}
                className="mx-auto w-full max-w-[240px] rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 py-3.5 font-bold text-white transition hover:opacity-95 hover:shadow-lg hover:shadow-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
              >
                {isSending ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>

          <style>{`
          .react-datepicker__time-list-item--disabled {
            display: none !important;
          }
          .react-datepicker-wrapper {
            width: 100%;
          }
        `}</style>
        </div>
      </div>

      <SubmissionOverlay
        status={submissionStatus}
        onClose={() => {
          setSubmissionStatus("idle");
          onClose?.();
        }}
      />
    </div>
  );
}