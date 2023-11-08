import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconMenuButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={"menu"} size={28} />
  </TouchableOpacity>
);
export default IconMenuButton;