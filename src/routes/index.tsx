import React from 'react';

import AuthStack from './AuthRoute';
import FeedStack from './FeedRoute';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
    const { user } = useAuth();

    if(!user) {
        return <AuthStack/>
    } else {
        return <FeedStack/>
    }
}

export default Routes;