import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  BackToLogonButton,
  BackToLogonButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <Title>Faça seu cadastro</Title>

            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
            />

            <Button>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToLogonButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={16} color="#f0f0f7" />
        <BackToLogonButtonText>Voltar para o logon</BackToLogonButtonText>
      </BackToLogonButton>
    </>
  );
};

export default SignUp;
