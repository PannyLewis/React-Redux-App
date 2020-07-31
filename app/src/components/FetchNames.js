import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllNames } from "../actions";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: lightblue;
  font-size: 1.8rem;
  width: 50%;
  margin: 2.5% auto;
`;

const FetchNames = (props) => {
  useEffect(() => {
    props.fetchAllNames();
  }, []);

  return (
    <div>
      <h1>INSPIRING QUOTES</h1>
      <StyledDiv key={props.quotes.id}>
        {props.quotes.map((quote) => {
          return <p> {quote.en} </p>;
        })}
      </StyledDiv>
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
