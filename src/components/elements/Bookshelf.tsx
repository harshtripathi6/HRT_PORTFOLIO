import React from 'react';
import { booksData } from '../../data/learningData';

const Bookshelf = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-start px-4">
      {/* Bookshelf Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {booksData.map((book) => (
          <a
            key={book.title}
            href={book.link ? book.link : ''}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 bg-white rounded-lg shadow hover:shadow-md transition ${
              book.status === 'reading' ? 'border-2 border-blue-500' : ''
            }`}
          >
            {/* Book Cover */}
            <div
              className={`w-full h-48 mb-4 rounded-md overflow-hidden ${
                book.status === 'reading' ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {book.cover ? (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Cover Available
                </div>
              )}
            </div>

            {/* Book Info */}
            <h3 className="text-lg font-medium text-gray-800">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            {book.status === 'reading' && (
              <p className="mt-2 text-sm font-semibold text-blue-500">
                Currently Reading
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
