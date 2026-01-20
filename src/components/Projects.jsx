import { useState, useEffect, useCallback } from "react";
import "./css/Projects.css";
import { FaArrowLeft, FaArrowRight, FaTimes, FaStar } from "react-icons/fa";

// Dynamic image loading
const site1Images = import.meta.glob("../assets/site1/*.{jpg,jpeg}", { eager: true, query: "?url", import: "default" });
const site2Images = import.meta.glob("../assets/site2/*.{jpg,jpeg}", { eager: true, query: "?url", import: "default" });
const site3Images = import.meta.glob("../assets/site3/*.{jpg,jpeg}", { eager: true, query: "?url", import: "default" });

// Helper to sort images numerically (site1-1.jpg, site1-2.jpg, ... site1-10.jpg)
const sortImages = (imagesObj) => {
  return Object.keys(imagesObj)
    .sort((a, b) => {
      // Extract number from filename (e.g. site1-1.jpg or site3-10.jpeg)
      const matchA = a.match(/site\d+-(\d+)\.(jpg|jpeg)$/);
      const matchB = b.match(/site\d+-(\d+)\.(jpg|jpeg)$/);
      const numA = parseInt(matchA?.[1] || "0", 10);
      const numB = parseInt(matchB?.[1] || "0", 10);
      return numA - numB;
    })
    .map((key) => imagesObj[key]);
};

// Processed image arrays
const project1Images = sortImages(site1Images);
const project2Images = sortImages(site2Images);
const project3Images = sortImages(site3Images);

const projectsData = [
  {
    id: 1,
    title: "1 BHK Project – Vivek, Sankalp, Goregaon (E)",
    category: "Residential",
    description: "Smartly designed 1 BHK focused on space optimization, clean finishes, and practical storage, creating a comfortable and modern compact home.",
    coverImage: project1Images[0], // First image as cover
    images: project1Images,
  },
  {
    id: 2,
    title: "4 BHK Duplex Project – 10 BKC by Adani, Bandra (E)",
    category: "Luxury",
    description: "A luxury duplex featuring refined materials, elegant detailing, and well-planned spaces for a sophisticated living experience.",
    coverImage: project2Images[0], // First image as cover
    images: project2Images,
  },
  {
    id: 3,
    title: "2BHK Interior @ VKG Chakala, Andheri East",
    category: "Residential",
    description: "A contemporary 2BHK designed with functional layouts, modern aesthetics, and a warm color palette for a welcoming urban home.",
    coverImage: project3Images[0], // First image as cover
    images: project3Images,
  },
];

const AUTO_SLIDE_DURATION = 8000; // 8 seconds

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 'key' state is used to force re-render/reset animations when manually changing slides
  const [timerKey, setTimerKey] = useState(0);

  const openGallery = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    setTimerKey(Date.now());
    document.body.style.overflow = "hidden";
  };

  const closeGallery = useCallback(() => {
    setActiveProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) => {
      // Loop back to start
      const isLast = prev === activeProject.images.length - 1;
      return isLast ? 0 : prev + 1;
    });
    setTimerKey(Date.now()); // Reset progress bar animation
  }, [activeProject]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!activeProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
    setTimerKey(Date.now());
  }, [activeProject]);

  // Auto-advance logic
  useEffect(() => {
    if (!activeProject) return;

    const timer = setTimeout(() => {
      nextImage();
    }, AUTO_SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeProject, currentImageIndex, timerKey, nextImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeProject) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, closeGallery, nextImage, prevImage]);

  // Render progress bars
  const renderIndicators = () => {
    if (!activeProject) return null;
    return (
      <div className="gallery-indicators">
        {activeProject.images.map((_, idx) => {
          let fillClass = "indicator-fill";
          if (idx < currentImageIndex) {
            fillClass += " filled"; // Already shown
          } else if (idx === currentImageIndex) {
            fillClass += " active"; // Currently showing (animating)
          }
          // idx > currentImageIndex => default empty

          return (
            <div key={idx} className="indicator-bar">
              {/* Key on the fill element is crucial to restart animation */}
              <div
                className={fillClass}
                key={`${idx}-${timerKey}`}
                style={{ animationDuration: `${AUTO_SLIDE_DURATION}ms` }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADER */}
        <header
          className="projects-head"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="projects-title">Our Projects</h2>
          <p className="projects-sub">
            Explore our portfolio of crafted spaces and premium designs.
          </p>
        </header>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 300}
              data-aos-duration="600"
              onClick={() => openGallery(project)}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="project-image"
              />

              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY OVERLAY (NO AOS HERE) */}
      {activeProject && (
        <div className="gallery-overlay">
          {renderIndicators()}

          <button className="close-btn" onClick={closeGallery}>
            <FaTimes />
          </button>

          {/* LEFT CLICK ZONE */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "20%",
              zIndex: 10001,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <button
              className="nav-btn prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaArrowLeft />
            </button>
          </div>

          {/* GALLERY CONTENT */}
          <div className="gallery-content">
            <img
              key={currentImageIndex}
              src={activeProject.images[currentImageIndex]}
              alt={`${activeProject.title} - ${currentImageIndex + 1}`}
              className="gallery-main-image"
            />

            <div className="gallery-info-overlay">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginTop: "10px",
                  color: "#fbbf24",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CLICK ZONE */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "20%",
              zIndex: 10001,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <button
              className="nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );

};

export default Projects;
