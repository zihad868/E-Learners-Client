import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import PropTypes from 'prop-types'; 
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(user?.email){
        return children;
    }

    if(loading){
        return <Spinner />
    }
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}