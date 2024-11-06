import React from 'react';

const ImageDisplay = () => {
  return (
    <div style={styles.imageContainer}>
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder"
        style={styles.image}
      />
      <h2>Beautiful Scenery</h2>
      <p>This is an example of a simple image displayed with React.</p>
    </div>
  );
};

const styles = {
  imageContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
  },
};

export default ImageDisplay;
