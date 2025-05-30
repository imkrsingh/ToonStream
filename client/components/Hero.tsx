'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CartoonCharacters from '../components/CartoonCharacters';
import Pagination from './Pagination';

// ✅ Slugify function
const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

interface Slide {
  imageUrl: string;
  title: string;
  description: string;
}

interface Show {
  imageUrl: string;
  title: string;
  date: string;
  author: string;
  views: string;
  tags: string[];
  description: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const showsPerPage: number = 6;

  const slides: Slide[] = [...Array(8)].map((_, index) => ({
    imageUrl: `https://picsum.photos/200/300?random=${index + 1}`,
    title: `Cartoon Show ${index + 1}`,
    description: 'Join the fun with your favorite cartoon characters. Watch now!',
  }));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const shows: Show[] = [
    {
      imageUrl: 'https://picsum.photos/200/300?random=1',
      title: 'One-Punch Man Season 1 Hindi Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '65,129 views',
      tags: ['Action', 'Comedy', 'Superhero'],
      description: 'One-Punch Man Season 1 Multi Audio [Hindi-Urdu-Eng-Japanese]...',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=2',
      title: "JoJo's Bizarre Adventure Season 1 Hindi Dubbed",
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '64,244 views',
      tags: ['Action', 'Adventure', 'Supernatural'],
      description: "JoJo's Bizarre Adventure Season 1 Multi Audio [Japanese-Hindi]...",
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=3',
      title: 'Me and the Alien MuMu Season 1 Japanese Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '64,199 views',
      tags: ['Comedy', 'Sci-Fi', 'Slice of Life'],
      description: 'Me and the Alien MuMu Season 1 Multi Audio [Japanese]...',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=4',
      title: 'Reincarnated as a Sword Season 1 Japanese Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '63,500 views',
      tags: ['Fantasy', 'Adventure'],
      description: 'Reincarnated as a Sword Season 1 Multi Audio [Japanese]...',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=5',
      title: 'The Shinjui Family Children Season 1 Hindi Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '62,800 views',
      tags: ['Family', 'Comedy'],
      description: 'The Shinjui Family Children Season 1 Multi Audio [Hindi]...',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=6',
      title: "The Gorilla God's Go-To Girl Season 1 Hindi Dubbed",
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '61,900 views',
      tags: ['Adventure', 'Fantasy'],
      description: "The Gorilla God's Go-To Girl Season 1 Multi Audio [Hindi]...",
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=7',
      title: 'Black Butler Season 5 Hindi Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '60,200 views',
      tags: ['Mystery', 'Supernatural'],
      description: 'Black Butler Season 5 Multi Audio [Hindi]...',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=8',
      title: 'Fire Force Season 3 Hindi Dubbed',
      date: 'May 2, 2025',
      author: 'Zylith',
      views: '59,300 views',
      tags: ['Action', 'Fantasy'],
      description: 'Fire Force Season 3 Multi Audio [Hindi]...',
    },
  ];

  const recentPosts: string[] = shows.map((s) => s.title);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(shows.length / showsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <section className="relative bg-white text-black">
      {/* Carousel */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative h-full">
                <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="font-semibold text-2xl">{slide.title}</h3>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">◀</button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">▶</button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>

      <CartoonCharacters />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-3">
          {currentShows.map((show, index) => (
            <Link key={index} href={`/shows/${slugify(show.title)}`} className="block bg-white shadow-md rounded-lg overflow-hidden flex h-60 hover:shadow-lg transition">
              <div className="w-1/2 h-full">
                <img src={show.imageUrl} alt={show.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 p-3 flex flex-col justify-center">
                <h3 className="font-semibold text-sm text-orange-500 mb-1">{show.title}</h3>
                <div className="text-xs text-gray-600 mb-1">
                  <span>{show.date}</span> • <span>{show.author}</span> • <span>{show.views}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-1">
                  {show.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-200 text-black px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-700 line-clamp-2">{show.description}</p>
              </div>
            </Link>
          ))}

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} onPrev={prevPage} onNext={nextPage} />
        </div>

        <div className="w-full lg:w-1/4 hidden lg:block">
          <h2 className="text-xl font-bold mb-4 uppercase">Recent Posts</h2>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index}>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500">{`• ${post}`}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
