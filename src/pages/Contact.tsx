import { useState } from "react";
import { FiMail, FiPhone, FiGlobe, FiLinkedin } from "react-icons/fi";

type FormState = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    // TODO: wire this to Web3Forms / your backend
    await new Promise((r) => setTimeout(r, 900));

    // Demo success for now
    setState("sent");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-[#FBF9FE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20 mt-16">
        {/* Header */}
        <div className="text-center space-y-3 mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#314473]">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-[#314473]/90">
            Want to collaborate, ask a question, or report an issue? Send a
            message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Info card */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#314473] mb-4">
              Get in touch
            </h3>

            <p className="text-[#314473]/90 leading-relaxed mb-6">
              This is an academic project focused on deepfake image detection
              using Xception and transfer learning. If you want the research
              paper, demo details, or you found a bug, reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:eslam.aly@eslamaly.com"
                className="flex items-center gap-3 text-[#314473] hover:text-[#25365E] transition"
              >
                <FiMail />
                <span className="break-all">eslam.aly@eslamaly.com</span>
              </a>

              <a
                href="tel:+491623320059"
                className="flex items-center gap-3 text-[#314473] hover:text-[#25365E] transition"
              >
                <FiPhone />
                <span>+49 162 332 0059</span>
              </a>

              <a
                href="https://eslamaly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#314473] hover:text-[#25365E] transition"
              >
                <FiGlobe />
                <span>eslamaly.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/eslam-aly-88b66ab8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#314473] hover:text-[#25365E] transition"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#314473] mb-4">
              Send a message
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-[#314473]"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#314473]/40"
                    placeholder="Your first name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-[#314473]"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#314473]/40"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#314473]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#314473]/40"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#314473]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#314473]/40"
                  placeholder="What is this about?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#314473]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#314473]/40 resize-y"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full sm:w-auto px-6 py-3 bg-[#314473] text-white rounded-lg hover:bg-[#25365E] disabled:opacity-50 transition"
              >
                {state === "sending" ? "Sending..." : "Send message"}
              </button>

              {state === "sent" && (
                <p className="text-sm text-green-700">
                  Message sent ✅ (demo). Hook it to Web3Forms to make it real.
                </p>
              )}
              {state === "error" && (
                <p className="text-sm text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              By sending this message, you agree that your email and message
              content will be used only to respond to you. This site is an
              academic demo and does not store uploads from the detector tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
