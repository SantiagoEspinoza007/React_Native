import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Color";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="÷"
          onPress={() => console.log("÷")}
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log("7")} />
        <CalculatorButton label="8" onPress={() => console.log("8")} />
        <CalculatorButton label="9" onPress={() => console.log("9")} />
        <CalculatorButton
          label="x"
          onPress={() => console.log("x")}
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log("7")} />
        <CalculatorButton label="5" onPress={() => console.log("8")} />
        <CalculatorButton label="6" onPress={() => console.log("9")} />
        <CalculatorButton
          label="-"
          onPress={() => console.log("x")}
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log("7")} />
        <CalculatorButton label="2" onPress={() => console.log("8")} />
        <CalculatorButton label="3" onPress={() => console.log("9")} />
        <CalculatorButton
          label="+"
          onPress={() => console.log("x")}
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => console.log("7")} />
        <CalculatorButton label="." onPress={() => console.log("8")} />
        <CalculatorButton
          label="+"
          onPress={() => console.log("=")}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
