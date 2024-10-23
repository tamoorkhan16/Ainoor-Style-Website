import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactStars from 'react-rating-stars-component';

const CustomerFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState({ name: '', email: '', rating: 0, comments: '' });

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackList([...feedbackList, feedback]);
    setFeedback({ name: '', email: '', rating: 0, comments: '' });
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  // Handle Star Rating Change
  const handleRatingChange = (newRating) => {
    setFeedback({ ...feedback, rating: newRating });
  };

  return (
    <div className="feedback-section">
      {/* Feedback Form with Animation */}
      <motion.div
        className="feedback-form"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h2>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="name"
            value={feedback.name}
            placeholder="Enter Your Name"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={feedback.email}
            placeholder="Enter Your Email"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <div className="rating-container">
            <label>Your Rating:</label>
            <ReactStars
              count={5}
              onChange={handleRatingChange}
              size={40}
              activeColor="#ffd700"
              value={feedback.rating}
            />
          </div>
          <textarea
            name="comments"
            value={feedback.comments}
            placeholder="Leave your comments here..."
            onChange={handleInputChange}
            className="textarea-field"
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="submit-button"
            type="submit"
          >
            Submit Feedback
          </motion.button>
        </form>
      </motion.div>

      {/* Feedback Display Section */}
      <div className="feedback-list">
        {feedbackList.map((item, index) => (
          <motion.div
            key={index}
            className="feedback-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{item.name}</h3>
            <ReactStars count={5} value={item.rating} size={30} edit={false} activeColor="#ffd700" />
            <p>{item.comments}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
