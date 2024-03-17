import React from 'react';
import PropTypes from 'prop-types';

const AuthenticatedPage = ({ user }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      {Object.entries(user).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-bold">{key}: </span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

AuthenticatedPage.propTypes = {
    user: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
}

export default AuthenticatedPage;