import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {

    const galleryItems = [
        {
            id: 1,
            image: 'IMG_1653.jpg',
            title: 'Annual Sports Meet 2024',
            category: 'sports',
            description: 'Students participating in annual sports meet'
        },
        {
            id: 2,
            image: 'IMG_20230423_183152.jpg',
            title: 'Cultural Program',
            category: 'cultural',
            description: 'Traditional dance performance'
        },
        {
            id: 2,
            image: 'IMG_20240201_140228 (2)[1].jpg',
            title: 'Cultural Program',
            category: 'cultural',
            description: 'Traditional dance performance'
        },
        {
            id: 2,
            image: 'IMG_20240416_053528.jpg',
            title: 'Cultural Program',
            category: 'cultural',
            description: 'Traditional dance performance'
        },
        {
            id: 2,
            image: 'IMG_20240416_064330.jpg',
            title: 'Cultural Program',
            category: 'cultural',
            description: 'Traditional dance performance'
        },
        {
            id: 2,
            image: 'BackGround.jpg',
            title: 'Cultural Program',
            category: 'cultural',
            description: 'Traditional dance performance'
        },
    ];

    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'sports', name: 'Sports' },
        { id: 'cultural', name: 'Cultural' },
        { id: 'academic', name: 'Academic' },
        { id: 'events', name: 'Events' }
    ];

    const filteredImages = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h1>School Gallery</h1>
                <p>Capturing moments and memories at Hatharaliyadda Primary School</p>
            </div>


            <div className="gallery-filters">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                        onClick={() => setFilter(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredImages.map(item => (
                    <div 
                        key={item.id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.image} alt={item.title} />
                        <div className="gallery-item-overlay">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span 
                            className="close-button" 
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </span>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="modal-info">
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;