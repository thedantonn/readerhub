import React, { useState } from 'react';
import Card from '../components/Card';
import articles from '../../articles.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [article, SetArticle] = useState(articles);
    const sortCategory = ["Technology", "Health", 'Travel', "Business"];

    const handleCategory = (category) => {
        const filteredArticles = articles.filter((article) => article.category === category);
        SetArticle(filteredArticles);
        console.log(filteredArticles);
    };

    return (
        <div>
            <div className='container mx-auto p-4 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {sortCategory.map((category) => (
                    <button key={category} onClick={() => handleCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {article.map((article, index) => (
                    <Link key={index} to={"/article/"+index}>
                        <Card {...article} />
                      </Link>
      
                ))}
            </div>
        </div>
    );
};

export default HomePage;
