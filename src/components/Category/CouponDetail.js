import React, { useMemo } from "react";
import { Modal, Text, TouchableOpacity, View, Image, TouchableWithoutFeedback } from "react-native";
import { AlertModalStyle, CouponScreenStyle } from '../../styles';
import { SF, SH, SW, useThemeHelper } from '../../helper';

import { Spacing, SvgIconsFiles } from "../Common";

function CouponDetail(props) {
    const { colors } = useThemeHelper();
    const AlertStyle = AlertModalStyle(colors);
    const { modalVisible, setModalVisible, data } = props;
    const styles = CouponScreenStyle(colors)


    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={[[AlertStyle.modalLayer]]}>
                <TouchableWithoutFeedback>
                    <View style={[AlertStyle.modalInnerFillView]}>
                        <View style={AlertStyle.commonPadding}>
                            <Spacing space={SH(30)} />

                            <View
                                style={styles.cardContainer}>
                                {/* Left circular cut */}
                                <View style={styles.leftCut}>
                                    <View style={styles.leftCutMask} />
                                </View>

                                {/* Right circular cut */}
                                <View style={styles.rightCut}>
                                    <View style={styles.rightCutMask} />
                                </View>

                                {/* Main Content */}
                                <View style={styles.contentWrapper}>
                                    <View style={styles.cardContent}>
                                        {/* Left side text section */}
                                        <View style={styles.textSection}>
                                            <Text style={[styles.couponCode,styles.offerTextBig]}>{data?.code}</Text>
                                            <Spacing space={SH(3)} />
                                            <Text style={styles.unlockText}>{data?.name}</Text>


                                        </View>

                                        {/* Dashed border separator */}
                                        <View style={styles.separator} />

                                        {/* Image Section */}
                                        <Image source={data.image} style={styles.image} />
                                    </View>
                                    <Spacing space={SH(15)} />

                                    <View style={[styles.cardContentColumn]}>
                                        <View style={styles.offerView}>
                                            <SvgIconsFiles name="SaleIcon" size={20} color={colors.primary_color} />
                                            <Text style={[styles.offerText,styles.offerTextBig]}>{data?.discount}</Text>
                                        </View>
                                        <Spacing space={SH(25)} />

                                        <Text style={[styles.couponCode,{textTransform: 'capitalize'}]}>Details</Text>
                                        <Spacing space={SH(10)} />
                                        <Text style={styles.unlockText}>Validity: Coupon Valid thougth out october 31 2025</Text>
                                        <Spacing space={SH(5)} />
                                        <Text style={styles.unlockText}>Validity: Coupon Valid thougth out october 31 2025</Text>
                                        <Spacing space={SH(5)} />
                                        <Text style={styles.unlockText}>Validity: Coupon Valid thougth out october 31 2025</Text>
                                        <Spacing space={SH(25)} />

                                    </View>
                                    {/* Redeem section */}
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.redeemSection}>
                                        <Text style={styles.redeemText}>COPY CODE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>;
}
export default CouponDetail;
