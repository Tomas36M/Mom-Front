import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute = ({ element }) => {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return element;
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default ProtectedRoute;