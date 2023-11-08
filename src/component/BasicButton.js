import { Text, Pressable, StyleSheet } from "react-native";

const BasicButton = props => {
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
    borderRadius: 10,
    padding: 8,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },
});
export default BasicButton;
