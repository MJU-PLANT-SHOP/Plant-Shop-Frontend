import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";
import Button from "../component/SignUpButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import memberApi from "../api/Api";

class user {
  constructor(email, password, name, phone, address) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
}

// Sing Up Main
const SignUp = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [checkModalVisible, setCheckModalVisible] = useState(false);

  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPwFocus, setIsPWFocus] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPNFocus, setIsPNFocus] = useState(false);
  const [isAdFocus, setIsAdFocus] = useState(false);

  const handleSignUp = async () => {
    try {
      const User = new user(email, password, name, phoneNumber, address);

      const response = await memberApi.signUp(User);

      if (response.data.code === "1") {
        // 회원가입 성공 시
        setIsSignUpSuccess(true);
        setErrorMessage(response.data.message);
        setModalVisible(true);
      } else {
        // 회원가입 실패 시
        setErrorMessage(response.data.message);
        setModalVisible(true);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setModalVisible(true);
    }
  };

  const handleCheckEmail = async () => {
    try {
      const response = await memberApi.checkEmail(email);

      if (response.data.code === "1") {
        // 이메일 중복이 아닌 경우
        setErrorMessage(response.data.message);
        setDuplicateCheck(true);
      } else {
        // 이메일 중복인 경우
        setErrorMessage(response.data.message);
        setDuplicateCheck(false);
      }
      setCheckModalVisible(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setModalVisible(true);
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* 회원가입 완료 메시지 Modal */}
        <Modal
          isVisible={modalVisible}
          useNativeDriver={true}
          hideModalContentWhileAnimating={true}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTextConext}>
              <Text style={styles.modalTitle}>{errorMessage}</Text>
            </View>
            <Button
              title="확인"
              onPress={() => {
                setModalVisible(false);
                if (isSignUpSuccess == true) {
                  navigation.navigate("Login", {});
                }
              }}
              buttonStyle={styles.modalButtonFrame}
              textStyle={styles.buttonText}
            />
          </View>
        </Modal>
        {/* 이메일 중복확인 메시지 Modal */}
        <Modal
          isVisible={checkModalVisible}
          useNativeDriver={true}
          hideModalContentWhileAnimating={true}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTextConext}>
              <Text style={styles.modalTitle}>{errorMessage}</Text>
            </View>
            <Button
              title="확인"
              onPress={() => {
                setCheckModalVisible(false);
              }}
              buttonStyle={styles.modalButtonFrame}
              textStyle={styles.buttonText}
            />
          </View>
        </Modal>
        {/* 메인 화면 */}
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.context}>
            <View style={styles.userInputFrame}>
              <View style={styles.inputContext}>
                <View style={styles.inputInnerContext}>
                  <Text style={[styles.inputTitle, { marginRight: 32 }]}>
                    이메일
                  </Text>
                </View>
                <View style={styles.emailInputFrame}>
                  <TextInput
                    style={[
                      styles.input,
                      { width: "60%" },
                      isEmailFocus && { backgroundColor: "#F5FBEF" },
                    ]}
                    onChangeText={text => {
                      setEmail(text.trim());
                    }}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType={"next"}
                    keyboardType="email-address"
                    onFocus={() => {
                      setIsEmailFocus(true);
                    }}
                    onBlur={() => {
                      setIsEmailFocus(false);
                    }}
                  />
                  <Button
                    title="중복확인"
                    onPress={handleCheckEmail}
                    buttonStyle={styles.duplicateCheckButton}
                    textStyle={styles.duplicateCheckButtonText}
                  />
                </View>
              </View>
              <View style={styles.inputContext}>
                <View style={styles.inputInnerContext}>
                  <Text style={[styles.inputTitle, { marginRight: 53 }]}>
                    비밀번호
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,

                    isPwFocus && { backgroundColor: "#F5FBEF" },
                  ]}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  placeholder="PassWord"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={"next"}
                  onFocus={() => {
                    setIsPWFocus(true);
                  }}
                  onBlur={() => {
                    setIsPWFocus(false);
                  }}
                />
              </View>
              <View style={styles.inputContext}>
                <View style={styles.inputInnerContext}>
                  <Text style={[styles.inputTitle, { marginRight: 30 }]}>
                    이름
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    isNameFocus && { backgroundColor: "#F5FBEF" },
                  ]}
                  onChangeText={text => {
                    setName(text);
                  }}
                  placeholder="Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={"next"}
                  onFocus={() => {
                    setIsNameFocus(true);
                  }}
                  onBlur={() => {
                    setIsNameFocus(false);
                  }}
                />
              </View>
              <View style={styles.inputContext}>
                <View style={styles.inputInnerContext}>
                  <Text style={[styles.inputTitle, { marginRight: 57 }]}>
                    전화번호
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    isPNFocus && { backgroundColor: "#F5FBEF" },
                  ]}
                  onChangeText={text => {
                    setPhoneNumber(text);
                  }}
                  placeholder="PhoneNumber"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={"next"}
                  onFocus={() => {
                    setIsPNFocus(true);
                  }}
                  onBlur={() => {
                    setIsPNFocus(false);
                  }}
                />
              </View>
              <View style={styles.inputContext}>
                <View style={styles.inputInnerContext}>
                  <Text style={[styles.inputTitle, { marginRight: 10 }]}>
                    주소
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    isAdFocus && { backgroundColor: "#F5FBEF" },
                  ]}
                  onChangeText={text => {
                    setAddress(text);
                  }}
                  placeholder="Address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={"done"}
                  onFocus={() => {
                    setIsAdFocus(true);
                  }}
                  onBlur={() => {
                    setIsAdFocus(false);
                  }}
                />
              </View>
            </View>
            <View style={styles.buttonContext}>
              <Button
                title="로그인하기"
                onPress={() => {
                  navigation.navigate("Login", {});
                }}
                buttonStyle={[
                  styles.button,
                  {
                    backgroundColor: "#FFFFFF",
                    borderWidth: 1,
                    borderColor: "#298A08",
                    marginRight: 20,
                  },
                ]}
                textStyle={[styles.buttonText, { color: "#298A08" }]}
              />
              <Button
                title="회원가입하기"
                onPress={() => {
                  if (duplicateCheck == true) {
                    handleSignUp();
                  } else {
                    setErrorMessage("이메일 중복확인을 먼저 해주세요.");
                    setModalVisible(true);
                  }
                }}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  context: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50,
  },
  userInputFrame: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContext: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 8,
  },
  inputInnerContext: {
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
  },
  inputTitle: {
    fontSize: 20,
    color: "#000000",
    marginLeft: 10,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#74DF00",
    width: "80%",
    height: 42,
    paddingLeft: 15,
  },
  emailInputFrame: {
    flexDirection: "row",
  },
  buttonContext: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 60,
    backgroundColor: "#298A08",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  duplicateCheckButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 42,
    backgroundColor: "#298A08",
    borderRadius: 10,
    marginLeft: 5,
  },
  duplicateCheckButtonText: {
    fontSize: 12,
    color: "#FFFFFF",
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
    borderColor: "#298A08",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
});

export default SignUp;
