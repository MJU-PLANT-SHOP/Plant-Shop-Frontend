import { Text, Pressable, StyleSheet } from "react-native";

const FooterButton = props => {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, props.style]}>
      <Text style={[styles.buttonText]}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(50, 128, 50, 0.8)",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },
});
export default FooterButton;
