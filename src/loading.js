import React from "react";

const Loading = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{props.msg}</div>
    </div>
  );
};

Loading.defaultProps = {
  msg: "Loading..."
};

export default Loading;
