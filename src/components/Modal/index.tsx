import React, { ReactNode } from 'react';
import { Modal } from 'react-native';
import { DarkView, SecondView, Section, Header, Title, CancelButton, CancelButtonText} from './styles';


interface FeedModalProps extends React.ComponentProps<typeof Modal> {
    Options: ReactNode;
    title: string;
    visibility: boolean;
    handleCancel(): void;
}

const FeedModal: React.FC<FeedModalProps> = ({Options,title,visibility,handleCancel, ...rest}) => {
  return (
    <Modal
    transparent={true}
    visible={visibility}
    onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    {...rest}
    >
    <DarkView>
        <Modal
            transparent={true}
            visible={visibility}
            animationType="slide"
            onRequestClose={() => {
                console.log("Modal has been closed.");
              }}
            {...rest}
        >
            <SecondView>

                <Section>
                    <Header>
                        <Title>{title}</Title>
                    </Header>
                    {Options}
                    <CancelButton onPress={handleCancel}>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CancelButton>                    
                </Section>
            </SecondView>
        </Modal>
    </DarkView>

    </Modal>
  )
}

export default FeedModal;