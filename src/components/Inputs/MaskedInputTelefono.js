import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function MaskedInputTelefono({telefono, setTelefono}) {
    return (
            <TextInputMask
                style={styles.Input}
                placeholder="Teléfono"
                placeholderTextColor="#000000"
                type={'custom'}
                options={{
                    mask: '9999-9999' // Formato para el número de teléfono
                }}
                value={telefono}
                onChangeText={setTelefono}
            />
    );
}

const styles = StyleSheet.create({
    Input: {
      backgroundColor:'#D9D9D9',
      color: "#000000",
      fontWeight:'800',
      width:250,
      borderRadius:5,
      padding: 5,
      marginVertical:10
    },
  
  });