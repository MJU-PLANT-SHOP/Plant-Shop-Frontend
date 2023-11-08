import { Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Button = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPressOut={onPress}
      activeOpacity={0.8}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: "button title",
};

Button.prototype = {
  title: PropTypes.string.isRequired,
};

export default Button;
