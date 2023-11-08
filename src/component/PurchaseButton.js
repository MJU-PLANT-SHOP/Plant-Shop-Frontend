import { Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const ButtonTypes = {
  CHANGE: "CHANGE",
  BUY: "BUY",
};

const Button = ({
  buttonType,
  price,
  title,
  onPress,
  buttonStyle,
  textStyle,
  priceStyle,
}) => {
  if (buttonType == ButtonTypes.BUY) {
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPressOut={onPress}
        activeOpacity={0.8}
      >
        <Text style={priceStyle}>{price}</Text>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (buttonType == ButtonTypes.CHANGE) {
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPressOut={onPress}
        activeOpacity={0.2}
      >
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

Button.defaultProps = {
  title: "button title",
  buttonType: ButtonTypes.CHANGE,
};

Button.prototype = {
  title: PropTypes.string.isRequired,
};

export { ButtonTypes };
export default Button;
