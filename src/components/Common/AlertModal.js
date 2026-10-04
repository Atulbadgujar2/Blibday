import React from "react";
import { Modal, Text, View } from "react-native";
import { AlertModalStyle } from '../../styles';
import Button from './Button';
import propTypes from 'prop-types';
import { SF, SH, useThemeHelper } from '../../helper';
import LottieIcon from "./LottieIcon";
import images from "../../images";
import Spacing from "./Spacing";

function AlertModal(props) {
    const { colors } = useThemeHelper();
    const AlertStyle = AlertModalStyle(colors);
    const { message, description, modalVisible, setModalVisible, onPress, onPressCancel, buttonText, cancelButtonText } = props;

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={[AlertStyle.modalLayer]}>
            <View style={AlertStyle.modalInnerView}>

                {/* MASK LAYER START */}
                <View style={AlertStyle.modalMaskView} />
                {/* MASK LAYER END */}

                <View style={AlertStyle.commonPadding}>
                    <View>
                        <LottieIcon source={images.success} style={{ height: SH(150) }}
                            colorFilters={[
                                { keypath: "Shape Layer 2", color: colors.forest_green },
                                { keypath: "Shape Layer 1", color: colors.eton_green },
                                { keypath: "Shape Layer 3", color: colors.eton_green },
                                { keypath: "BG", color: colors.white },
                            ]}
                        />
                    </View>
                    <Spacing space={SH(30)} />

                    <View style={AlertStyle.commonPadding}>
                        <Text style={AlertStyle.messageText}>{message}</Text>
                        <Spacing space={SH(10)} />
                        <Text style={AlertStyle.messageDesc}>{description}</Text>
                    </View>
                    <Spacing space={SH(40)} />

                    <View style={AlertStyle.buttonmainview}>
                        {onPress &&
                            <Button
                                title={buttonText}
                                onPress={() => onPress()}
                            />
                        }
                        {cancelButtonText &&
                            <Button
                                mode="light"
                                title={cancelButtonText}
                                onPress={() => { onPressCancel() }}
                            />
                        }
                    </View>
                    <Spacing space={SH(40)} />

                </View>

            </View>
        </View>
    </Modal>;
}

AlertModal.defaultProps = {
    message: '',
    description: '',
    buttonText: 'Ok',
    cancelButtonText: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
};

AlertModal.propTypes = {
    message: propTypes.string,
    description: propTypes.string,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,
    setModalVisible: propTypes.func,
    modalVisible: propTypes.bool,
    onPress: propTypes.func,
    onPressCancel: propTypes.func
};

export default AlertModal;
