import { motion } from "framer-motion"; // Importing motion from framer-motion
import { useInView } from "react-intersection-observer"; // Importing useInView for scroll-triggered animations
import background from "../assets/P-1.png";
import shadow from "../assets/P-2.png";
import Eyes from "../assets/P-3.png";
import scratch from "../assets/P-4.png";
import color from "../assets/P-5.png";
import Reflection from "../assets/P-6.png";
import "../styles/PhotoSolutions.css";

const PhotoSolutions = () => {
  const solutions = [
    { title: "Background Removal", description: "Isolate backgrounds give your product images a clean, professional look by eliminating distracting or unappealing backgrounds.", image: background },
    { title: "Metal Retouching", description: "Enhance the beauty and shine of your jewelry’s metal elements by removing imperfections, adjusting reflections, and ensuring a flawless finish.", image: shadow },
    { title: "Gemstone Enhancement", description: "Bring true brilliance and vibrancy to your gemstones, ensuring they captivate with their full color and clarity perfect for showcasing in catalogs, online stores.", image: Eyes },
    { title: "Color Correction", description: "Proper color correction creates a cohesive and professional look. We expertly adjust brightness, contrast, saturation, and hues, to enhance the intended shades of your jewelry.", image: scratch },
    { title: "Re-Color", description: "Whether you're looking to transform the color of jewelry, our re-coloring service ensures that your gold and silver jewelry always looks its best, with a stunning and professional appearance.", image: color },
    { title: "Shadow Creation", description: "Shadow Creation service adds depth and dimension to your images by creating realistic and flattering shadows that enhance the visual appeal of your jewelry.", image: Reflection },
  ];

  return (
    <section className="photo-solutions">
      <h2>— Photo Editing Solutions We Offer —</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="solution-item"
            // Setting up scroll-triggered animation
            initial={{ opacity: 0, y: 50 }} // Starting point: invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // End point: fully visible and in place when in view
            transition={{ delay: index * 0.2, duration: 0.5 }} // Delay each item slightly for staggered effect
            viewport={{ once: true, amount: 0.1 }} // Trigger animation once when 10% of the item is in view
          >
            <img src={solution.image} alt={solution.title} className="solution-image" />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSolutions;
