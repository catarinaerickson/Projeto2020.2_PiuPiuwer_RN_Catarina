import React, { useCallback, useState } from 'react';
import { Button, RefreshControl } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { PageFeedContainer, Header, Logo, FeatherButton, LogOutButton, UserBlock, ModalImgContainer, ModalProfileImg, UserInfo, Name, Username, CheckIcon, LogoutBlock, ModalLogoutButton, ModalButtonText } from './styles';

import Piu from '../../components/Piu';
import FeedModal from '../../components/Modal';

import { useAuth } from '../../hooks/auth';
import { usePius } from '../../hooks/pius';

import LogoImg from '../../assets/images/logo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import {PiuObject} from '../../interfaces'
import api from '../../services/api';

interface ModalLogoutProps {
    logout(): void;
}

const Feed: React.FC = () => {
    const { navigate } = useNavigation();

    const { logout } = useAuth();

    const { pius, SetPius } = usePius();

    const [refreshing, setRefreshing] = useState(false);

    const [LogoutModalVisible, SetLogoutModalVisible] = useState(false);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        const response = await api.get('/pius/');
        SetPius(response.data);
        setRefreshing(false);
        // setTimeout(() => {
        //     setRefreshing(false)
        // }, 4000)
      }, [api, SetPius, setRefreshing]);

    const handleNaviteToInpiu = useCallback(() => {
        navigate('Inpiu')
    }, [navigate])

    const handleShowLogoutModal = useCallback(() => {
        SetLogoutModalVisible(!LogoutModalVisible)
    }, [SetLogoutModalVisible, LogoutModalVisible])

    const handleLogout = useCallback(() => {
        logout();
    }, [logout])

    return(
        <PageFeedContainer>
            <FeedModal
                Options={<ModalLogout logout={handleLogout}/>}
                title='Tem certeza de que deseja sair?'
                visibility={LogoutModalVisible}
                handleCancel={handleShowLogoutModal}
            />
                
            <Header>
                <Logo source={LogoImg} resizeMode='contain'/>
                <LogOutButton onPress={ handleShowLogoutModal }>
                    <Feather name="log-out" size={22} color="#ffe600"/>
                </LogOutButton>
            </Header>
            <ScrollView  refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {pius.map((piu: PiuObject) => {
                    return(
                        <Piu 
                            key={piu.id}
                            piuData={piu}           
                        />
                    )
                })}
            </ScrollView>
            <FeatherButton onPress={handleNaviteToInpiu}>

                <MaterialCommunityIcons name="plus" size={20} color="#fff" />
                <MaterialCommunityIcons name="feather" size={35} color="#fff"/>
            </FeatherButton>
        </PageFeedContainer>
    )
}

export default Feed;


const ModalLogout: React.FC<ModalLogoutProps> = ({logout}) => {
    const { user } = useAuth();

    return (
        <>
        <UserBlock>
            <ModalImgContainer>
                <ModalProfileImg source={{uri: user.foto}}/>
            </ModalImgContainer>
            <UserInfo>
                <Name>{user.first_name} {user.last_name}</Name>
                <Username>@{user.username}</Username>
            </UserInfo>
            <CheckIcon>
                <MaterialCommunityIcons name="check-circle" size={24} color="#30C100" />
            </CheckIcon>
        </UserBlock>
        <LogoutBlock>
            <ModalLogoutButton onPress={logout}>
                <Feather name="log-out" size={24} color="#708090"/>
                <ModalButtonText>Sair</ModalButtonText>
            </ModalLogoutButton>
        </LogoutBlock>
        </>
    )
}