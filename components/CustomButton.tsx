import { CustomButtonProps } from "@/type";
import cn from "clsx";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  onPress,
  title = "ClickMe",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
  disabled = false,
}: CustomButtonProps) => {
  const isBtnDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      className={cn(
        "custom-btn",
        isBtnDisabled && "opacity-50", // ✅ dim when disabled
        style
      )}
      onPress={onPress}
      disabled={isBtnDisabled} // ✅ disable button
    >
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className={cn("text-white-100 paragraph-semibold", textStyle)}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
