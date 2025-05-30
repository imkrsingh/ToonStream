'use client';
import React from 'react';
import Link from 'next/link';

interface ShowCardProps {
    title: string;
    imageUrl: string;
    date: string;
    author: string;
    views: string;
    tags: string[];
    description: string;
}

const slugify = (text: string): string =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const ShowCard: React.FC<ShowCardProps> = ({
    title,
    imageUrl,
    date,
    author,
    views,
    tags,
    description,
}) => {
    return (
        <Link
            href={`/shows/${slugify(title)}`}
            className="bg-white shadow-md rounded-lg overflow-hidden flex h-60 hover:shadow-lg transition"
        >
            <div className="w-1/2 h-full">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-3 flex flex-col justify-center">
                <h3 className="font-semibold text-sm text-orange-500 mb-1">{title}</h3>
                <div className="text-xs text-gray-600 mb-1">
                    <span>{date}</span> • <span>{author}</span> • <span>{views}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-1">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-200 text-black px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-xs text-gray-700 line-clamp-2">{description}</p>
            </div>
        </Link>
    );
};

export default ShowCard;
