import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
            uri:
           "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800"}}></ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});