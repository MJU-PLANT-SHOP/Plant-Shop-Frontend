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
} from "react-native";
import Button, { ButtonTypes } from "../component/PurchaseButton";
import { Picker } from "@react-native-picker/picker";
import { loginUserList } from "./Login";
// import { Pressable } from "react-native-web";

export let purchaseCount = 0;

const Purchase = ({ route, navigation }) => {
  const pickupLocations = [
    {
      id: 1,
      location: "문 앞에 놓아주세요",
    },
    {
      id: 2,
      location: "벨을 눌러주세요",
    },
    {
      id: 3,
      location: "경비실에 맡겨주세요",
    },
  ];
  const totalPrice = "14,000";
  const products = route.params.object;
  const price = route.params.price;
  const userInfo = loginUserList[0];
  const [requireModalVisible, setRequireModalVisible] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [modalOutputAddress, setModalOutputAddress] = useState(
    userInfo.address
  );
  const [modalOutputLocation, setModalOutputLocation] = useState(
    pickupLocations[0].location
  );
  const [modalOutputRequire, setModalOutputRequire] = useState("없음");
  const [deliverRequire, setDeliverRequire] = useState("없음");
  const [pickerValue, setPickerValue] = useState("1");
  return (
    <View style={styles.container}>
      {/* 배송 요청사항 변경 Modal */}
      <Modal
        isVisible={requireModalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>배송 요청사항</Text>
          <View style={styles.modalMenu}>
            <Text style={styles.menuTitle}>수령 위치</Text>
            <Picker
              style={styles.modalLockationPiker}
              selectedValue={pickerValue}
              onValueChange={item => {
                setPickerValue(item);
                setModalOutputLocation(pickupLocations[item - 1].location);
              }}
            >
              {pickupLocations.map(location => (
                <Picker.Item label={location.location} value={location.id} />
              ))}
            </Picker>
          </View>
          <View style={styles.modalMenu}>
            <Text style={styles.menuTitle}>요청사항</Text>
            <TextInput
              style={styles.modalRequireInput}
              onChangeText={text => {
                setDeliverRequire(text);
              }}
              placeholder={modalOutputRequire}
            />
          </View>
          <View style={styles.modalButtonContext}>
            <Button
              title="확인"
              onPress={() => {
                setModalOutputRequire(deliverRequire);
                setRequireModalVisible(false);
              }}
              buttonStyle={styles.modalButtonFrame}
              textStyle={styles.ChangeButtonTitle}
            />
          </View>
        </View>
      </Modal>
      {/* 구매 완료 메시지 Modal */}
      <Modal
        isVisible={buyModalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.buymodalContainer}>
          <View style={styles.buymodalTextConext}>
            <Text style={styles.modalTitle}>구매가 완료되었습니다.</Text>
          </View>
          <Button
            title="확인"
            onPress={() => {
              purchaseCount++;
              setBuyModalVisible(false);
              navigation.navigate("HomePageScreen", {});
            }}
            buttonStyle={styles.buymodalButtonFrame}
            textStyle={styles.deviceText}
          />
        </View>
      </Modal>
      {/* 메인 화면 */}
      <ScrollView>
        <View style={styles.purchasePay}>
          {/* 배송지 */}
          <View style={styles.address}>
            <View style={styles.frame}>
              <View style={styles.frameHead}>
                <Text style={styles.frameTitle}>배송지</Text>
                {/* <Button
                  title="변경"
                  onPress={() => {
                    console.log("change!");
                  }}
                  buttonStyle={[styles.ChangeButtonFrame, { marginLeft: 180 }]}
                  textStyle={styles.ChangeButtonTitle}
                /> */}
              </View>
              <Text style={styles.menuTitle}>{modalOutputAddress}</Text>
            </View>
          </View>
          {/* 배송 요청사항 */}
          <View style={styles.require}>
            <View style={styles.frame}>
              <View style={styles.frameHead}>
                <Text style={styles.frameTitle}>배송 요청사항</Text>
                <Button
                  title="변경"
                  onPress={() => {
                    setRequireModalVisible(true);
                  }}
                  buttonStyle={[styles.ChangeButtonFrame, { marginLeft: 105 }]}
                  textStyle={styles.ChangeButtonTitle}
                />
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>수령위치</Text>
                <Text style={styles.userChoice}>{modalOutputLocation}</Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>요청사항</Text>
                <Text style={styles.userChoice}>{modalOutputRequire}</Text>
              </View>
            </View>
          </View>
          {/* 주문자 정보 */}
          <View style={styles.ordererInfo}>
            <View style={styles.frame}>
              <Text style={styles.frameTitle}>주문자 정보</Text>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>주문자명</Text>
                <Text style={[styles.userChoice, { marginLeft: 23 }]}>
                  {userInfo.name}
                </Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>연락처</Text>
                <Text style={[styles.userChoice, { marginLeft: 42 }]}>
                  {userInfo.phoneNumber}
                </Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>이메일</Text>
                <Text style={[styles.userChoice, { marginLeft: 43 }]}>
                  {userInfo.email}
                </Text>
              </View>
            </View>
          </View>
          {/* 주문 상품 */}
          <View style={styles.product}>
            <View style={styles.frame}>
              <Text style={styles.frameTitle}>주문 상품</Text>
              {/* 상품 리스트 */}
              <View style={styles.itemList}>
                <ScrollView horizontal={true} style={styles.itemScrollView}>
                  {products.map(product => (
                    <Pressable
                      onPress={() => {
                        console.log("image!");

                        navigation.navigate("상품 페이지", {
                          object: product,
                        });
                      }}
                    >
                      <View key={product.id} style={styles.item}>
                        <Image
                          source={product.image[0]}
                          style={styles.itemImage}
                        />
                        <Text style={styles.itemTitle}>{product.name}</Text>
                        <Text style={styles.itemInfo}>
                          {product.price}원 X {product.quantity}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
              {/* 상품 총 가격 */}
              <Text style={styles.priceInProduct}>
                총 {price.toLocaleString()}원
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* 결제 버튼 */}
      <View style={styles.puchaseButton}>
        <Button
          buttonType={ButtonTypes.BUY}
          price={price.toLocaleString() + "원"}
          title="결제하기"
          onPress={() => {
            console.log("buy!");
            setBuyModalVisible(true);
          }}
          buttonStyle={styles.buyButton}
          textStyle={styles.deviceText}
          priceStyle={styles.priceText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purchasePay: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  address: {
    marginBottom: 10,
    width: "98%",
    height: 160,
  },
  require: {
    marginBottom: 10,
    width: "98%",
    height: 160,
  },
  ordererInfo: {
    marginBottom: 10,
    width: "98%",
    height: 190,
  },
  product: {
    marginBottom: 10,
    width: "98%",
    height: 335,
  },
  frame: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  frameHead: {
    flexDirection: "row",
  },
  frameTitle: {
    marginBottom: 30,
    marginRight: 50,
    color: "#000000",
    borderWidth: 0.03,
    fontSize: 25,
  },
  ChangeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  ChangeButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 1,
  },
  ChangeButtonTitle: {
    color: "#000000",
    //fontFamily: "Inter, sans-serif",
    fontSize: 15,
  },
  menu: {
    flexDirection: "row",
  },
  menuTitle: {
    marginRight: 50,
    marginBottom: 10,
    color: "gray",
    fontSize: 18,
  },
  userChoice: {
    color: "#000000",
    fontSize: 18,
    marginLeft: 20,
  },
  itemScrollView: {
    flexDirection: "row",
  },
  itemList: {
    flexDirection: "row",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 10,
    marginBottom: 10,
    width: 150,
    height: 200,
    borderWidth: 0.5,
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    shadowColor: "black",
    shadowOpacity: 0.27,
    elevation: 3,
  },
  itemImage: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    width: 130,
    height: 130,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "gray",
  },
  itemTitle: {
    color: "black",
    fontSize: 15,
  },
  itemInfo: {
    color: "gray",
    fontSize: 15,
  },
  priceInProduct: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 20,
    color: "black",
    fontSize: 20,
  },

  puchaseButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "(0,0,0,0.5)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buyButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fe7d67",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  priceText: {
    marginRight: 10,
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
    fontWeight: 700,
  },
  deviceText: {
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
  },

  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 700,
  },
  modalMenu: {
    width: "90%",
    height: "20%",
    marginVertical: 20,
    paddingLeft: 10,
  },
  modalLockationPiker: {
    width: "100%",
    height: "20%",
  },
  modalRequireInput: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalButtonContext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  modalButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
    backgroundColor: "#d9d9d9",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },

  buymodalContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  buymodalTextConext: {
    marginTop: 50,
    marginBottom: 20,
  },
  buymodalButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "#fe7d67",
    borderColor: "#fe7d67",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
});

export default Purchase;
