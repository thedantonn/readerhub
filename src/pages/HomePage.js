import React from 'react';
import Card from '../components/Card';

const articles = [
  {
    title: "Understanding React Hooks",
    excerpt: "A comprehensive guide to React hooks and how to use them effectively.",
    thumbnail: "https://via.placeholder.com/150",
    readingTime: "5",
    category: "Technology",
    lastEdited: "Jan 10, 2025",
  },
  // Add more articles as needed
];

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.map((article, index) => (
        <Card key={index} {...article} />
      ))}
    </div>
  );
};

export default HomePage;
