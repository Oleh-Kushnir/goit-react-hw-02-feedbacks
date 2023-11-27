import PropTypes from 'prop-types';

import { ButtonListItem, Button } from '../Feedback/Feedback.module.jsx';

const ButtonList = ({ options, increaseState }) => {
  return (
    <ButtonListItem>
      {options.map(el => (
        <Button key={el} onClick={() => increaseState(el)}>
          {el}
        </Button>
      ))}
    </ButtonListItem>
  );
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increaseState: PropTypes.func.isRequired,
};

export default ButtonList;
