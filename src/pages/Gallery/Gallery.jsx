import React, { useState, useMemo } from 'react';
import { FaFilter } from 'react-icons/fa';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { galleryItems, categories } from '../../data/gallery';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  useRevealOnScroll();

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.gallery}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Browse our portfolio of stunning braided hairstyles and transformations.</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            subtitle="Portfolio"
            title="Styles That Inspire"
            description="From everyday protective styles to show-stopping event looks — see what we can create for you."
          />

          {/* Filter */}
          <div className={styles.filter}>
            <div className={styles.filterIcon}>
              <FaFilter />
            </div>
            <div className={styles.filterButtons}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className={styles.empty}>
              <p>No styles found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;