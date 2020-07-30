import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllNames } from "../actions";

const FetchNames = (props) => {
  useEffect(() => {
    props.fetchAllNames();
  }, []);

  return (
    <div>
      <h1>INSPIRING QUOTES</h1>
      {props.quotes.map((quote) => {
        return <p>{quote.en}</p>;
      })}
    </div>
  );
};

const mapDispatchToProps = {
  fetchAllNames,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    fetchError: state.fetchError,
    quotes: state.quotes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchNames);
