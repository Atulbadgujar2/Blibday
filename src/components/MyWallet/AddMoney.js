import React, { useRef, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Styles } from '../../styles';
import { CardData, SCREEN_WIDTH, SF, SH,  useThemeHelper } from '../../helper';
import { Spacing, Button, LottieIcon, VectorIcons } from "../Common";
import images from "../../images";
import { CURRENCY } from "../../constants";

function AddMoney(props) {
    const { colors } = useThemeHelper();
    const Style = Styles(colors);
    const { navigation, amountValue, setAmountValue, cardValue, setCardValue } = props;
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return <View style={Style.paddingHorizontalCommon}>
        <Spacing space={SH(10)} />
        <View style={{ alignItems: 'center' }}>
            <LottieIcon source={images.wallet} style={{ height: SCREEN_WIDTH - 200, width: SCREEN_WIDTH }} />
        </View>
        {/* Card List */}
        {CardData.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => setCardValue(item.id)}
                    style={Style.addMoneycardContainer}
                >
                    <View style={Style.addMoneycardLeft}>
                        <View style={Style.addMoneycardIconBox}>
                            <Image source={item.image} style={Style.addMoneycardImage} />
                        </View>

                        <Text style={Style.addMoneycardTitle}>{item.title}</Text>
                    </View>

                    {item.id == cardValue ? (
                        <VectorIcons
                            iconFamily="MaterialDesignIcons"
                            name="checkbox-marked-circle"
                            size={SF(22)}
                            color={colors.primary_color}
                        />
                    ) : (
                        <VectorIcons
                            iconFamily="MaterialDesignIcons"
                            name="checkbox-blank-circle-outline"
                            size={SF(22)}
                            color={colors.gray}
                        />
                    )}
                </TouchableOpacity>
            );
        })}

        <Spacing space={SH(20)} />

        {/* Amount Box */}
        <View style={Style.addMoneyamountBox}>
            <Text style={Style.addMoneyamountLabel}>Enter Amount</Text>

            <View style={Style.addMoneyamountInputRow}>
                <Text style={Style.addMoneydollarText}>{CURRENCY}</Text>

                <TextInput
                    ref={inputRef}
                    placeholder="Enter....."
                    onChangeText={(text) => setAmountValue(text)}
                    value={amountValue}
                    style={Style.addMoneyamountInput}
                    placeholderTextColor={colors.light_gray}
                />
            </View>
        </View>

        <Spacing space={SH(20)} />

        {/* Quick Amount Buttons */}
        <View style={Style.addMoneyquickAmountContainer}>
            {["10", "30", "100", "200", "5000"].map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={Style.addMoneyquickAmountBtn}
                    onPress={() => setAmountValue(item)}
                >
                    <Text style={Style.addMoneyquickAmountText}>{CURRENCY}{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <Spacing space={SH(30)} />
        <Button title="Continue" onPress={() => navigation.goBack()} />
        <Spacing space={SH(30)} />
    </View>;
}
export default AddMoney;
