// 'use client';
// import React, { useState } from 'react';
// import CartoonCharacters from '../components/CartoonCharacters';
// import Pagination from './Pagination';
// import Carousel from '../components/Carousel';
// import ShowCard from '../components/ShowCard';
// import RecentPosts from '../components/RecentPosts';

// interface Slide {
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// interface Show {
//   imageUrl: string;
//   title: string;
//   date: string;
//   author: string;
//   views: string;
//   tags: string[];
//   description: string;
// }

// const HeroSection: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const showsPerPage = 6;

//   const slides: Slide[] = [...Array(8)].map((_, index) => ({
//     imageUrl: `https://picsum.photos/200/300?random=${index + 1}`,
//     title: `Cartoon Show ${index + 1}`,
//     description: 'Join the fun with your favorite cartoon characters. Watch now!',
//   }));

//   const shows: Show[] = [
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=1',
//       title: 'One-Punch Man Season 1 Hindi Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '65,129 views',
//       tags: ['Action', 'Comedy', 'Superhero'],
//       description: 'One-Punch Man Season 1 Multi Audio [Hindi-Urdu-Eng-Japanese]...',
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=2',
//       title: "JoJo's Bizarre Adventure Season 1 Hindi Dubbed",
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '64,244 views',
//       tags: ['Action', 'Adventure', 'Supernatural'],
//       description: "JoJo's Bizarre Adventure Season 1 Multi Audio [Japanese-Hindi]...",
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=3',
//       title: 'Me and the Alien MuMu Season 1 Japanese Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '64,199 views',
//       tags: ['Comedy', 'Sci-Fi', 'Slice of Life'],
//       description: 'Me and the Alien MuMu Season 1 Multi Audio [Japanese]...',
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=4',
//       title: 'Reincarnated as a Sword Season 1 Japanese Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '63,500 views',
//       tags: ['Fantasy', 'Adventure'],
//       description: 'Reincarnated as a Sword Season 1 Multi Audio [Japanese]...',
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=5',
//       title: 'The Shinjui Family Children Season 1 Hindi Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '62,800 views',
//       tags: ['Family', 'Comedy'],
//       description: 'The Shinjui Family Children Season 1 Multi Audio [Hindi]...',
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=6',
//       title: "The Gorilla God's Go-To Girl Season 1 Hindi Dubbed",
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '61,900 views',
//       tags: ['Adventure', 'Fantasy'],
//       description: "The Gorilla God's Go-To Girl Season 1 Multi Audio [Hindi]...",
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=7',
//       title: 'Black Butler Season 5 Hindi Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '60,200 views',
//       tags: ['Mystery', 'Supernatural'],
//       description: 'Black Butler Season 5 Multi Audio [Hindi]...',
//     },
//     {
//       imageUrl: 'https://picsum.photos/200/300?random=8',
//       title: 'Fire Force Season 3 Hindi Dubbed',
//       date: 'May 2, 2025',
//       author: 'Zylith',
//       views: '59,300 views',
//       tags: ['Action', 'Fantasy'],
//       description: 'Fire Force Season 3 Multi Audio [Hindi]...',
//     },
//   ];

//   const recentPosts = shows.map((s) => s.title);

//   const indexOfLastShow = currentPage * showsPerPage;
//   const indexOfFirstShow = indexOfLastShow - showsPerPage;
//   const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
//   const totalPages = Math.ceil(shows.length / showsPerPage);

//   const nextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
//   const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
//   const goToPage = (page: number) => setCurrentPage(page);

//   return (
//     <section className="relative bg-white text-black">
//       <Carousel slides={slides} />
//       <CartoonCharacters />

//       <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 space-y-3">
//           {currentShows.map((show, index) => (
//             <ShowCard
//               key={index}
//               title={show.title}
//               imageUrl={show.imageUrl}
//               date={show.date}
//               author={show.author}
//               views={show.views}
//               tags={show.tags}
//               description={show.description}
//             />
//           ))}

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={goToPage}
//             onPrev={prevPage}
//             onNext={nextPage}
//           />
//         </div>

//         <RecentPosts posts={recentPosts} />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import CartoonCharacters from '../components/CartoonCharacters';
// import Pagination from './Pagination';
// import Carousel from '../components/Carousel';
// import ShowCard from '../components/ShowCard';
// import RecentPosts from '../components/RecentPosts';

// interface Slide {
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// interface Show {
//   imageUrl: string;
//   title: string;
//   date: string;
//   author: string;
//   views: string;
//   tags: string[];
//   description: string;
// }

// const HeroSection: React.FC = () => {
//   const [shows, setShows] = useState<Show[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const showsPerPage = 6;

//   useEffect(() => {
//     fetch('/data/shows.json')
//       .then((res) => res.json())
//       .then((data: Show[]) => setShows(data))
//       .catch((err) => console.error('Failed to load shows:', err));
//   }, []);

//   const slides: Slide[] = [...Array(8)].map((_, index) => ({
//     imageUrl: `https://picsum.photos/200/300?random=${index + 1}`,
//     title: `Cartoon Show ${index + 1}`,
//     description: 'Join the fun with your favorite cartoon characters. Watch now!',
//   }));

//   const recentPosts = shows.map((s) => s.title);

//   const indexOfLastShow = currentPage * showsPerPage;
//   const indexOfFirstShow = indexOfLastShow - showsPerPage;
//   const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
//   const totalPages = Math.ceil(shows.length / showsPerPage);

//   const nextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
//   const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
//   const goToPage = (page: number) => setCurrentPage(page);

//   return (
//     <section className="relative bg-white text-black">
//       <Carousel slides={slides} />
//       <CartoonCharacters />

//       <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 space-y-3">
//           {currentShows.map((show, index) => (
//             <ShowCard
//               key={index}
//               title={show.title}
//               imageUrl={show.imageUrl}
//               date={show.date}
//               author={show.author}
//               views={show.views}
//               tags={show.tags}
//               description={show.description}
//             />
//           ))}

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={goToPage}
//             onPrev={prevPage}
//             onNext={nextPage}
//           />
//         </div>

//         <RecentPosts posts={recentPosts} />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CartoonCharacters from '../components/CartoonCharacters';
import Pagination from './Pagination';
import Carousel from '../components/Carousel';
import ShowCard from '../components/ShowCard';
import RecentPosts from '../components/RecentPosts';

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
  const [shows, setShows] = useState<Show[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const showsPerPage = 6;

  const router = useRouter();
  const searchParams = useSearchParams();

  // To avoid infinite loops when syncing URL and state
  const lastURLPageRef = useRef<number | null>(null);

  // Fetch shows once on mount
  useEffect(() => {
    fetch('/data/shows.json')
      .then((res) => res.json())
      .then((data: Show[]) => setShows(data))
      .catch((err) => console.error('Failed to load shows:', err));
  }, []);

  const totalPages = Math.ceil(shows.length / showsPerPage);

  // Sync page from URL query param on load or URL change
  useEffect(() => {
    const pageParam = searchParams.get('page');
    let page = pageParam ? parseInt(pageParam, 10) : 1;
    if (isNaN(page) || page < 1) page = 1;
    else if (page > totalPages && totalPages > 0) page = totalPages;

    if (page !== currentPage) {
      setCurrentPage(page);
    }

    lastURLPageRef.current = page;
  }, [searchParams, totalPages, currentPage]);

  // Update URL when currentPage changes via UI
  const updateURL = (page: number) => {
    if (lastURLPageRef.current === page) return; // prevent loop

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);

    lastURLPageRef.current = page;
  };

  // Go to specific page with bounds checking
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    updateURL(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Pagination slice
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  // Sample carousel slides
  const slides: Slide[] = [...Array(8)].map((_, index) => ({
    imageUrl: `https://picsum.photos/200/300?random=${index + 1}`,
    title: `Cartoon Show ${index + 1}`,
    description: 'Join the fun with your favorite cartoon characters. Watch now!',
  }));

  const recentPosts = shows.map((s) => s.title);

  return (
    <section className="relative bg-white text-black">
      <Carousel slides={slides} />
      <CartoonCharacters />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-3">
          {currentShows.map((show, index) => (
            <ShowCard
              key={index}
              title={show.title}
              imageUrl={show.imageUrl}
              date={show.date}
              author={show.author}
              views={show.views}
              tags={show.tags}
              description={show.description}
            />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            onPrev={prevPage}
            onNext={nextPage}
          />
        </div>

        <RecentPosts posts={recentPosts} />
      </div>
    </section>
  );
};

export default HeroSection;




