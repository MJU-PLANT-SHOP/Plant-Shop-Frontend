import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "../constants";

const IconMyPageButton = ({ onPress , style}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon name={"person"} size={28} />
  </TouchableOpacity>
);
export default IconMyPageButton;