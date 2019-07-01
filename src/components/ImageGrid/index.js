import { connect } from "react-redux";
import { loadImages } from "../../actions"
import ImageGrid from './ImageGrid';

const mapStateToProps = ({ isLoading, error, images, nextPage }) => ({
    isLoading,
    error,
    images,
    nextPage,
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
