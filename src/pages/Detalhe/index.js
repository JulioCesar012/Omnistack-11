import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detalhe() {
  const navigation = useNavigation();
  const route = useRoute();

  const caso = route.params.caso;
  const message = `Olá Laboratório JF, estou entrando em contato pois gostaria de ajudar no caso "${caso.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',currency: 'BRL' }).format(caso.value)}`;

  function navigateBack() {
    navigation.goBack()
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Contribuidor do caso: ${caso.title}`, //Mensagem ou Caso da ong
      recipients: [caso.email], //Pra quem vai ser enviado
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.caso} >
        <Text style={[styles.casoProperty, { marginTop: 0}]}>ONG:</Text>
        <Text style={styles.casoValue}>{caso.name} de {caso.city}/{caso.uf}</Text>

        <Text style={styles.casoProperty}>CASO:</Text>
        <Text style={styles.casoValue}>{caso.title}</Text>

        <Text style={styles.casoProperty}>VALOR:</Text>
        <Text style={styles.casoValue}>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(caso.value)}</Text>
      </View>

      <View style={styles.contatoBox}>
        <Text style={styles.collaboratorTitle}>Salve o dia!</Text>
        <Text style={styles.collaboratorTitle}>Seja um colaborador desse caso.</Text>

        <Text style={styles.collaboratorDescription}>Entre em contato: </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


//useRoute: Serve pra pegar informações especificas da página atual da aplicação
