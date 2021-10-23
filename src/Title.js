import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({title}) {
  return (
    <View style={styles.secContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    secContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    fontWeight: 'bold',
    textAlign:"center"
  },
});
