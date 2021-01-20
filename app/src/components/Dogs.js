import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions/getDog'

const Dogs = ({ dogImg, isFetching, error, getDog }) => {
  useEffect(() => {
    getDog();
  }, []);

  const handleClick = () => {
    getDog();
  }

  if (error) {
    return <h2>An error has occured: {error}</h2>
  }

  if (isFetching) {
    return <h2>Fetching Dog Image!</h2>
  }

  return (
    <>
      <img src={dogImg} alt='dog'/>
      <button onClick={handleClick}>Generate Doggo</button>  

    </>
  )


}



const mapStateToProps = state => {
  return {
    dogImg: state.dogImg,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getDog })(Dogs);