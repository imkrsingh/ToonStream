'use client';
import React from 'react';

interface RecentPostsProps {
    posts: string[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
    return (
        <div className="w-full lg:w-1/4 hidden lg:block">
            <h2 className="text-xl font-bold mb-4 uppercase">Recent Posts</h2>
            <ul className="space-y-2">
                {posts.slice(0, 20).map((post, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className={`text-sm hover:text-blue-500 transition duration-200 ${index < 5
                                    ? 'text-pink-600 font-semibold pl-1 border-l-4 border-pink-500 bg-pink-50 rounded-sm'
                                    : 'text-gray-700'
                                }`}
                        >
                            • {post}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentPosts;
