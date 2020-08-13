import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled.KeyboardAvoidingView``;

export const Scroll = styled.ScrollView`
  max-height: 100%;
`;

export const Item = styled.View`
  width: 100px;
  height: 300px;
  margin: 8px;
  background: #000;
`;
