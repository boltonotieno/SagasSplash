import React, { useEffect } from 'react';
import './styles.css';

const ImageGrid = (props) => {

    useEffect(() => {
        props.loadImages();
    }, []);

    const { images, error, isLoading, loadImages } = props;
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

export default ImageGrid;
