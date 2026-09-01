"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type Message = { id: number; sender_role: string; message: string; created_at: string };
type ChatResponse = { error?: string; messages?: Message[] };

async function readResponse(response: Response): Promise<ChatResponse> {
  const text = await response.text();
  if (!text.trim()) {
    return { error: response.ok ? "The server returned an empty response." : "Customer care is temporarily unavailable." };
  }
  try {
    return JSON.parse(text) as ChatResponse;
  } catch {
    return { error: "Customer care returned an invalid response. Please try again." };
  }
}

export function SupportLiveChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function load() {
    try {
      const response = await fetch("/api/banking/support-chat", { cache: "no-store" });
      const data = await readResponse(response);
      if (!response.ok || data.error) return setError(data.error || "Unable to load customer care messages.");
      setMessages(data.messages || []);
      setError("");
    } catch {
      setError("Unable to connect to customer care. Please check your connection.");
    }
  }

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => void load(), 5000);
    return () => window.clearInterval(timer);
  }, []);

  async function send(event: FormEvent) {
    event.preventDefault();
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/banking/support-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await readResponse(response);
      if (!response.ok || data.error) return setError(data.error || "Your message could not be sent.");
      setMessage("");
      await load();
    } catch {
      setError("Unable to send your message. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="card mb-6 overflow-hidden rounded-2xl">
      <div className="flex items-center gap-3 border-b p-5"><MessageCircle className="text-gold-500"/><div><h2 className="font-bold">Live chat</h2><p className="text-xs text-neutral-500">Connected directly to administrator customer care.</p></div></div>
      <div className="max-h-80 space-y-3 overflow-y-auto bg-neutral-50 p-5">{messages.length ? messages.map((item) => <div key={item.id} className={`max-w-[85%] rounded-2xl p-3 text-sm ${item.sender_role === "user" ? "ml-auto bg-bank-700 text-white" : "bg-white text-neutral-700 shadow-sm"}`}><p className="whitespace-pre-wrap break-words">{item.message}</p><p className="mt-1 text-[9px] opacity-60">{new Date(item.created_at).toLocaleString("en-GB")}</p></div>) : <p className="py-8 text-center text-sm text-neutral-400">Start a secure conversation with customer care.</p>}</div>
      <form onSubmit={send} className="flex gap-2 border-t p-4"><input required maxLength={2000} className="field" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..."/><button disabled={sending} className="btn px-4" aria-label="Send message"><Send size={16}/></button></form>
      {error && <p className="px-4 pb-4 text-xs text-red-700">{error}</p>}
    </section>
  );
}
