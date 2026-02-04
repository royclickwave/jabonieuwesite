const brands = [
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-dolmar-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-esso-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-husqvarna-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-karcher-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-kioti-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-makita-300x227.webp',
    'https://jabotuinenpark.nl/wp-content/uploads/2023/02/logo-stihl-300x227.webp'
];

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <h3 className="brands-title">Wij werken met de beste merken</h3>
                <div className="marquee">
                    <div className="marquee-content">
                        {[...brands, ...brands].map((brand, idx) => (
                            <img key={idx} src={brand} alt="brand" />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .brands {
          padding: 4rem 0;
          background-color: var(--bg-gray);
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .brands-title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 1.2rem;
          color: var(--text-muted);
        }

        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-content {
          display: flex;
          gap: 5rem;
          width: fit-content;
          animation: scroll 30s linear infinite;
        }

        .marquee-content img {
          height: 60px;
          filter: grayscale(1);
          opacity: 0.6;
          transition: var(--transition);
        }

        .marquee-content img:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default Brands;
