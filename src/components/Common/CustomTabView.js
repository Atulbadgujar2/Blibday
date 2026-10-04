// CustomTabView.js
import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

const CustomTabView = ({ tabs }) => {
  const { colors } = useThemeHelper();
  const [activeTab, setActiveTab] = useState(tabs[0].key); // default: first tab
  const styles = useMemo(() =>
    StyleSheet.create({
      container: { flex: 1 },
      tabHeader: {
        flexDirection: 'row',
        backgroundColor: colors.white_to_black_color,
      },
      tabButton: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: colors.bright_gray,
        borderBottomWidth: 1,
        backgroundColor: colors.white_to_black_color
      },
      tabButtonActive: {
        backgroundColor: colors.mint_white
      },
      activeBorder: {
        backgroundColor: colors.white_to_black_color,
        width: '100%',
        height: SW(4),
        borderRadius: SW(40),
      },
      activeTab: {
        backgroundColor: colors.primary_color,
      },
      tabText: {
        fontSize: SF(16),
        fontFamily: Fonts.Font_SemiBold,
        color: colors.gray,
        paddingVertical: SH(8)
      },
      activeText: {
        color: colors.primary_color
      },
      contentContainer: {
        flex: 1,
      },
      scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
    [colors],
  );
  return (
    <View style={styles.container}>
      {/* 🔹 TAB HEADER */}
      <View style={styles.tabHeader}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabButton, activeTab === tab.key && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[styles.tabText, activeTab === tab.key && styles.activeText]}>
              {tab.title}
            </Text>
            <View
              style={[styles.activeBorder, activeTab === tab.key && styles.activeTab]}
            ></View>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔹 TAB CONTENT */}
      <View style={styles.contentContainer}>
        {tabs.map(tab => (
          <View
            key={tab.key}
            style={[styles.scene, { display: activeTab === tab.key ? 'flex' : 'none' }]}
          >
            {tab.content}
          </View>
        ))}
      </View>
    </View>
  );
};


export default CustomTabView;
