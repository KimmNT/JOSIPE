import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SliderComponent from "@/components/slider";
import exploreData from "@/json/explore.json";
import DualSliderComponent from "@/components/dualSlider";

const Splash = require("../../assets/images/splash.png");

export default function index() {
  const [rangeTimeSelected, setRangeTimeSelected] = useState(0);
  const [minCarbsSelected, setMinCarbsSelected] = useState(0);
  const [maxCarbsSelected, setMaxCarbsSelected] = useState(0);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Image
        source={Splash}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* <SliderComponent
        sliderName="Range time"
        sliderMaxInitValue={exploreData.readyTime.maxValue / 2}
        sliderMaxValue={exploreData.readyTime.maxValue}
        sliderMinInitValue={exploreData.readyTime.minValue}
        sliderMinValue={exploreData.readyTime.minValue}
        sliderStep={1}
        onValueChange={setRangeTimeSelected}
      />
      <Text>{rangeTimeSelected}</Text>
      <DualSliderComponent
        sliderName="Range time"
        sliderMaxInitValue={exploreData.carb.maxValue / 2}
        sliderMaxValue={exploreData.carb.maxValue}
        sliderMinInitValue={exploreData.carb.minValue}
        sliderMinValue={exploreData.carb.minValue}
        sliderSafeRange={10}
        sliderStep={10}
        onMaxValueChange={setMaxCarbsSelected}
        onMinValueChange={setMinCarbsSelected}
      />
      <Text>
        {minCarbsSelected} - {maxCarbsSelected}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
