"use client";

import Layout from "@/components/Layout";
import { useState } from "react";

export default function JoinWaitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-accent-green text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Be among the first to experience ZUSI. Get early access and exclusive updates.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits Section */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                Why Join the Waitlist?
              </h2>
              <p className="text-lg text-neutral-dark mb-8">
                Be part of the future of bill payments in Africa. Early access members get exclusive benefits and help shape the platform.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Early Access</h3>
                    <p className="text-neutral-dark">
                      Get first access to ZUSI when we launch. Be among the first to simplify your bill payments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Exclusive Benefits</h3>
                    <p className="text-neutral-dark">
                      Special offers, discounts, and premium features reserved for early members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Shape the Platform</h3>
                    <p className="text-neutral-dark">
                      Your feedback matters. Help us build the best bill payment experience for Africa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Stay Updated</h3>
                    <p className="text-neutral-dark">
                      Receive updates on our progress, launch date, and new features as we build.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-accent-green/10 to-primary-dark/10 rounded-xl">
                <h3 className="font-semibold text-primary-dark mb-2">What to Expect</h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Early access notification when we launch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Exclusive updates and behind-the-scenes content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Priority support and feature requests</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-neutral-light rounded-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-primary-dark mb-2">
                Join the Waitlist
              </h2>
              <p className="text-neutral-dark mb-6">
                Fill out the form below to secure your spot. We'll notify you as soon as ZUSI is ready!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                  <p className="text-sm text-neutral-default mt-1">
                    We'll use this to notify you when we launch
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold">You're on the list!</p>
                        <p className="text-sm">Thank you for joining. We'll notify you as soon as ZUSI launches.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-green text-white px-8 py-4 rounded-lg hover:bg-accent-green/90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>

              <p className="text-sm text-neutral-default mt-6 text-center">
                By joining, you agree to receive updates about ZUSI. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent-green/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                What is ZUSI?
              </h2>
              <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
                ZUSI is Africa's all-in-one utility platform that combines bill payments, shared expenses, and financial management in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pay All Bills",
                  description: "Electricity, cable, internet, airtime, and more in one app",
                },
                {
                  title: "Split Expenses",
                  description: "Automate group payments with friends, family, or roommates",
                },
                {
                  title: "Track Spending",
                  description: "Gain insights into your spending habits and financial commitments",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">{feature.title}</h3>
                  <p className="text-neutral-dark">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
