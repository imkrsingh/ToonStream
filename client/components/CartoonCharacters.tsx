'use client';
import React from 'react';

const CartoonCharacters: React.FC = () => {
  // Array for cartoon characters
  const cartoons = [
    { name: 'Mickey Mouse', imageUrl: 'https://picsum.photos/200/200?random=1' },
    { name: 'Johnny Bravo', imageUrl: 'https://picsum.photos/200/200?random=2' },
    { name: 'Oswald', imageUrl: 'https://picsum.photos/200/200?random=3' },
    { name: 'Dragon Ball Z', imageUrl: 'https://picsum.photos/200/200?random=4' },
    { name: 'Doraemon', imageUrl: 'https://picsum.photos/200/200?random=5' },
    { name: 'Tom & Jerry', imageUrl: 'https://picsum.photos/200/200?random=6' },
    { name: 'Scooby-Doo', imageUrl: 'https://picsum.photos/200/200?random=7' },
  ];

  return (
    <div className="relative py-8 cursor-pointer">
      {/* Cloudy/Blurry Effect */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-60 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {cartoons.map((cartoon, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 animate-float">
                {/* Rotating Border */}
                <div
                  className="absolute inset-[-10px] rounded-full animate-spin-slow z-0"
                  style={{
                    background:
                      'conic-gradient(var(--color-gray-900) 0deg 180deg, var(--color-pink-500) 180deg 360deg)',
                    padding: '10px', // Thicker border
                  }}
                >
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
                {/* Static Image with Permanent Effect */}
                <img
                  src={cartoon.imageUrl}
                  alt={cartoon.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-xl scale-110 transition-transform duration-300 z-20"
                />
                {/* Permanent Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-20 blur-md z-10"></div>
              </div>
              <span className="mt-2 text-lg sm:text-xl font-semibold text-black transition-colors duration-300">
                {cartoon.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
          
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CartoonCharacters;
