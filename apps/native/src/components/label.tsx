import { Text, TextProps } from "react-native";

export function Label({ style, ...props }: TextProps) {
  return <Text style={[{ fontSize: 16, fontWeight: 600 }, style]} {...props} />;
}
