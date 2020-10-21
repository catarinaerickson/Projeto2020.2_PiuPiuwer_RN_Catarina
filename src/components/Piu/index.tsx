import React, { useCallback, useEffect, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { PiuBlock, PiuContainer, Name, PiuUser, ProfileImg, ProfilePicContainer, Username, PiuMsg, PiuMsgContainer, IconBar, IconContainer, IconNum, DownButton, DeleteButton, DeleteButtonText, DeleteView } from './styles';
import FeedModal from '../Modal';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import { FontAwesome, Feather } from '@expo/vector-icons';

import { PiuObject, User } from '../../interfaces';

interface PiuProps {
    piuData: PiuObject
}

interface ReactionIconProps {
    reacted: boolean,
    reactionsNum: number,
    type: string,
    handleReaction(): void
}

interface ChevronDownProps extends React.ComponentProps<typeof BorderlessButton> {
    display: boolean,
}

interface ModalDeleteProps {
    deletePiu(): void;
}

const Piu: React.FC<PiuProps> = ({piuData}) => {

    const { user } = useAuth();

    const { goBack } = useNavigation();

    const [likes, setLikes] = useState({
        liked: false,
        numLikes: piuData.likers.length as number
    });

    const [favorits, setFavorits] = useState({
        favoritado: false,
        numFavorits: piuData.favoritado_por.length as number
    });

    const [displayDelete, setDisplayDelete] = useState(false);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const [piuDisappear, setPiuDisappear] = useState(false);

    useEffect(() => {
        function wasLiked(like: User) {
            if (like.id === user.id) {
                return setLikes({liked: true, numLikes: likes.numLikes})
            }
        }

        function wasFavoritado(favorit: User) {
            if(favorit.id === user.id) {
                return setFavorits({favoritado: true, numFavorits: favorits.numFavorits})
            }
        }
        
        piuData.likers.map((like) => {
            wasLiked(like);
        });
        
        piuData.favoritado_por.map((favorit) => {
            wasFavoritado(favorit);
        })

        if(piuData.usuario.id === user.id) {
            return setDisplayDelete(true)
        }      

    },[]);

    const handleLike = useCallback(() => {
        const data = {'usuario': user.id, 'piu': piuData.id};
        try {
            api.post('pius/dar-like/', data);
            if (likes.liked) {
                setLikes({liked: false, numLikes: likes.numLikes - 1} )
            } else if(!likes.liked) {
                setLikes({liked: true, numLikes: likes.numLikes + 1})
            }
        } catch(err) {
            alert('opa, estamos com problemas!');
        }
    }, [likes, user, piuData, setLikes])

    const handleFavorit = useCallback(() => {
        const data = {'usuario': user.id, 'piu': piuData.id};
        try {
            api.post('/pius/favoritar/', data);
            if (favorits.favoritado) {
                setFavorits({favoritado: false, numFavorits: favorits.numFavorits - 1} )
            } else if(!favorits.favoritado) {
                setFavorits({favoritado: true, numFavorits: favorits.numFavorits + 1})
            }
        } catch (err) {
            alert('opa, estamos com problemas!');
        }
    }, [user, piuData, favorits, setFavorits]);

    const handleShowDeleteModal = useCallback(() => {
        setDeleteModalVisible(!deleteModalVisible)
    }, [deleteModalVisible, setDeleteModalVisible])
    
    const handleDelete = useCallback(async () => {
        console.log('ok');
        const response = await api.delete(`pius/${piuData.id}`);    
        console.log(response);    
        setDeleteModalVisible(!deleteModalVisible);
        setPiuDisappear(true);
    }, [api, piuData, setDeleteModalVisible, deleteModalVisible, setPiuDisappear])

    return(
        <PiuContainer display={piuDisappear}>
            <FeedModal
                Options={<ModalDelete deletePiu={handleDelete}/>}
                title='Tem certeza de que deseja excluir esse piu?'
                visibility={deleteModalVisible}
                handleCancel={handleShowDeleteModal}
            />
            <ProfilePicContainer>
                <ProfileImg
                    resizeMode='cover'
                    source={{uri: piuData.usuario.foto}}
                />
            </ProfilePicContainer>

            <PiuBlock>
                <PiuUser>
                    <Name>{piuData.usuario.first_name} {piuData.usuario.last_name}</Name>
                    <Username>@{piuData.usuario.first_name}</Username>
                    <ChevronDown display={displayDelete} onPress={handleShowDeleteModal}/>
                </PiuUser>

                <PiuMsgContainer>
                    <PiuMsg>{piuData.texto}</PiuMsg>
                </PiuMsgContainer>
                <IconBar>
                    <Feather name='message-circle' size={15} color='#708090'/>
                    <ReactionIcon 
                        reacted={favorits.favoritado}
                        reactionsNum={favorits.numFavorits}
                        type='favorit'
                        handleReaction={handleFavorit}
                    />
                    <ReactionIcon 
                        reacted={likes.liked}
                        reactionsNum={likes.numLikes}
                        type='like'
                        handleReaction={handleLike}
                    />
                    <Feather name='upload' size={15} color='#708090' />
                </IconBar>
            </PiuBlock>
        </PiuContainer>
    )
}


const ReactionIcon: React.FC<ReactionIconProps> = ({reacted, reactionsNum, type, handleReaction}) => {
    const iconType = useCallback(() => {
        if(type ==='like') {
            if(reacted) {
                return <FontAwesome name='heart' size={14} color='#E51711' />
            } else {
                return <FontAwesome name='heart-o' size={14} color='#708090' />
            }
        } else {
            if(reacted) {
                return <FontAwesome name='star' size={15} color='#09D4F0' />
            } else {
                return <FontAwesome name='star-o' size={15} color='#708090' />
            }
        }
    }, [type, reacted])
    
    
    return (
        <IconContainer>
            <BorderlessButton onPress={handleReaction}>
                {iconType()}
            </BorderlessButton>
            <IconNum>{reactionsNum}</IconNum>
        </IconContainer>
    )
}


const ChevronDown: React.FC<ChevronDownProps> = ({display, ...rest}) => {
    return (
        <DownButton display={display} {...rest}>
            <Feather name="chevron-down" size={20} color="#708090" />
        </DownButton>
    )
}

const ModalDelete: React.FC<ModalDeleteProps> = ({deletePiu}) => {
    return (
        <DeleteView>
            <DeleteButton onPress={deletePiu}>
                <FontAwesome name="trash-o" size={24} color="rgba(229,23,17,0.7)" />
                <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>
        </DeleteView>
    )
}

export default Piu;