import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Simple Image App</h1>
      <p>This app displays an image with a header and footer.</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Header;
