import React, { useEffect, useState } from "react";
import { Contato, getContatoById, getContatos } from "../../services/contatos";
import { View, Text, ActivityIndicatorBase, ActivityIndicator } from "react-native";
import styles from "../../estilos/main";
import { useLocalSearchParams } from "expo-router";
import { Image } from "react-native";

// incluir na navegação da lista



const Detalhes: React.FC<Contato> = () => {
    const {id} = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect( () =>{
        const carregarContato = async () => {
            const meucontato = await getContatoById(id.toString());
            setContato(meucontato);
        }
        carregarContato();
    }, []);

    return (
        <View style={styles.container}>
            {(contato) ? (
                    <>
            <Text style={styles.text}>{contato!.nome}</Text>
            <Text style={styles.text}>{contato!.email}</Text>
            <Text style={styles.text}>{contato!.telefone}</Text>
            <Text style={styles.text}>{contato!.endereco}</Text>
            <Image source={{ uri: contato!.foto }} style={styles.foto} />
            </>
            ): <ActivityIndicator size="large" color="#0000ff" />}
        </View>
    );
}

export default Detalhes;