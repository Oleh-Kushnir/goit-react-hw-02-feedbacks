import PropTypes from 'prop-types';

const Statistics = ({ options, feedbackArr, total, positivePercentage }) => {
  return (
    <div>
      {options.map((element, i) => (
        <div key={element}>
          {element}:{feedbackArr[i]}
        </div>
      ))}
      <div>Total Feedback: {total}</div>
      {total !== 0 && (
        <div>Precent of positive Feedback: {positivePercentage} %</div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  feedbackArr: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
