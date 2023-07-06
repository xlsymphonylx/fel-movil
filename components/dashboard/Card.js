import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Card({
  title,
  subtitle,
  iconSize,
  backgroundColor,
  tintColor,
  event,
  icon,
  iconColor,
}) {
  const styles = StyleSheet.create({
    container: {},
    pressableContainer: {
      padding: 30,
      backgroundColor: backgroundColor || "white",
      margin: 20,
      flex: 1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      color: tintColor || "black",
      fontSize: 20,
    },
    subtitle: {
      color: tintColor || "black",
    },
    infoContainer: {
      marginLeft: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer} onPress={event}>
        <FontAwesomeIcon
          icon={icon}
          color={iconColor || "#343B41"}
          size={iconSize || 16}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Card;
