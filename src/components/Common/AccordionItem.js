import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { SF, SW, useThemeHelper } from '../../helper';
import { List, IconButton } from 'react-native-paper';
import { Fonts } from "../../constants";

function AccordionItem(props) {
    const { colors } = useThemeHelper();
    const { title, content, icon, ifopen=false } = props;
    const [expanded, setExpanded] = useState(ifopen);
    const styles = useMemo(() =>
        StyleSheet.create({
            container: {
                borderRadius: SW(7),
                overflow: 'hidden',
                backgroundColor: colors.white_to_black_color,
                borderWidth: 1,
                borderColor: colors.bright_gray,
            },
            accordion: {
                backgroundColor: colors.white_to_black_color,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
            },
            title: {
                fontFamily: Fonts.Font_SemiBold,
                fontSize: SF(15),
                color: colors.black_to_white_color
            },
            containerStyle: {
                marginTop: 0,
                marginBottom: 0,
            },
            iconStyle: {
                height: 'auto',
                marginTop: 0,
                marginBottom: 0,
            },
            descriptionStyle: {
                borderColor: colors.bright_gray,
                borderTopWidth: 1,
                paddingLeft: 0,
                paddingRight: 0
            },
            descriptionTitleStyle: {
                fontFamily: Fonts.Font_Medium,
                fontSize: SF(13),
                color: colors.light_black
            }
        }),
        [colors],
    );

    return <View style={styles.container}>
        <List.Accordion
            title={title}
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
            left={props => icon ? <List.Icon {...props} icon={icon} /> : null}
            style={styles.accordion}
            titleStyle={styles.title}
            right={props => (
                <IconButton
                    {...props}
                    icon={expanded ? 'chevron-up' : 'chevron-down'}
                    iconColor={colors.primary_color} // Icon color change
                    size={SF(30)}
                    style={styles.iconStyle}
                />
            )}
            containerStyle={styles.containerStyle}
        >
            <List.Item title={content} titleNumberOfLines={5} style={styles.descriptionStyle}
                titleStyle={styles.descriptionTitleStyle}
            />
        </List.Accordion>
    </View>;
}
export default AccordionItem;
