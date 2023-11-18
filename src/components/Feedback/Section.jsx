import PropTypes from 'prop-types';

// import { SectionStyled, FeedbackTitle } from './Feedback.styled';
const Section = ({ title, children }) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
