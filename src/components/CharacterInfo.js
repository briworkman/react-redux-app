import React, { useEffect } from "react";
import { connect } from "react-redux";
import Info from "./Info";
import { fetchInfo } from "../actions";

export const CharacterInfo = props => {
  useEffect(() => {
    props.fetchInfo();
  }, []);
  if (props.isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.characterInfo.map(info => (
        <Info key={info.char_id} info={info} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterInfo: state.characterInfo,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchInfo }
)(CharacterInfo);
