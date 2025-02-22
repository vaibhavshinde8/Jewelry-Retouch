import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Earring from "../assets/SE-1.png";
import Pendant from "../assets/SE-2.png";
import Ring from "../assets/SE-3.png";
import Bracelet from "../assets/SE-4.png";
import Necklace from "../assets/SE-5.png";
import Watch from "../assets/SE-6.png";
import "../styles/Retouching.css";

const Retouch = () => {
  const services = [
    {
      title: "Earring Editing Services",
      description:
      "Our Services focus on refining the details of your earring images to showcase their beauty and craftsmanship. We enhance clarity, adjust lighting, ensuring each earring is presented in its best light.",
      image: Earring,
    },
    {
      title: "Pendant Editing Services",
      description:
      "Pendant Editing Services are tailored to enhance the elegance of your pendant images by perfecting every intricate detail. We adjust lighting, sharpen designs, and emphasize shine, ensuring your pendants look flawless.",
      image: Pendant,
    },
    {
      title: "Ring Editing Services",
      description:
        "We enhance the intricate details and shine of your rings, bringing out their full brilliance by fine-tuning lighting, removing imperfections, and highlighting design features to create flawless images.",
      image: Ring,
    },
    {
      title: "Necklace Editing Services",
      description:
        "Necklace Editing Services are crafted to bring out the true elegance and beauty of your necklaces, ensuring they captivate in every image. We focus on enhancing clarity, adjusting lighting, and perfecting the shine.",
      image: Necklace,
    },
    {
      title: "Bracelet Editing Services",
      description:
        "Whether it's highlighting gemstones, metal finishes, or unique designs, refine elements for a flawless appearance by adjusting lighting, removing imperfections, and emphasizing the bracelet's texture and sparkle.",
      image: Bracelet,
    },
    {
      title: "Watch Editing Services",
      description:
        "Our Watch Retouching Services are designed to perfect every detail of your timepiece images, ensuring they look flawless and high-end. We expertly enhance the watch’s dial, strap, and casing, correcting imperfections and refining the shine.",
      image: Watch,
    },
  ];

  return (
    <motion.section
      className="photo-services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>— High-End Jewelry Retouching Services —</h2>
      <p>We specialize in high-end jewelry retouching that enhances the beauty and detail of your jewelry pieces.</p>

      <div className="services-grid">
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className="services-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Separate div for the image */}
              <div className="image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>

              {/* Separate div for the title */}
              <div className="title-container">
                <h3>{service.title}</h3>
              </div>

              {/* Separate div for the description */}
              <div className="description-container">
                <p>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Retouch;
