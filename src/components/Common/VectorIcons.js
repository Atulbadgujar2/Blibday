import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
const VectorIcon = (props) => {
  const { iconFamily = "", name, size, color } = props
  let IconLibrary;

  // Map the `iconFamily` prop to the appropriate icon library
  switch (iconFamily) {
    case 'MaterialIcons':
      IconLibrary = MaterialIcons;
      break;
    case 'MaterialCommunityIcons':
      IconLibrary = MaterialCommunityIcons;
      break;
    case 'AntDesign':
      IconLibrary = AntDesign;
      break;
    case 'FontAwesome':
      IconLibrary = FontAwesome;
      break;
    case 'Foundation':
      IconLibrary = Foundation;
      break;
    case 'Entypo':
      IconLibrary = Entypo;
      break;
    case 'Octicons':
      IconLibrary = Octicons;
      break;
    case 'Feather':
      IconLibrary = Feather;
      break;
    case 'Fontisto':
      IconLibrary = Fontisto;
      break;
    case 'SimpleLineIcons':
      IconLibrary = SimpleLineIcons;
      break;
    case 'MaterialDesignIcons':
      IconLibrary = MaterialDesignIcons;
      break;
    case 'Ionicons':
    default:
      IconLibrary = Ionicons;
  }

  return <IconLibrary name={name} size={size} color={color} />;
}
export default VectorIcon;