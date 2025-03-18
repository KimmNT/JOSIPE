import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { SingleSlider } from "@/interfaces/index";

const SliderComponent = ({
  sliderName,
  sliderMinInitValue,
  sliderMaxInitValue,
  sliderMinValue,
  sliderMaxValue,
  sliderStep,
  onValueChange,
}: SingleSlider) => {
  const [minValue, setMinValue] = useState(sliderMinInitValue);
  const [maxValue, setMaxValue] = useState(sliderMaxInitValue);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleValueChange = (value: number) => {
    setSelectedValue(value);
    onValueChange(value); // Pass value to parent
  };

  return (
    <View style={styles.container}>
      <Text>{sliderName}</Text>
      <Slider
        style={styles.slider}
        minimumValue={sliderMinValue}
        maximumValue={sliderMaxValue}
        step={sliderStep}
        value={minValue}
        onValueChange={handleValueChange}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
        thumbTintColor="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 16,
    marginTop: 10,
  },
  slider: {
    width: 300,
    height: 40,
  },
});

export default SliderComponent;
