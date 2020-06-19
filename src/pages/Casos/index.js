import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';

export default function Casos() {
  const [casos, setCasos] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

    function navigateToDetalhe(caso) {
      navigation.navigate('Detalhe', { caso });
    }

    async function loadCasos() {
      if(loading) {
        return;
      }

      if(total > 1 && casos.length === total) {
        return;
      }

      setLoading(true);

      const response = await api.get('casos', {
        params: { page }
      });

      setCasos([...casos, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setPage(page + 1);
      setLoading(false);
    }

    useEffect(() => {
      loadCasos();
    }, []);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

        <FlatList
          style={styles.casoList}
          data={casos}
          keyExtractor={caso => String(caso.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadCasos}
          onEndReachedThreshold={0.2}
          renderItem={({ item: caso }) => (
            <View style={styles.caso}>

              <Text style={styles.casoProperty}>ONG:</Text>
              <Text style={styles.casoValue}>{caso.name}</Text>

              <Text style={styles.casoProperty}>CASO:</Text>
              <Text style={styles.casoValue}>{caso.title}</Text>

              <Text style={styles.casoProperty}>VALOR:</Text>
              <Text style={styles.casoValue}>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(caso.value)}</Text>

              <TouchableOpacity
                style={styles.detalhesButton}
                onPress={() => navigateToDetalhe(caso)}>

                <Text style={styles.detalhesButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
              </TouchableOpacity>
            </View>
          )}
        />

      </View>
    );
};
