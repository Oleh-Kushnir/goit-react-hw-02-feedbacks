import PropTypes from 'prop-types';

// import { FeedbackStatisticsItem } from './Feedback.styled.jsx';

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
