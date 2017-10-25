import AllPuppies from './AllPuppies'
import { connect } from 'react-redux';
import { fetchPuppies } from './action-creators'


// const hardCodedData = [
//   { id: 1, name: 'Cody' },
//   { id: 2, name: 'Ben' },
//   { id: 3, name: 'Bubba' }
// ];


const mapStateToProps = (state) => {
  return {
    allPuppies: state.allPuppies
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadPuppies: function () {
      dispatch(fetchPuppies()) // weird that we invoke fetch puppies also weird that we call dispatch on it ******
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(AllPuppies)


export default Container
