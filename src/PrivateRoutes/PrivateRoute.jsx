import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import PropTypes from 'prop-types'; 
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if(user?.email){
        return children;
    }


    
    return <Navigate to='/authentication/signin' />
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}