import React from 'react';
import { View, Text, Image } from 'react-native';
import { SH, SW, useThemeHelper, widthPercent } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';
import Spacing from './Spacing';
import LottieIcon from './LottieIcon';
import SvgIcons from './SvgIcons';
function NotFound(props) {
  const {
    title = "Not Found",
    content = "We're sorry, the keyword you were looking for could not be found. Please try searching with other keywords.",
    height = '100%',
    image = images.notfoundimg,
    iftype = 'Image', //Svg,LottieIcon,Image
    ifnoBg = false //Svg,LottieIcon,Image
  } = props;
  const { colors } = useThemeHelper();
  const HomeStyle = Styles(colors);

  return (
    <View style={[HomeStyle.notFoundView, { height: height }]}>

      <View style={{alignItems:'center'}}>
        <View style={ifnoBg ? HomeStyle.notFoundImageNoView : HomeStyle.notFoundImageView} >
          {iftype == 'Svg' ?
            <SvgIcons name={image} height={SW(220)} width={SW(220)} />
            : iftype == 'LottieIcon' ?
              <LottieIcon source={image} style={{ height: SW(250), width: SW(250) }} />
              :
              <Image source={image} style={[HomeStyle.notFoundImage, {
                height: SW(220),
                width: SW(220),
              }]} />
          }
        </View>
     {title != "" && 
     <>
     <Spacing space={SH(20)} />
        <Text style={[HomeStyle.notFoundBigTitle]}>{title}</Text>
        </>
        }
          {content != "" && 
     <>
     <Spacing space={SH(15)} />
        <Text style={HomeStyle.notFoundSmallTitle}>{content}</Text>
        </>
        }
       
        {/* <Spacing space={SH(80)} /> */}
      </View>
    </View>
  );
}

export default NotFound;
