import { useState } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is turnaround time for photos?',
      answer: 'The turnaround time depends on the complexity of the project. Generally, we aim to complete most projects within 12-24 hours.',
    },
    {
      question: 'How do I submit photos for editing?',
      answer: 'Request us to share a folder for easily submitting your photos. Alternatively, you can email your images directly to us. We accept various file formats and provide clear instructions for seamless submission, guaranteeing efficient service for your needs.',
    },
    {
      question: 'What file formats do you accept?',
      answer: 'We accept all major image file formats including JPEG, TIFF, and PNG. For special requests, please contact us.'
    },
    {
      question: 'Can you handle large volumes of images?',
      answer: 'Yes, we can handle both small and large volumes of images with equal attention to detail.',
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, we offer revisions to ensure the final images meet your expectations. Please review our revision policy for more details.',
    },
  ];

  return (
    <motion.div
      className="faq-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }} // Animation when 30% of the section is visible
    >
      <motion.h2
        className="faq-title"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        — Frequently Asked Questions (FAQ’s) —
      </motion.h2>
      <motion.div
        className="faq-items"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-left">
                <span className="faq-question-icon">?</span>
                <span className="faq-text">{faq.question}</span>
              </div>
              <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;