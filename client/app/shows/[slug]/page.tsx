'use client';

import React, { useState } from 'react';
import { use } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// ✅ Updated show data with multiple download links
const shows = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80',
    title: 'Classroom of the Elite Season 1 BluRay Hindi Multi Audio',
    description:
      'Classroom of the Elite Season 1 BluRay Hindi Multi Audio with 720p & 480p quality available. Watch or Download full episodes with multiple audio options.',
    genres: ['Drama', 'Psychological', 'School'],
    releaseYear: 2017,
    quality: 'BluRay 720p, 480p',
    downloadLinks: [
      {
        quality: '1080p',
        size: '2.4GB',
        url: 'https://example.com/download/coete-s01-1080p',
      },
      {
        quality: '720p',
        size: '1.2GB',
        url: 'https://example.com/download/coete-s01-720p',
      },
      {
        quality: '480p',
        size: '700MB',
        url: 'https://example.com/download/coete-s01-480p',
      },
      {
        quality: 'Mobile',
        size: '300MB',
        url: 'https://example.com/download/coete-s01-mobile',
      },
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1614853034644-04e01a6f29b6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601933470928-c6d1df8af9a4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&q=80',
    title: 'One-Punch Man Season 1 Hindi Dubbed',
    description:
      'One-Punch Man Season 1 Multi Audio [Hindi-Urdu-Eng-Japanese] available for download and streaming.',
    genres: ['Action', 'Comedy', 'Supernatural'],
    releaseYear: 2015,
    quality: 'BluRay 720p',
    downloadLinks: [
      {
        quality: '1080p',
        size: '2.1GB',
        url: 'https://example.com/download/opm-s01-1080p',
      },
      {
        quality: '720p',
        size: '1.5GB',
        url: 'https://example.com/download/opm-s01-720p',
      },
      {
        quality: '480p',
        size: '800MB',
        url: 'https://example.com/download/opm-s01-480p',
      },
    ],
    screenshots: [
      'https://fastly.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU',
      'https://images.unsplash.com/photo-1745986143057-e611033e37e8?q=80&w=1976&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

// Slugify helper
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export default function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const show = shows.find((s) => slugify(s.title) === slug);

  if (!show) return notFound();

  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-[7.5rem] pb-10">

        {/* Details Card */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold mb-6 text-orange-600">{show.title}</h2>
          <img
            src={show.imageUrl}
            alt={show.title}
            className="rounded-3xl shadow-lg max-h-[400px] w-full object-cover mb-8"
          />
          <p className="text-gray-700 leading-relaxed mb-8">{show.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-lg font-semibold">
            <div>
              <strong>Genres:</strong>{' '}
              <span className="font-normal">{show.genres.join(', ')}</span>
            </div>
            <div>
              <strong>Release Year:</strong>{' '}
              <span className="font-normal">{show.releaseYear}</span>
            </div>
            <div>
              <strong>Quality:</strong>{' '}
              <span className="font-normal">{show.quality}</span>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        {show.screenshots && show.screenshots.length > 0 && (
          <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {show.screenshots.map((screenshot, idx) => (
                <div key={idx} className="cursor-pointer">
                  <img
                    src={screenshot}
                    alt={`Screenshot ${idx + 1} for ${show.title}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={() => setModalImage(screenshot)}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Download Links Card */}
        <section className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">Download Links</h2>
          <ul className="space-y-5">
            {show.downloadLinks.map((link, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between border border-orange-300 rounded-lg px-6 py-4 hover:bg-orange-50 transition cursor-pointer"
              >
                <div className="text-lg font-semibold text-orange-700">
                  {link.quality} – <span className="font-normal text-gray-600">{link.size}</span>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />

      {/* Screenshot Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-gradient-to-tr from-orange-300/30 via-orange-100/20 to-yellow-100/20 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl shadow-2xl p-5 max-w-[600px] w-[90vw]"
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 transition cursor-pointer"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Screenshot enlarged"
              className="w-full max-h-[400px] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
