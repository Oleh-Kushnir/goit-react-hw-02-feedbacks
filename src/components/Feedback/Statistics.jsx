import PropTypes from 'prop-types';

import { StateList, StateItem } from '../Feedback/Feedback.module.jsx';

const Statistics = ({ options, feedbackArr, total, positivePercentage }) => {
  return (
    <StateList>
      {options.map((element, i) => (
        <StateItem key={element}>
          {element}:{feedbackArr[i]}
        </StateItem>
      ))}
      <StateItem>Total Feedback: {total}</StateItem>
      {total !== 0 && (
        <StateItem>
          Precent of positive Feedback: {positivePercentage} %
        </StateItem>
      )}
    </StateList>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  feedbackArr: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
