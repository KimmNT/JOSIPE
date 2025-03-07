import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

const ScrollBackgroundChange: React.FC = () => {
  const scrollY = useSharedValue(0); // Track scroll position

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y; // Update scroll position
  });

  // Animated background color change
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollY.value,
      [0, 300], // Scroll range
      ["white", "maroon"] // Color transition
    ),
  }));

  // Animated text color change
  const textStyle = useAnimatedStyle(() => ({
    color: interpolateColor(scrollY.value, [0, 300], ["black", "white"]),
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.Text style={[styles.text, textStyle]}>
          <Text>Scroll Up to Change Background!</Text>
        </Animated.Text>
        <View style={{ height: 800 }} /> {/* Dummy content for scrolling */}
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ScrollBackgroundChange;
