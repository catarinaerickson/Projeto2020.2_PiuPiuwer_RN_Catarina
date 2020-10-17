import React, { useCallback } from 'react';
import { useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Piu from '../../components/Piu';
import { PageFeedContainer, Header, Logo, FeatherButton, LogOutButton } from './styles';

import LogoImg from '../../assets/images/logo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { useAuth } from '../../hooks/auth';



const Feed: React.FC = () => {
    const { navigate } = useNavigation();

    const handleNaviteToInpiu = useCallback(() => {
        navigate('Inpiu')
    }, [navigate])

    const { logout } = useAuth();

    const handleLogout = useCallback(() => {
        logout();
    }, [logout])


    return(
        <PageFeedContainer>
            <Header>
                <Logo source={LogoImg} resizeMode='contain'/>
                <LogOutButton onPress={ handleLogout}>
                    <Feather name="log-out" size={22} color="#ffe600"/>
                </LogOutButton>
            </Header>
            <ScrollView>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
                <Piu/>
            </ScrollView>
            <FeatherButton onPress={handleNaviteToInpiu}>

                <MaterialCommunityIcons name="plus" size={20} color="#fff" />
                <MaterialCommunityIcons name="feather" size={35} color="#fff"/>
            </FeatherButton>
        </PageFeedContainer>
    )
}

export default Feed;