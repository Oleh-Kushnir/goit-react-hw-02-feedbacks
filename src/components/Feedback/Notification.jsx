import PropTypes from 'prop-types';

import { FeedbackStatisticsItem } from '../Feedback/Feedback.module.jsx';

const Notification = ({ message }) => {
  return <FeedbackStatisticsItem>{message}</FeedbackStatisticsItem>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
