import React from 'react';
import { PiuBlock, PiuContainer, Name, PiuUser, ProfileBackgroundImg, ProfilePicContainer, Username, PiuMsg, PiuMsgContainer, IconBar } from './styles';
import PiuPic from '../../assets/images/piupic.png';
import { FontAwesome, Feather } from '@expo/vector-icons';

const Piu: React.FC = () => {
    return(
        <PiuContainer>
            <ProfilePicContainer>
                <ProfileBackgroundImg
                    resizeMode='contain'
                    source={PiuPic}
                />
            </ProfilePicContainer>

            <PiuBlock>
                <PiuUser>
                    <Name>Catarina Rodrigues</Name>
                    <Username>@catarina-erickson</Username>
                </PiuUser>

                <PiuMsgContainer>
                    <PiuMsg>blablblablablablablablablabalbalbalbalablaablablablablablablablablablabl4</PiuMsg>
                </PiuMsgContainer>
                <IconBar>
                    <Feather name='message-circle' size={17} color='#708090'/>
                    <FontAwesome name='star-o' size={17} color='#708090' />
                    <FontAwesome name='heart-o' size={16} color='#708090' />
                    <Feather name='upload' size={17} color='#708090' />
                </IconBar>
            </PiuBlock>
        </PiuContainer>
    )
}

export default Piu;