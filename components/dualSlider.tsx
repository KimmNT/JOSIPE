import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { DualSlider } from "@/interfaces/index";

const DualSliderComponent = ({
  sliderMinInitValue,
  sliderMaxInitValue,
  sliderMinValue,
  sliderMaxValue,
  sliderStep,
  sliderSafeRange,
  onMinValueChange,
  onMaxValueChange,
}: DualSlider) => {
  const [minValue, setMinValue] = useState(sliderMinInitValue);
  const [maxValue, setMaxValue] = useState(sliderMaxInitValue);

  const handleMinChange = (value: number) => {
    const newMinValue = Math.min(value, maxValue - sliderSafeRange);
    setMinValue(newMinValue);
    onMinValueChange(newMinValue); // Pass value to parent
  };

  const handleMaxChange = (value: number) => {
    const newMaxValue = Math.max(value, minValue + sliderSafeRange);
    setMaxValue(newMaxValue);
    onMaxValueChange(newMaxValue); // Pass value to parent
  };

  return (
    <View style={styles.container}>
      {/* Display Min & Max Values */}
      <Text style={styles.label}>
        Min: {minValue} - Max: {maxValue}
      </Text>

      {/* Min Slider */}
      <Text style={styles.sliderLabel}>Adjust Min</Text>
      <Slider
        style={styles.slider}
        minimumValue={sliderMinValue}
        maximumValue={sliderMaxValue}
        step={sliderStep}
        value={minValue}
        onValueChange={handleMinChange}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
        thumbTintColor="blue"
      />

      {/* Max Slider */}
      <Text style={styles.sliderLabel}>Adjust Max</Text>
      <Slider
        style={styles.slider}
        minimumValue={sliderMinValue}
        maximumValue={sliderMaxValue}
        step={sliderStep}
        value={maxValue}
        onValueChange={handleMaxChange}
        minimumTrackTintColor="red"
        maximumTrackTintColor="gray"
        thumbTintColor="red"
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

export default DualSliderComponent;
