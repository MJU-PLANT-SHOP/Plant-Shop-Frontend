import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import Button from "../component/SignUpButton";
import { registerdUserList } from "../screens/SignUp";

class user {
  constructor(email, password, name, phoneNumber, address) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
export let loginUserList = [];
const checkLogin = (email, password) => {
  for (let i = 0; i < registerdUserList.length; i++) {
    if (
      registerdUserList[i].email == email &&
      registerdUserList[i].password == password
    ) {
      loginUserList.push(registerdUserList[i]);
      return true;
    }
  }
  return false;
};
const Login = ({ route, navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* 로그인 실패 Modal */}
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTextConext}>
            <Text style={styles.modalTitle}>{message}</Text>
          </View>
          <Button
            title="확인"
            onPress={() => {
              setModalVisible(false);
            }}
            buttonStyle={styles.modalButtonFrame}
            textStyle={styles.buttonText}
          />
        </View>
      </Modal>
      {/* 메인 화면 */}
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.context}>
          {/* <Image source={require("../../assets/main.png")} style={styles.image} /> */}
          <View style={styles.inputContain}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setInputEmail(text);
              }}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={"next"}
              keyboardType="email-address"
            />
            <View style={styles.inputIcon}>
              <Image
                source={require("../assets/icons/login-icon-id.png")}
                style={styles.inputImage}
              />
            </View>
          </View>
          <View style={styles.inputContain}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setInputPassword(text);
              }}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <View style={styles.inputIcon}>
              <Image
                source={require("../assets/icons/login-icon-pw.png")}
                style={styles.inputImage}
              />
            </View>
          </View>
          <Button
            title="Login"
            onPress={() => {
              if (checkLogin(inputEmail, inputPassword) == true) {
                navigation.navigate("HomePageScreen", {});
              } else {
                setMessage("아이디와 비밀번호를 확인해주세요.");
                setModalVisible(true);
              }
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="SignUp"
            onPress={() => {
              navigation.navigate("SignUp", {});
            }}
            textStyle={styles.signUpText}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  context: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: "#F5FBEF",
    borderColor: "#74DF00",
    width: "80%",
    height: 60,
    marginBottom: 20,
    paddingLeft: 50,
    fontSize: 15,
  },
  button: {
    marginTop: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: "#298A08",
    borderColor: "#FFFFFF",
    width: "80%",
    height: 60,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  signUpText: {
    fontSize: 15,
    color: "#298A08",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 300,
  },
  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  modalTextConext: {
    marginTop: 50,
    marginBottom: 20,
  },
  modalButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "#298A08",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 0,
    bottom: 20,
    right: 300,
    left: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  inputImage: {
    height: 25,
    resizeMode: "contain",
  },
  inputContain: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
