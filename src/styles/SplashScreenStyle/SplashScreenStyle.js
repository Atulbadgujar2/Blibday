import { StyleSheet } from 'react-native';
import { SW } from '../../helper';

export default StyleSheet.create((Colors)=>({
    centerView:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary_color
    },
    iconStyle:{
        width:SW(200),
        height:SW(200)
    }
})
);