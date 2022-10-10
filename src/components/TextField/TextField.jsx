import PropTypes from "prop-types";

import * as S from "./styles";

const TextField = ({ error, ...props }) => {
  return (
    <S.Container>
      {props.label && props.label}
      <S.Input error={error} {...props} /> {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextField;
