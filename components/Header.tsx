"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/Zusi new logo no backgrd.svg"
              alt="ZUSI Logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-28 md:h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-dark hover:text-accent-green transition-colors font-medium"
            >
              Home
            </Link>
           
            <Link
              href="/products"
              className="text-neutral-dark hover:text-accent-green transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-neutral-dark hover:text-accent-green transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-accent-green text-white px-6 py-2 rounded-lg hover:bg-accent-green/90 transition-colors font-medium"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-neutral-dark hover:text-accent-green transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-neutral-dark hover:text-accent-green transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="block text-neutral-dark hover:text-accent-green transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block bg-accent-green text-white px-6 py-2 rounded-lg hover:bg-accent-green/90 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

