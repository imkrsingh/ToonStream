// 'use client'
// import React from 'react';
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// const Footer: React.FC = () => {
//   return (
//     <>
//       {/* Glitter Pink Line Above Footer */}
//       <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 animate-glitter mb-0"></div>

//       <footer className="bg-gray-900 text-white py-8 mt-0">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {/* Company Info Section */}
//             <div>
//               <div className="text-2xl font-bold tracking-wider mb-4">DIVISIMA</div>
//               <p className="text-sm">
//                 Your ultimate destination for stylish clothing, jewelry, and more. Explore our collection and embrace the new trends.
//               </p>
//             </div>

//             {/* Links Section */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-pink-500 text-sm">Home</a></li>
//                 <li><a href="#" className="hover:text-pink-500 text-sm">Women</a></li>
//                 <li><a href="#" className="hover:text-pink-500 text-sm">Men</a></li>
//                 <li><a href="#" className="hover:text-pink-500 text-sm">Jewelry</a></li>
//                 <li><a href="#" className="hover:text-pink-500 text-sm">Shoes</a></li>
//               </ul>
//             </div>

//             {/* Social Media Section */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-white hover:text-pink-500"><FaFacebookF size={20} /></a>
//                 <a href="#" className="text-white hover:text-pink-500"><FaInstagram size={20} /></a>
//                 <a href="#" className="text-white hover:text-pink-500"><FaTwitter size={20} /></a>
//                 <a href="#" className="text-white hover:text-pink-500"><FaLinkedinIn size={20} /></a>
//               </div>
//             </div>

//             {/* Newsletter Section */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
//               <p className="text-sm mb-4">Stay updated with the latest trends and exclusive offers.</p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full p-2 rounded-l-md text-gray-700 focus:outline-none border border-pink-500 focus:border-pink-500"
//                 />

//                 <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="text-center mt-8 border-t border-gray-700 pt-4">
//             <p className="text-sm text-gray-400">&copy; 2025 DIVISIMA. All Rights Reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



'use client'
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      {/* Glitter Pink Line Above Footer */}
      <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 animate-glitter mb-0"></div>

      <footer className="bg-gray-900 text-white py-8 mt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold tracking-wider mb-4">ToonStream</div>
              <p className="text-sm">
                Your hub for the latest Hindi-dubbed anime and cartoons. Enjoy action, comedy, fantasy, and more—anytime, anywhere.
              </p>
            </div>

            {/* Links Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-500 text-sm">Home</a></li>
                <li><a href="#" className="hover:text-pink-500 text-sm">Latest Episodes</a></li>
                <li><a href="#" className="hover:text-pink-500 text-sm">Popular Series</a></li>
                <li><a href="#" className="hover:text-pink-500 text-sm">Genres</a></li>
                <li><a href="#" className="hover:text-pink-500 text-sm">Hindi Dubbed</a></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-white hover:text-pink-500"><FaFacebookF size={20} /></a>
                <a href="#" className="text-white hover:text-pink-500"><FaInstagram size={20} /></a>
                <a href="#" className="text-white hover:text-pink-500"><FaTwitter size={20} /></a>
                <a href="#" className="text-white hover:text-pink-500"><FaLinkedinIn size={20} /></a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg mb-4">Join the Toon Squad</h3>
              <p className="text-sm mb-4">Get updates about new episodes, special releases, and exclusive content.</p>
              <div className="flex justify-center sm:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto p-2 rounded-l-md text-gray-700 focus:outline-none border border-pink-500 focus:border-pink-500"
                />
                <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">&copy; 2025 ToonStream. All rights reserved. Made with ❤️ for cartoon lovers.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

