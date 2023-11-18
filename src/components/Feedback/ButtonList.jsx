import PropTypes from 'prop-types';

const ButtonList = ({ options, increaseState }) => {
  return (
    <div>
      {options.map(el => (
        <button key={el} onClick={() => increaseState(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increaseState: PropTypes.func.isRequired,
};

export default ButtonList;
