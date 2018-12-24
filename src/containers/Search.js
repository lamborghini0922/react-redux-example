import Search from "../components/Search";
import getUrls from "../actions/getUrls";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUrls: word => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
