"use client";

import { useState } from 'react';

const Tags = ({ text, availableTags, onTagClick }) => {
  const [selectedTags, setSelectedTags] = useState([text]);

  const handleTagClick = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
    onTagClick(newSelectedTags.join(', ')); // Update the prompt with selected tags
  };

  return (
    <div className="flex space-x-2 flex-wrap gap-2">
      {availableTags.map((tag) => (
        <button
          key={tag}
          className={`${
            selectedTags.includes(tag) ? 'bg-white text-black' : 'bg-black-300 text-white'
          } flex flex-col flex-wrap gap-3 hover:bg-green-900 border-2 border-gray-500 font-bold py-2 px-4 rounded-full border`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;