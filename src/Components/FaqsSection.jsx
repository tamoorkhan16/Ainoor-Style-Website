import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle answer visibility
  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFaq}>
        {question}
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>{answer}</div>
    </div>
  );
};

const FaqsSection = () => {
  const faqData = [
    {
      question: "What is the delivery Time",
      answer:
        "International delivery typically takes 7–21 business days for standard shipping and 3–7 business days for express shipping, depending on the destination. Customs processing may add delays. Contact at @gmail.com for more precise estimates.",
    },
    {
      question: "What if the color product varies?",
      answer:
        "While we strive to display product colors as accurately as possible, variations may occur due to lighting, monitor settings, or manufacturing differences. If you're unsatisfied with the color, please refer to our Exchange and Returns Policy to initiate a return or exchange.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        " Yes, you can cancel your order before it has been shipped. Please contact our customer support team as soon as possible to process the cancellation. Once the order is shipped, cancellation may not be possible, but you can refer to our Returns and Exchange Policy for further assistance.",
    },
    {
      question: "Can I amend my order?",
      answer:
        "Yes, you can amend your order as long as it has not yet been shipped. Please contact our customer support team promptly to request any changes. Once the order is in the shipping process, amendments may not be possible, but you can refer to our Returns and Exchange Policy for further assistance.",
    },
    {
      question: "Can I return the product?",
      answer:
        "Yes, you can return the product within our specified return period if you are not satisfied with your purchase. Please ensure the item is unused and in its original packaging. For detailed instructions on the return process, refer to our Returns and Exchange Policy.",
    },
    {
      question: "What if my merchandise does not fit?",
      answer:
        "If your merchandise does not fit, you can return it for an exchange or a refund within our specified return period. Please ensure the item is unused and in its original packaging. For detailed instructions on the exchange process, refer to our Returns and Exchange Policy.",
    },
    {
      question: "What if my merchandise is damaged?",
      answer:
        " If your merchandise arrives damaged, please contact our customer support team within 48 hours of receiving your order. We will guide you through the return process and provide a replacement or refund. Make sure to keep all original packaging for reference.",
    },
    { question: "How shall I make a payment?", answer: "You can make a payment through bank transfer" },
    // Add more questions and answers here
  ];

  return (
    <div className="faqs-container">
      <h2>FAQs</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqsSection;
