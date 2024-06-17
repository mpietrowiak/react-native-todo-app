import { View, Text } from "react-native";
import { s } from "./DisplayTemperature.style";

export function DisplayTemperature({ temperature, unit }) {
  return (
    <View style={s.root}>
      <Text style={s.temperatureTxt}>
        {parseFloat(temperature).toFixed(2)} {unit}
      </Text>
    </View>
  );
}
