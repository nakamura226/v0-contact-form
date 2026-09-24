'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'hello@northstar.studio',
    href: 'mailto:hello@northstar.studio',
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Brooklyn, New York',
    href: '#location',
  },
]

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f5f7f2] px-5 py-6 text-[#17211b] sm:px-8 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-[#dfe6dc] bg-[#fbfcf9] shadow-[0_24px_80px_rgba(31,54,37,0.08)] sm:min-h-[calc(100vh-4rem)] lg:flex-row">
        <section className="relative flex w-full flex-col justify-between overflow-hidden bg-[#193c2b] px-7 py-8 text-[#f3f5ed] sm:px-10 sm:py-10 lg:w-[43%] lg:px-12 lg:py-12">
          <div className="absolute -right-20 -top-24 size-72 rounded-full border border-[#89aa83]/20" />
          <div className="absolute -bottom-32 -left-24 size-80 rounded-full border border-[#89aa83]/15" />

          <div className="relative">
            <div className="mb-16 flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-[#d4e5cf] uppercase">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#d4e5cf] text-[#193c2b]">
                <MessageCircle aria-hidden="true" className="size-4" />
              </span>
              Northstar
            </div>
            <p className="mb-5 max-w-xs text-sm font-medium tracking-[0.18em] text-[#a7c7a2] uppercase">
              Let&apos;s make something meaningful
            </p>
            <h1 className="max-w-md text-4xl leading-[1.06] font-medium tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem]">
              We&apos;d love to hear what&apos;s on your mind.
            </h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-[#c1d2bd]">
              Whether you have a project in mind or just want to say hello, our door is always open.
            </p>
          </div>

          <div className="relative mt-16 space-y-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex w-fit items-center gap-4 text-sm text-[#d7e4d3] transition-colors hover:text-white"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-[#6f976d]/50 text-[#b8d2b3] transition-colors group-hover:border-[#cfe4ca] group-hover:text-white">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-xs tracking-[0.14em] text-[#8eae89] uppercase">{label}</span>
                  <span>{value}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-1 size-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-1 items-center px-7 py-9 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="w-full max-w-xl">
            <div className="mb-9">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#66805f] uppercase">Contact form</p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#1c2b21] sm:text-4xl">Start a conversation</h2>
              <p className="mt-3 text-sm leading-6 text-[#6d776f]">Tell us a little about yourself and what you&apos;re working on.</p>
            </div>

            {submitted ? (
              <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#d9e7d5] bg-[#f1f7ee] px-6 text-center">
                <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#2e6a43] text-white">
                  <Check aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1c2b21]">Message received</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#66736a]">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#2e6a43] underline decoration-[#a9c6a5] underline-offset-4 transition-colors hover:text-[#193c2b]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#344138]" htmlFor="name">
                    Name <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required className="h-12 rounded-xl border border-[#d6dfd4] bg-white px-4 text-sm font-normal text-[#1c2b21] outline-none transition-all placeholder:text-[#a4ada5] focus:border-[#6b956d] focus:ring-4 focus:ring-[#6b956d]/10" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#344138]" htmlFor="email">
                    Email <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required className="h-12 rounded-xl border border-[#d6dfd4] bg-white px-4 text-sm font-normal text-[#1c2b21] outline-none transition-all placeholder:text-[#a4ada5] focus:border-[#6b956d] focus:ring-4 focus:ring-[#6b956d]/10" />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-[#344138]" htmlFor="subject">
                  Subject <input id="subject" name="subject" type="text" placeholder="What can we help with?" required className="h-12 rounded-xl border border-[#d6dfd4] bg-white px-4 text-sm font-normal text-[#1c2b21] outline-none transition-all placeholder:text-[#a4ada5] focus:border-[#6b956d] focus:ring-4 focus:ring-[#6b956d]/10" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-[#344138]" htmlFor="message">
                  Message <textarea id="message" name="message" placeholder="Tell us a little more..." required rows={6} className="resize-none rounded-xl border border-[#d6dfd4] bg-white px-4 py-3 text-sm font-normal leading-6 text-[#1c2b21] outline-none transition-all placeholder:text-[#a4ada5] focus:border-[#6b956d] focus:ring-4 focus:ring-[#6b956d]/10" />
                </label>
                <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                  <p className="text-xs leading-5 text-[#88938a]">We&apos;ll only use your details to respond to your message.</p>
                  <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2e6a43] px-6 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(46,106,67,0.2)] transition-all hover:bg-[#245537] hover:shadow-[0_10px_22px_rgba(46,106,67,0.25)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6b956d]/30 sm:w-auto">
                    Send message <ArrowUpRight aria-hidden="true" className="size-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
