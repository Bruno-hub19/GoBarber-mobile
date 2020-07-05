import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 25px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f0f0f7;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #232129;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #ff9000;
  margin-right: 10px;
`;
