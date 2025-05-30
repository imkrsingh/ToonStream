// 'use client';
// import React, { useState } from 'react';

// interface AuthModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
//     const [isLogin, setIsLogin] = useState(true);

//     if (!isOpen) return null;

//     // Online images
//     const loginImage =
//         'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80';
//     const registerImage =
//         'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80';

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
//             <div className="relative w-full max-w-4xl mx-4 sm:mx-0 bg-white rounded-2xl overflow-hidden shadow-2xl animate-fadeIn grid grid-cols-1 md:grid-cols-2">

//                 {/* Left Image */}
//                 <div className="relative hidden md:block">
//                     <img
//                         src={isLogin ? loginImage : registerImage}
//                         alt="Auth Visual"
//                         className="h-full w-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 to-purple-600/60 mix-blend-multiply" />
//                 </div>

//                 {/* Right Form */}
//                 <div className="relative p-8 bg-white/90 backdrop-blur">
//                     {/* Close Button */}
//                     <button
//                         onClick={onClose}
//                         className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold transition duration-300 cursor-pointer"
//                         title="Close"
//                     >
//                         ×
//                     </button>

//                     {/* Header */}
//                     <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
//                         {isLogin ? 'Welcome Back!' : 'Create an Account'}
//                     </h2>
//                     <p className="text-sm text-gray-500 mb-6">
//                         {isLogin ? 'Login to continue.' : 'Sign up to get started.'}
//                     </p>

//                     {/* Tabs */}
//                     <div className="flex gap-6 mb-6">
//                         <button
//                             onClick={() => setIsLogin(true)}
//                             className={`text-sm font-semibold pb-1 border-b-2 transition cursor-pointer ${isLogin ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent'
//                                 }`}
//                         >
//                             Login
//                         </button>
//                         <button
//                             onClick={() => setIsLogin(false)}
//                             className={`text-sm font-semibold pb-1 border-b-2 transition cursor-pointer ${!isLogin ? 'text-green-600 border-green-600' : 'text-gray-400 border-transparent'
//                                 }`}
//                         >
//                             Register
//                         </button>
//                     </div>

//                     {/* Form */}
//                     <form className="space-y-4">
//                         {!isLogin && (
//                             <>
//                                 <input
//                                     type="text"
//                                     placeholder="Full Name"
//                                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//                                 />
//                             </>
//                         )}
//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                         />
//                         {!isLogin && (
//                             <input
//                                 type="password"
//                                 placeholder="Repeat Password"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//                             />
//                         )}

//                         {/* Checkbox */}
//                         <div className="flex items-center text-xs text-gray-600">
//                             <input type="checkbox" className="mr-2 cursor-pointer" />
//                             <span>
//                                 I agree to the{' '}
//                                 <span className="font-semibold underline cursor-pointer">
//                                     Terms of Use
//                                 </span>
//                             </span>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className={`w-full py-2 rounded-lg text-white font-semibold transition cursor-pointer ${isLogin
//                                     ? 'bg-blue-600 hover:bg-blue-700'
//                                     : 'bg-green-600 hover:bg-green-700'
//                                 }`}
//                         >
//                             {isLogin ? 'Sign In' : 'Sign Up'}
//                         </button>
//                     </form>

//                     {/* Footer Link */}
//                     <div className="text-center mt-6">
//                         {isLogin ? (
//                             <p className="text-xs text-gray-600">
//                                 Don’t have an account?{' '}
//                                 <button
//                                     onClick={() => setIsLogin(false)}
//                                     className="text-blue-600 font-semibold underline cursor-pointer"
//                                 >
//                                     Register
//                                 </button>
//                             </p>
//                         ) : (
//                             <p className="text-xs text-gray-600">
//                                 Already have an account?{' '}
//                                 <button
//                                     onClick={() => setIsLogin(true)}
//                                     className="text-green-600 font-semibold underline cursor-pointer"
//                                 >
//                                     Login
//                                 </button>
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//         .animate-fadeIn {
//           animation: fadeInScale 0.3s ease-in-out forwards;
//         }

//         @keyframes fadeInScale {
//           0% {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default AuthModal;


'use client';
import React, { useState } from 'react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [animating, setAnimating] = useState(false);

    if (!isOpen) return null;

    const loginImage =
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80';
    const registerImage =
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80';

    const handleTabSwitch = (login: boolean) => {
        if (login !== isLogin) {
            setAnimating(true);
            setTimeout(() => {
                setIsLogin(login);
                setAnimating(false);
            }, 300); // match animation duration
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-4 sm:mx-0 bg-white rounded-2xl overflow-hidden shadow-2xl animate-fadeIn grid grid-cols-1 md:grid-cols-2">

                {/* Left Image */}
                <div className="relative hidden md:block">
                    <img
                        src={isLogin ? loginImage : registerImage}
                        alt="Auth Visual"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 to-purple-600/60 mix-blend-multiply" />
                </div>

                {/* Right Form */}
                <div className="relative p-8 bg-white/90 backdrop-blur">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold transition duration-300 cursor-pointer"
                        title="Close"
                    >
                        ×
                    </button>

                    {/* Header */}
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2 fade-in-fast">
                        {isLogin ? 'Welcome Back!' : 'Create an Account'}
                    </h2>
                    <p className="text-sm text-gray-500 mb-6 fade-in-slow">
                        {isLogin ? 'Login to continue.' : 'Sign up to get started.'}
                    </p>

                    {/* Tabs */}
                    <div className="flex gap-6 mb-6">
                        <button
                            onClick={() => handleTabSwitch(true)}
                            className={`text-sm font-semibold pb-1 border-b-2 transition cursor-pointer ${isLogin ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent'}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => handleTabSwitch(false)}
                            className={`text-sm font-semibold pb-1 border-b-2 transition cursor-pointer ${!isLogin ? 'text-green-600 border-green-600' : 'text-gray-400 border-transparent'}`}
                        >
                            Register
                        </button>
                    </div>

                    {/* Animated Form Wrapper */}
                    <div className={`transition-all duration-300 transform ${animating ? 'opacity-0 translate-x-6' : 'opacity-100 translate-x-0'}`}>
                        <form className="space-y-4">
                            {!isLogin && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="fade-in w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="fade-in w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                                    />
                                </>
                            )}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={`fade-in w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 ${isLogin ? 'focus:ring-blue-400' : 'focus:ring-green-400'} outline-none`}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className={`fade-in w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 ${isLogin ? 'focus:ring-blue-400' : 'focus:ring-green-400'} outline-none`}
                            />
                            {!isLogin && (
                                <input
                                    type="password"
                                    placeholder="Repeat Password"
                                    className="fade-in w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                                />
                            )}

                            <div className="flex items-center text-xs text-gray-600">
                                <input type="checkbox" className="mr-2 cursor-pointer" />
                                <span>
                                    I agree to the{' '}
                                    <span className="font-semibold underline cursor-pointer">
                                        Terms of Use
                                    </span>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2 rounded-lg text-white font-semibold transition cursor-pointer ${isLogin ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        {isLogin ? (
                            <p className="text-xs text-gray-600">
                                Don’t have an account?{' '}
                                <button
                                    onClick={() => handleTabSwitch(false)}
                                    className="text-blue-600 font-semibold underline cursor-pointer"
                                >
                                    Register
                                </button>
                            </p>
                        ) : (
                            <p className="text-xs text-gray-600">
                                Already have an account?{' '}
                                <button
                                    onClick={() => handleTabSwitch(true)}
                                    className="text-green-600 font-semibold underline cursor-pointer"
                                >
                                    Login
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                .animate-fadeIn {
                    animation: fadeInScale 0.3s ease-in-out forwards;
                }

                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .fade-in {
                    animation: fadeIn 0.4s ease-in forwards;
                }

                .fade-in-fast {
                    animation: fadeIn 0.3s ease-in forwards;
                }

                .fade-in-slow {
                    animation: fadeIn 0.6s ease-in forwards;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default AuthModal;
