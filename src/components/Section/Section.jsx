import PropTypes from 'prop-types';

import { SectionStyled, FeedbackTitle } from '../Feedback/Feedback.module.jsx';
const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
