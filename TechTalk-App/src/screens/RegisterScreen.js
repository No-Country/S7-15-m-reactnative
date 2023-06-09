/* react / expo */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { SvgUri } from 'react-native-svg';
/* redux */
import { useDispatch } from 'react-redux';
/* components and functions */
import StyledText from '../components/StyledText.js';
import StyledButton from '../components/StyledButton.js';
import theme from '../themes/theme.js';
import StyledInput from '../components/StyledInput.js';
import StyledLink from '../components/StyledLink.js';
import { useNavigation } from '@react-navigation/native';
import useDataCollection from '../hooks/useDataCollection.js';
import register from '../services/register.js';

const RegisterScreen = () => {
  const [value, collection] = useDataCollection({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigation = useNavigation();
  const nav = (route) => {
    navigation.navigate(route);
  };

  const sendForm = async () => {
    try {
      const userCreate = await register({ ...value });
      console.log(userCreate);
      /* if (id) {
        dispatch(authorized());
        const user = await getUserInfo(id, token).then(() => {
          dispatch(fulfilled());
        });
        dispatch(logIn({ user, token }));
      } */
    } catch (error) {
      console.error('hola', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.logo}>
        <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/LogoTechTalk_y15vs5.svg' />
        <View style={styles.text}>
          <View style={styles.title}>
            <StyledText fontSize='title' color='third' fontWeight='bold'>
              ¡Bienvenido a{' '}
            </StyledText>
            <StyledText fontSize='title' color='fourth' fontWeight='bold'>
              TechTalk!
            </StyledText>
          </View>
          <StyledText fontSize='subheading'>
            Ingresa tus datos para continuar
          </StyledText>
        </View>
      </View>
      <View style={styles.form}>
        <StyledInput
          placeholder='Ingrese su nombre'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680883858/Images%20proyect%20techTalk/TechTalkAssets/icons/personIcon_umdapq.svg'
          onChangeText={(text) => collection(text, 'fullname')}
          keyboardType='email'
        />
        <StyledInput
          placeholder='Ingrese su email'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/email_oz4rsn.svg'
          onChangeText={(text) => collection(text, 'email')}
          keyboardType='email'
        />
        <StyledInput
          placeholder='Ingrese su celular'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680883793/Images%20proyect%20techTalk/TechTalkAssets/icons/phone_knsfm4.svg'
          onChangeText={(text) => collection(text, 'phone')}
          keyboardType='email'
        />
        <StyledInput
          placeholder='Contraseña'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/security_dslnfa.svg'
          secondUrl='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/eye-slash_ygsqvr.svg'
          onChangeText={(text) => collection(text, 'password')}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttons}>
        <StyledButton
          type='primary'
          text='Iniciar Sesión'
          action={() => sendForm()}
        />
      </View>
      <View style={styles.link}>
        <StyledText>¿Ya eres miembro? </StyledText>
        <StyledLink text='inicia sesión' action={() => nav('Login')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    gap: 15,
    backgroundColor: theme.colors.primary,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    marginTop: 30,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
    marginBottom: 20,
  },
});

export default RegisterScreen;
