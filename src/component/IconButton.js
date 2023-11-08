import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="shopping-cart" size={28} />
  </TouchableOpacity>
);
export default IconButton;