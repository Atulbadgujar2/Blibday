import React, { useMemo } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AlertModalStyle } from '../../styles';
import Button from './Button';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import Spacing from "./Spacing";
import Input from "./Input";
import { Fonts } from "../../constants";

function AddAddressModal(props) {
    const { colors } = useThemeHelper();
    const AlertStyle = AlertModalStyle(colors);
    const { setState, state, modalVisible, setModalVisible, onPress } = props;

    const styles = useMemo(() =>
        StyleSheet.create({
            TextStyle: {
                fontSize: SF(16),
                fontFamily: Fonts.Font_SemiBold,
                marginBottom: SH(7),
                color: colors.black
            },
            labelView: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: SW(10),
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
            },
            labelButtonView: {
                fontSize: SF(15),
                fontFamily: Fonts.Font_SemiBold,
                color: colors.pine_green_color,
                backgroundColor: colors.mint_white,
                paddingHorizontal: 16,
                paddingVertical: 9,
                borderRadius: 20
            },
            labelButtonViewActive: {
                color: colors.white,
                backgroundColor: colors.primary_color,
            }
        }),
        [colors],
    );

    // LABEL ARRAY START
    var labelArray = [{
        id: "1",
        label: 'Home'
    },
    {
        id: "2",
        label: 'Friend'
    },
    {
        id: "3",
        label: 'Office'
    },
    {
        id: "4",
        label: 'Other'
    }
    ]
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={[AlertStyle.modalLayer]}>
                <TouchableWithoutFeedback>
                    <View style={AlertStyle.modalInnerFillView}>
                        <View style={AlertStyle.commonPadding}>
                            <Spacing space={SH(30)} />
                            <Text style={styles.TextStyle}>Save Address as *</Text>
                            <View style={styles.labelView}>
                                {
                                    labelArray.map((item, index) => {
                                        return (
                                            <TouchableOpacity key={index} onPress={() => setState({ ...state, label: item.id })}>
                                                <Text style={[styles.labelButtonView, item.id == state.label && styles.labelButtonViewActive]} >{item.label}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            <Spacing space={SH(20)} />
                            <Input
                                label="Complete Address *"
                                placeholder="Enter Your Address"
                                onChangeText={(text) => setState({ ...state, address: text })}
                                value={state.address}
                                autoComplete="postal-address"
                                multiline={true}
                                numberOfLines={5}
                                contentStyle={{ height: SH(95) }}
                            />
                            <Spacing space={SH(10)} />
                            <Input
                                label="Floor"
                                placeholder="Enter Floor"
                                onChangeText={(text) => setState({ ...state, floor: text })}
                                value={state.floor}
                                autoComplete="address-line1"
                            />
                            <Spacing space={SH(10)} />
                            <Input
                                label="Landmark"
                                placeholder="Enter Landmark"
                                onChangeText={(text) => setState({ ...state, landmark: text })}
                                value={state.landmark}
                                autoComplete="address-line2"
                            />
                            <Spacing space={SH(30)} />
                            <View style={AlertStyle.buttonmainview}>
                                <Button
                                    title={"Save Address"}
                                    onPress={() => onPress()}
                                />
                            </View>
                            <Spacing space={SH(40)} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>;
}
export default AddAddressModal;
