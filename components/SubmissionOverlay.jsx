"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function SubmissionOverlay({ status, onClose }) {
  if (status === "idle") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] overflow-y-auto p-4"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

        <div className="flex min-h-full items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={`relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ${
              status === "loading" ? "bg-white" : "bg-[#0b1020] border border-white/10"
            }`}
          >
          {status === "loading" ? (
            <div className="flex flex-col items-center py-12 px-8 text-center">
              {/* Spinner */}
              <div className="relative h-16 w-16">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full rounded-full border-4 border-indigo-100 border-t-indigo-600"
                />
              </div>

              <h3 className="mt-8 text-lg font-black tracking-widest text-indigo-600 uppercase">
                PROCESSING
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                Submitting the report to our server...
              </p>

              {/* Progress Line */}
              <div className="mt-8 h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-indigo-50">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-full bg-indigo-600"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-12 px-8 text-center">
              {/* Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20"
              >
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Check className="h-8 w-8 text-indigo-400" strokeWidth={3} />
                </motion.div>
              </motion.div>

              <div className="mt-8 space-y-1">
                <h3 className="text-xl font-black tracking-tight text-white uppercase sm:text-2xl">
                  YOUR INFORMATION HAS
                </h3>
                <h3 className="text-xl font-black tracking-tight text-indigo-500 uppercase sm:text-2xl">
                  BEEN SENT TO OUR SERVER
                </h3>
              </div>

              <p className="mt-6 text-sm font-medium leading-relaxed text-slate-400">
                An expert from our team will review your business needs and contact you as soon as possible. Thank you.
              </p>

              <button
                onClick={onClose}
                className="mt-10 px-8 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 py-3.5 text-sm font-bold text-white transition hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}
