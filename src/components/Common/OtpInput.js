import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SH, SW, SF, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

function OtpInput(props) {
    const { pinCount, code, onCodeChanged } = props;
    const { colors } = useThemeHelper();
    const Styles = useMemo(() =>
        StyleSheet.create({
            otpView: {
                height: SH(45),
                width: '100%'
            },
            codeInputFieldStyle: {
                width: SW(60),
                height: SW(45),
                padding: 0,
                color: colors.black,
                backgroundColor: colors.white,
                fontSize: SF(18),
                borderWidth: SH(1),
                borderColor: colors.light_gray,
                borderRadius: SH(10),
                fontFamily: Fonts.Font_Medium
            },
            codeInputHighlightStyle: {
                height: SW(45),
                borderRadius: SH(10),
            },
        }), [colors]
    )


    return (
        <OTPInputView
            style={Styles.otpView}
            pinCount={pinCount}
            autoFocusOnLoad={false}
            code={code}
            onCodeChanged={(code) => onCodeChanged(code)}
            codeInputFieldStyle={Styles.codeInputFieldStyle}
            codeInputHighlightStyle={Styles.codeInputHighlightStyle}
            autoComplete="sms-otp"
        />
    )
}

OtpInput.defaultProps = {
    code: '',
    onCodeChanged: () => { },
    pinCount: 4,
};

OtpInput.propTypes = {
    code: propTypes.string,
    onCodeChanged: propTypes.func,
    pinCount: propTypes.number
};

export default OtpInput;
