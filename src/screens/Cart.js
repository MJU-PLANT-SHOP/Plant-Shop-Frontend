import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { priceToInt } from "../object/Object";
import Button, { ButtonTypes } from "../component/PurchaseButton";
import BasicButton from "../component/BasicButton";

import axios from "axios";
import {cartApi} from "../api/Api";
import memberApi from "../api/Api";

const Item = ({ item, index, onDelete }) => {
  const [renderPrice, setRenderPrice] = useState(priceToInt(item.price * item.count));
  const [num, setNum] = useState(item.count);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  useEffect(() => {
    setNum(item.count);
    setRenderPrice(priceToInt(item.price));
  }, [item.count, item.price]);

  if (num < 1) {
    setNum(1);
    setRenderPrice(priceToInt(item.price));
    item.quantity = 1;
  }
  if (num > 10) {
    setNum(10);
    setRenderPrice(priceToInt(item.price) * 10);
    item.quantity = 10;
  }

  const setPlusValue = () => {
    setNum(prevNum => {
      const newNum = prevNum + 1;
      setRenderPrice(priceToInt(item.price) * newNum);
      item.quantity = newNum;
      return newNum;
    });
  };

  const setMinusValue = () => {
    setNum(prevNum => {
      const newNum = prevNum - 1;
      setRenderPrice(priceToInt(item.price) * newNum);
      item.quantity = newNum;
      return newNum;
    });
  };
  return (
      <View
          style={{
            flexDirection: "row",
            width: SCREEN_WIDTH,
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 30,
            marginBottom: 5,
          }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{"이름: " + item.productName}</Text>
          <Text style={{ fontSize: 20 }}>{"수량: " + item.count}</Text>
          <Text style={{ fontSize: 20 }}>
            {"가격: " + item.price.toLocaleString() + "원"}
          </Text>
        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
        >
          <BasicButton
              title="+"
              onPress={() => setPlusValue()}
              style={styles.button}
          ></BasicButton>
          <BasicButton
              title="-"
              onPress={() => setMinusValue()}
              style={styles.button}
          ></BasicButton>
          <BasicButton
              title="삭제"
              onPress={() => {
                onDelete(index);
              }}
              style={styles.button}
          ></BasicButton>
        </View>
      </View>
  );
};

const Cart = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await cartApi.getCartList();
        if (response.data.code === "1") {
          const cartItems = response.data.data.map(item => ({
            productName: item.productName,
            count: item.count,
            price: item.price,
          }));
          setItems(cartItems);
        } else if(response.data.code === "13") {
          // await tokenUpdate(navigation);
          // await fetchData();
        } else {
          console.log(response.data.code);
          console.log(response);
          // setErrorMessage("장바구니 목록 가져오기에 실패했습니다.");
          // setModalVisible(true);
        }
        // const data = await AsyncStorage.getItem("cart");
        // const parsedData = data ? JSON.parse(data) : [];
        // setItems(parsedData);
      } catch (error) {
        console.log(error);
        // setErrorMessage("Failed to fetch cart items from the server");
        // setModalVisible(true);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async index => {
    try {
      const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
      setItems(updatedItems);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedItems));
    } catch (e) {
      console.log(e);
    }
  };

  let totalPrice = 0;
  const cartToPurchase = () => {
    for (let i = 0; i < items.length; i++) {
      totalPrice = totalPrice + priceToInt(items[i].price) * items[i].quantity;
    }
    navigation.navigate("purchase", {
      object: items,
      price: totalPrice,
    });
    totalPrice = 0;
  };
  return (
      <View style={{ flex: 10 }}>
        <ScrollView
            contentContainerStyle={[styles.scrollViewContext]}
            showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {items.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    index={index}
                    productName={item.productName}
                    count={item.count}
                    price={item.price}
                    onDelete={handleDelete}
                />
            ))}
          </View>
        </ScrollView>
        <View style={styles.puchaseButton}>
          <Button
              buttonType={ButtonTypes.BUY}
              title="장바구니 상품 결제하기"
              onPress={() => cartToPurchase()}
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
    alignItems: "center",
    justifyContent: "center",
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
  button: {
    backgroundColor: "lightgray",
    fontSize: 20,
  },
});
export default Cart;