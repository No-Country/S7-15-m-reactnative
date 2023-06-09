import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import theme from '../themes/theme.js';
import StyledText from '../components/StyledText.js';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.containerImage}>
        <ImageBackground
          style={styles.background}
          source={{
            uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681088243/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/backgroundDefault_xqafes.png',
          }}
        ></ImageBackground>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681086310/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Avatar_bczsp0.jpg',
          }}
        />
      </View>
      <View style={styles.userData}>
        <StyledText fontSize='title' fontWeight='bold' color='fourth'>
          Tech Talk
        </StyledText>
        <StyledText>Estudiante de NoCountry</StyledText>
        <StyledText>Argentina</StyledText>
      </View>
      <View style={styles.activities}>
        <LinearGradient
          // Button Linear Gradient
          colors={[theme.colors.third, theme.colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0 }}
          style={styles.activity}
        >
          <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681128139/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Reading_tglith.svg' />
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            Reading
          </StyledText>
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            90%
          </StyledText>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={[theme.colors.third, theme.colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0 }}
          style={styles.activity}
        >
          <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681128139/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Listening_egryof.svg' />
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            Listening
          </StyledText>
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            90%
          </StyledText>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={[theme.colors.third, theme.colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0 }}
          style={styles.activity}
        >
          <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681128139/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Writing_cfuxxr.svg' />
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            Writing
          </StyledText>
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            90%
          </StyledText>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={[theme.colors.third, theme.colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0 }}
          style={styles.activity}
        >
          <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681128139/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Speaking_txag08.svg' />
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            Speaking
          </StyledText>
          <StyledText color='fourth' fontWeight='bold' fontSize='subheading'>
            90%
          </StyledText>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
  },

  containerImage: {
    position: 'relative',
    width: '100%',
    height: 210,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 150,
  },
  profileImage: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    bottom: 10,
    left: '50%',
    marginLeft: -70,
    zIndex: 9,
  },
  userData: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  activities: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 80,
  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.secondaryTransparency,
  },
});
