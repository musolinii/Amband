import { useState } from "react";
import { CONTACT } from "../../constants";

export default function ContactForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, email, phone, message });
    onSuccess?.();
  };

  const inputClass =
    "w-full max-w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700";

  return (
    <div className="w-full max-w-xl mx-auto p-4 md:p-8 border-2 border-emerald-800 rounded-lg bg-white shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">{CONTACT.formLabels.name}</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{CONTACT.formLabels.phone}</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{CONTACT.formLabels.email}</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{CONTACT.formLabels.message}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto min-w-[100px] px-6 py-2.5 bg-emerald-800 text-white rounded-md text-sm hover:bg-slate-900 transition"
        >
          {CONTACT.formLabels.submit}
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 text-sm text-slate-700">
          <h3 className="font-bold mb-2">Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone: {submittedData.phone}</p>
          <p>{submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
