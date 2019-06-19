import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadImages } from "../../actions"
import './styles.css';

class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, isLoading, loadImages } = this.props;
        return (
            <div className="content">
                {isLoading && !error ?
                    'Loading Images....' :
                    <section className="grid">
                        {images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                    </section>
                }
                {isLoading || error  ? '' : <button onClick={loadImages} >Load Images</button> }
                {error ? 'Sorry!!!! Server Error' : '' }

            </div>
        );
    }
}

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
