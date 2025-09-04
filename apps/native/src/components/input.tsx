import { TextInput, TextInputProps } from "react-native";

export function Input({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      style={[
        {
          backgroundColor: "white",
          padding: 8,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "gray",
          color: "black",
        },
        style,
      ]}
      {...props}
    />
  );
}
