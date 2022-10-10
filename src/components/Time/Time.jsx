import React from "react";

import PropTypes from "prop-types";
import * as S from "./styles";

const Time = ({ error, ...props }) => {
  return (
    <S.Label htmlFor="time">
      <S.TimeSpan>
        Time:
        <div>
          <S.TimeInput error={props.error} {...props} type="time" id="time" />
        </div>
        {error && <S.Error>{error}</S.Error>}
      </S.TimeSpan>
    </S.Label>
  );
};

Time.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Time;
