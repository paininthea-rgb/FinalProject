import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import CustomListItem from '../components/CustomListItem';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});