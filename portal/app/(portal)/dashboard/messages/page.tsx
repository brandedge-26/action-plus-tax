"use client";

import { useState } from "react";
import { Search, Send, ArrowLeft } from "lucide-react";

const conversations = [
  {
    id: 1,
    subject: "APP-001 — Tax Preparation",
    lastMessage: "We may need your bank statements for Q4 2024.",
    date: "Apr 9",
    unread: true,
    messages: [
      { from: "Admin", text: "Hello John, we have received your application APP-001. We are reviewing your documents.",        date: "Apr 9 — 9:00 AM"  },
      { from: "You",   text: "Thank you! Let me know if you need anything else.",                                             date: "Apr 9 — 10:15 AM" },
      { from: "Admin", text: "We may need your bank statements for Q4 2024. Please upload them when possible.",               date: "Apr 9 — 11:30 AM" },
    ],
  },
  {
    id: 2,
    subject: "APP-002 — Consultation Confirmed",
    lastMessage: "Your appointment is confirmed for April 15.",
    date: "Apr 6",
    unread: false,
    messages: [
      { from: "Admin", text: "Hi John! Your consultation is confirmed for April 15, 2025 at 2:00 PM EST.",                   date: "Apr 6 — 2:00 PM" },
      { from: "You",   text: "Perfect, see you then. I will bring the requested documents.",                                  date: "Apr 6 — 3:00 PM" },
    ],
  },
  {
    id: 3,
    subject: "Document Rejected — Income_Statement",
    lastMessage: "Please re-upload a clearer version of the document.",
    date: "Apr 5",
    unread: true,
    messages: [
      { from: "Admin", text: "Hi, the Income_Statement.pdf you uploaded for APP-002 was rejected. The document appears blurry. Please re-upload a clearer version.", date: "Apr 5 — 4:00 PM" },
    ],
  },
];

export default function MessagesPage() {
  const [active, setActive]   = useState<typeof conversations[0] | null>(null);
  const [search, setSearch]   = useState("");
  const [newMsg, setNewMsg]   = useState("");

  const filtered = conversations.filter((c) =>
    c.subject.toLowerCase().includes(search.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  const unread = conversations.filter((c) => c.unread).length;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Messages</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>
          {unread > 0
            ? <><span className="font-bold" style={{ color: "var(--primary)" }}>{unread} unread</span> messages</>
            : "All messages read"}
        </p>
      </div>

      <div className="flex gap-4" style={{ height: "calc(100vh - 220px)", minHeight: "500px" }}>

        {/* Conversation List — hidden on mobile when a thread is open */}
        <div
          className={`flex-shrink-0 bg-white rounded-2xl flex flex-col overflow-hidden ${active ? "hidden md:flex" : "flex"} w-full md:w-72`}
          style={{ border: "1px solid var(--gray-border)" }}
        >
          <div className="p-3" style={{ borderBottom: "1px solid var(--gray-border)" }}>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl text-sm outline-none transition-all"
                style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filtered.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActive(conv)}
                className="w-full text-left px-4 py-3.5 transition-all"
                style={{
                  borderBottom: "1px solid var(--gray-light)",
                  background: active?.id === conv.id ? "var(--primary-light)" : "",
                  borderLeft: active?.id === conv.id ? "3px solid var(--primary)" : "3px solid transparent",
                }}
                onMouseEnter={(e) => { if (active?.id !== conv.id) (e.currentTarget as HTMLButtonElement).style.background = "var(--gray-light)"; }}
                onMouseLeave={(e) => { if (active?.id !== conv.id) (e.currentTarget as HTMLButtonElement).style.background = ""; }}
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: "var(--black)" }}>A</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <p className="text-xs font-bold truncate" style={{ color: "var(--black)" }}>{conv.subject}</p>
                      {conv.unread && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />}
                    </div>
                    <p className="text-xs truncate" style={{ color: "var(--gray-text)" }}>{conv.lastMessage}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--gray-border)" }}>{conv.date}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Thread — full width on mobile when active, hidden when no thread selected */}
        {active ? (
          <div
            className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden"
            style={{ border: "1px solid var(--gray-border)" }}
          >
            {/* Thread Header */}
            <div className="px-4 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid var(--gray-border)" }}>
              {/* Back button — mobile only */}
              <button
                onClick={() => setActive(null)}
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0 transition-colors"
                style={{ border: "1px solid var(--gray-border)" }}
              >
                <ArrowLeft size={15} strokeWidth={2} style={{ color: "var(--black)" }} />
              </button>
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--black)" }}>{active.subject}</p>
                <p className="text-xs" style={{ color: "var(--gray-text)" }}>Admin Support · Action Plus Tax</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {active.messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.from === "You" ? "flex-row-reverse" : ""}`}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: msg.from === "You" ? "var(--primary)" : "var(--black)" }}
                  >
                    {msg.from === "You" ? "JD" : "A"}
                  </div>
                  <div className={`max-w-[75%] sm:max-w-md flex flex-col ${msg.from === "You" ? "items-end" : "items-start"}`}>
                    <div
                      className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                      style={msg.from === "You"
                        ? { background: "var(--primary)", color: "#fff", borderBottomRightRadius: "4px" }
                        : { background: "var(--gray-light)", color: "var(--black)", borderBottomLeftRadius: "4px" }
                      }
                    >
                      {msg.text}
                    </div>
                    <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>{msg.from} · {msg.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply */}
            <div className="p-3 sm:p-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && setNewMsg("")}
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                  style={{ border: "1px solid var(--gray-border)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                />
                <button
                  onClick={() => setNewMsg("")}
                  className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90 flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                >
                  <Send size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Empty state — desktop only (on mobile the list takes full width) */
          <div className="hidden md:flex flex-1 bg-white rounded-2xl items-center justify-center" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--primary-light)" }}>
                <Search size={20} style={{ color: "var(--primary)" }} />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>Select a conversation</p>
              <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>Choose a message from the left</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
