import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Api, getScaledValue } from "renative";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedBtn: null };
  }
  setFocus = (focused) => {
    this.setState({ focusedBtn: focused });
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.firstContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              this.state.focusedBtn === "first"
                ? style.focusedContainer
                : style.btnContainer,
            ]}
            onFocus={() => this.setFocus("first")}
          >
            <Text
              style={[
                this.state.focusedBtn === "first"
                  ? style.focused
                  : style.btnText,
              ]}
            >
              First
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              this.state.focusedBtn === "second"
                ? style.focusedContainer
                : style.btnContainer,
            ]}
            onFocus={() => this.setFocus("second")}
          >
            <Text
              style={[
                this.state.focusedBtn === "second"
                  ? style.focused
                  : style.btnText,
                ,
              ]}
            >
              Second
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              this.state.focusedBtn === "third"
                ? style.focusedContainer
                : style.btnContainer,
              ,
            ]}
            onFocus={() => this.setFocus("third")}
          >
            <Text
              style={[
                this.state.focusedBtn === "third"
                  ? style.focused
                  : style.btnText,
                ,
              ]}
            >
              Third
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.endContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              this.state.focusedBtn === "fourth"
                ? style.focusedContainer
                : style.btnContainer,
              ,
            ]}
            onFocus={() => this.setFocus("fourth")}
          >
            <Text
              style={[
                this.state.focusedBtn === "fourth"
                  ? style.focused
                  : style.btnText,
                ,
              ]}
            >
              Fourth
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              this.state.focusedBtn === "fifth"
                ? style.focusedContainer
                : style.btnContainer,
              ,
            ]}
            onFocus={() => this.setFocus("fifth")}
          >
            <Text
              style={[
                this.state.focusedBtn === "fifth"
                  ? style.focused
                  : style.btnText,
                ,
              ]}
            >
              Fifth
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  firstContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  focusedContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  btnText: {
    textAlign: "center",
    fontSize: getScaledValue(20),
    padding: getScaledValue(10),
  },
  focused: {
    textAlign: "center",
    fontSize: getScaledValue(30),
    padding: getScaledValue(20),
  },

  endContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default App;
