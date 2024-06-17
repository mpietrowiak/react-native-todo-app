import { View, Text, TextInput } from "react-native";
import { s } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        maxLength={4}
        keyboardType={"numeric"}
        blurOnSubmit={true}
        returnKeyType="done"
        style={s.input}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={onChange}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
