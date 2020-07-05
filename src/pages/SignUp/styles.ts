import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 130px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 24px;
`;

export const BackToLogonButton = styled.TouchableOpacity`
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

export const BackToLogonButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #f0f0f7;
  margin-left: 10px;
`;
