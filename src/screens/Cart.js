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

const Item = ({ item, quantity, price, index, onDelete }) => {
  const [renderPrice, setRenderPrice] = useState(priceToInt(price) * num);
  const [num, setNum] = useState(quantity);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  useEffect(() => {
    setNum(quantity);
    setRenderPrice(priceToInt(price) * quantity);
  }, [quantity, price]);

  if (num < 1) {
    setNum(1);
    setRenderPrice(priceToInt(price));
    item.quantity = 1;
  }
  if (num > 10) {
    setNum(10);
    setRenderPrice(priceToInt(price) * 10);
    item.quantity = 10;
  }

  const setPlusValue = () => {
    setNum(prevNum => {
      const newNum = prevNum + 1;
      setRenderPrice(priceToInt(price) * newNum);
      item.quantity = newNum;
      return newNum;
    });
  };

  const setMinusValue = () => {
    setNum(prevNum => {
      const newNum = prevNum - 1;
      setRenderPrice(priceToInt(price) * newNum);
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
        <Text style={{ fontSize: 20 }}>{"이름: " + item.name}</Text>
        <Text style={{ fontSize: 20 }}>{"수량: " + num}</Text>
        <Text style={{ fontSize: 20 }}>
          {"기격: " + renderPrice.toLocaleString() + "원"}
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
        const data = await AsyncStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : [];
        setItems(parsedData);
        //await AsyncStorage.removeItem("cart");
      } catch (e) {
        console.log(e);
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
              name={item.name}
              index={index}
              quantity={item.quantity}
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
