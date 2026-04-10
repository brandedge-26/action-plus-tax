"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Upload, X, Lock, Shield } from "lucide-react";

const services = [
  "Tax Preparation & Filing",
  "Individual Income Tax Filing",
  "Simple / Standard Return Filing",
  "Self-Employed / Freelance Tax Filing",
  "Cryptocurrency & Investment Tax Reporting",
  "Tax Extensions",
  "Amended Tax Returns",
  "Tax Resolution & IRS Issue Support",
  "IRS Audit Support & Representation",
  "Tax Planning & Consultation",
  "Bookkeeping Services",
  "Payroll Services",
  "Business Valuation",
];

const filingStatuses = ["Single", "Married Filing Jointly", "Married Filing Separately", "Head of Household", "Qualifying Widow(er)"];
const steps = ["Service", "Personal Info", "Documents", "Review"];

export default function ApplyPage() {
  const [step, setStep]       = useState(0);
  const [service, setService] = useState("");
  const [files, setFiles]     = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white";
  const inputStyle = { border: "1px solid var(--gray-border)", color: "var(--black)" };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>New Application</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>Fill out the form to submit your service request</p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                  style={i < step
                    ? { background: "#22C55E", color: "#fff" }
                    : i === step
                    ? { background: "var(--primary)", color: "#fff" }
                    : { background: "var(--gray-light)", color: "var(--gray-text)", border: "1px solid var(--gray-border)" }
                  }
                >
                  {i < step ? <Check size={14} strokeWidth={3} /> : i + 1}
                </div>
                <span className="text-xs mt-1 font-semibold" style={{ color: i === step ? "var(--primary)" : "var(--gray-text)" }}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 mb-4 transition-all" style={{ background: i < step ? "#22C55E" : "var(--gray-border)" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--gray-border)" }}>

        {/* Step 1: Service */}
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <p className="text-base font-bold mb-0.5" style={{ color: "var(--black)" }}>Select a Service</p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>Choose the service you need assistance with</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className="text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all"
                  style={service === s
                    ? { background: "var(--primary-light)", border: "1px solid var(--primary)", color: "var(--primary)" }
                    : { border: "1px solid var(--gray-border)", color: "var(--black)" }
                  }
                  onMouseEnter={(e) => { if (service !== s) (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--primary)"; }}
                  onMouseLeave={(e) => { if (service !== s) (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gray-border)"; }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                      style={{ borderColor: service === s ? "var(--primary)" : "var(--gray-border)" }}
                    >
                      {service === s && <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />}
                    </div>
                    {s}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Personal Info */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <p className="text-base font-bold mb-0.5" style={{ color: "var(--black)" }}>Personal Information</p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>All information is encrypted and securely stored</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Full Name",    type: "text",     ph: "John Doe",            span: false },
                { label: "Email",        type: "email",    ph: "you@email.com",        span: false },
                { label: "Phone Number", type: "tel",      ph: "+1 (555) 000-0000",    span: false },
                { label: "Date of Birth",type: "date",     ph: "",                     span: false },
                { label: "Address",      type: "text",     ph: "123 Main St, NY",      span: true  },
              ].map((f) => (
                <div key={f.label} className={f.span ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>
                    {f.label} <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input type={f.type} placeholder={f.ph} className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>
                  SSN / Tax ID <span style={{ color: "var(--primary)" }}>*</span>{" "}
                  <span className="font-normal" style={{ color: "var(--gray-text)" }}>(Encrypted)</span>
                </label>
                <div className="relative">
                  <input type="password" placeholder="XXX-XX-XXXX" className={inputClass} style={{ ...inputStyle, paddingRight: "2.5rem" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                  <Lock size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Filing Status <span style={{ color: "var(--primary)" }}>*</span></label>
                <select className="w-full rounded-xl px-4 py-2.5 text-sm outline-none bg-white transition-all" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                >
                  <option value="">Select filing status</option>
                  {filingStatuses.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Previous Tax Filing?</label>
                <div className="flex gap-4 mt-2">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--black)" }}>
                      <input type="radio" name="prevFiling" value={v.toLowerCase()} style={{ accentColor: "var(--primary)" }} />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Additional Notes</label>
                <textarea rows={3} placeholder="Any special instructions..."
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none resize-none transition-all bg-white"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                />
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
              <Shield size={16} strokeWidth={2} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700">Your SSN and personal data is encrypted with 256-bit AES. Only authorized tax professionals can access this information.</p>
            </div>
          </div>
        )}

        {/* Step 3: Documents */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <p className="text-base font-bold mb-0.5" style={{ color: "var(--black)" }}>Upload Documents</p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>Upload required documents for your service</p>
            </div>
            <div
              onDrop={(e) => { e.preventDefault(); setDragOver(false); setFiles((p) => [...p, ...Array.from(e.dataTransfer.files)]); }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              className="rounded-2xl p-10 text-center transition-all cursor-pointer"
              style={{
                border: `2px dashed ${dragOver ? "var(--primary)" : "var(--gray-border)"}`,
                background: dragOver ? "var(--primary-light)" : "var(--gray-light)",
              }}
            >
              <Upload size={32} strokeWidth={1.5} className="mx-auto mb-3" style={{ color: "var(--gray-text)" }} />
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--black)" }}>Drag & drop files here</p>
              <p className="text-xs mb-4" style={{ color: "var(--gray-text)" }}>PDF, JPG, PNG — Max 10MB per file</p>
              <label
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-all hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                <Upload size={15} strokeWidth={2} />
                Choose Files
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden"
                  onChange={(e) => e.target.files && setFiles((p) => [...p, ...Array.from(e.target.files!)])} />
              </label>
            </div>
            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                        PDF
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{f.name}</p>
                        <p className="text-xs" style={{ color: "var(--gray-text)" }}>{(f.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} style={{ color: "var(--gray-text)" }} className="hover:opacity-70 transition-opacity">
                      <X size={16} strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 4: Review */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <p className="text-base font-bold mb-0.5" style={{ color: "var(--black)" }}>Review & Submit</p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>Please review your application before submitting</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Selected Service",  content: <p className="text-sm font-bold" style={{ color: "var(--black)" }}>{service || "Tax Preparation & Filing"}</p> },
                {
                  label: "Personal Info", content: (
                    <div className="grid grid-cols-2 gap-y-1 text-sm">
                      {[["Name","John Doe"],["Email","john@example.com"],["Phone","+1 555 000 0000"],["Filing","Single"]].map(([k,v]) => (
                        <div key={k}><span style={{ color: "var(--gray-text)" }}>{k}:</span>{" "}<span className="font-semibold" style={{ color: "var(--black)" }}>{v}</span></div>
                      ))}
                    </div>
                  )
                },
                { label: "Documents", content: <p className="text-sm" style={{ color: "var(--gray-text)" }}>{files.length} file(s) ready to upload</p> },
              ].map((row) => (
                <div key={row.label} className="p-4 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "var(--gray-text)" }}>{row.label}</p>
                  {row.content}
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
              <Check size={16} strokeWidth={2.5} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-green-700">After submission you&apos;ll receive a confirmation email and can track your application in the portal.</p>
            </div>
          </div>
        )}

        {/* Nav Buttons */}
        <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: "1px solid var(--gray-border)" }}>
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
          >
            <ArrowLeft size={15} strokeWidth={2.5} />
            Previous
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Next Step
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          ) : (
            <button
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{ background: "#16A34A" }}
            >
              <Check size={15} strokeWidth={2.5} />
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
