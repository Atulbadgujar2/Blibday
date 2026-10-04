import React, { useEffect, useRef, useState } from "react";
import { View, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import images from "../../images";
import { SCREEN_WIDTH, useThemeHelper } from "../../helper";

const TrackOrderDriverToCustomer = () => {
  const mapRef = useRef(null);
  const { colors } = useThemeHelper();

  // Customer fixed location
  const customer = {
    latitude: 37.79025,
    longitude: -122.4304,
  };

  // Shared animated driver coordinates
  const lat = useSharedValue(37.7888);
  const lng = useSharedValue(-122.4320);

  const heading = useSharedValue(0);

  // Animated rotation for marker
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${heading.value}deg` },
    ],
  }));

  // Helper to calculate angle
  const getHeading = (lat1, lon1, lat2, lon2) => {
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

    let angle = (Math.atan2(y, x) * 180) / Math.PI;
    return (angle + 360) % 360;
  };

  // Animate driver movement
  const moveDriver = (newLat, newLng) => {
    const currentLat = lat.value;
    const currentLng = lng.value;

    heading.value = getHeading(currentLat, currentLng, newLat, newLng);

    lat.value = withTiming(newLat, {
      duration: 1800,
      easing: Easing.linear,
    });

    lng.value = withTiming(newLng, {
      duration: 1800,
      easing: Easing.linear,
    });
  };

  // Auto zoom to show both markers
  useEffect(() => {
    setTimeout(() => {
      mapRef.current?.fitToCoordinates(
        [
          { latitude: lat.value, longitude: lng.value },
          customer,
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true,
        }
      );
    }, 600);
  }, []);

  // Simulated movement
  useEffect(() => {
    let steps = [
      { latitude: 37.78920, longitude: -122.4315 },
      { latitude: 37.78980, longitude: -122.4310 },
      { latitude: 37.79010, longitude: -122.4307 },
      customer,
    ];

    let index = 0;

    const interval = setInterval(() => {
      if (index < steps.length) {
        moveDriver(steps[index].latitude, steps[index].longitude);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapView
      ref={mapRef}
      style={{
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 0.9,
      }}
      initialRegion={{
        latitude: lat.value,
        longitude: lng.value,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* Customer Marker */}
      <Marker coordinate={customer} pinColor="red" />

      {/* Driver Animated Marker */}
      <Marker
        coordinate={{
          latitude: lat.value,
          longitude: lng.value,
        }}
        anchor={{ x: 0.5, y: 0.5 }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: colors.white,
              borderRadius: 100,
              padding: 5,
              borderWidth: 4,
              borderColor: colors.primary_color,
            },
            animatedStyle,
          ]}
        >
          <Image
            source={images.driver}
            style={{
              width: 20,
              height: 20,
              transform: [{ rotateY: "180deg" }],
            }}
          />
        </Animated.View>
      </Marker>

      {/* Route Polyline */}
      <Polyline
        coordinates={[
          { latitude: lat.value, longitude: lng.value },
          customer,
        ]}
        strokeWidth={4}
        strokeColor={colors.primary_color}
      />
    </MapView>
  );
};

export default TrackOrderDriverToCustomer;
