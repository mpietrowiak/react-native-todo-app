import { ImageBackground } from "react-native";
import hotBackground from "@/assets/hot.png";
import coldBackground from "@/assets/cold.png";
import { s } from "../../App.style";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/components/Input/Input";
import { DisplayTemperature } from "@/components/DisplayTemperature/DisplayTemperature";
import { ButtonConvert } from "@/components/ButtonConvert/ButtonConvert";
import { useState } from "react";

import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "@/utils/temperature";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);

  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit);
    }
  }

  return (
    <ImageBackground
      source={isIceTemperature(inputValue) ? coldBackground : hotBackground}
      style={s.backgroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              defaultValue={0}
              onChange={setInputValue}
              unit={currentUnit}
            />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={oppositeUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
