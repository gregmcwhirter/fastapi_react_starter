import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/roboto';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#181818' }}>
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
