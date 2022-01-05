import React, { useEffect, useState } from "react";
import { Alert, Linking, Text, View, TouchableOpacity, Modal, ImageURISource } from "react-native";
import * as Location from "expo-location";
import MapView, {
    PROVIDER_GOOGLE,
    Region,
    Marker,
    Callout,
    Circle
} from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import estilo from './styles';
import DangerZone from '../../../assets/dangerzone.png';
import SafeZone from '../../../assets/safezone.png';
import { ScrollView } from "react-native-gesture-handler";

const GOOGLE_PLACES_API_KEY = 'AIzaSyBxr9fSdqtuSlfaELlQNPWDB8A7AMIJaug';

const initialRegion = {
    latitude: -15.8472577,
    longitude: -48.0474413,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04
}

const Map: React.FC = () => {
    const [pin, setPin] = useState(
        {
            latitude: -15.8572577,
            longitude: -48.0474413
        }
    )
    const [marker, setMarker] = useState([]);
    const [a, setA] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [region, setRegion] = useState<Region>();
    const [errorMsg, setErrorMsg] = useState(null);
    const [regionSearch, setRegionSearch] = useState({
        lat: -15.8572577,
        lng: -48.0474413,
        latDelta: 0.07,
        lngDelta: 0.07
    });
    const [local, setLocal] = useState("");

    const handleNewMarker = (estado, coordenada) => {
        if (estado > 0) {
            setMarker([...marker, coordenada]);
        }

        setA(0);
    };

    const insertSafeZone = () => {
        setA(1);
        setModalVisible(!modalVisible);
    };

    const insertDangerZone = () => {
        setA(2);
        setModalVisible(!modalVisible);
    };

    console.log(marker);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar a localização negada!');
                return;
            }

            let {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();

            setRegion({ latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 });
        })();
    }, []);

    let text = 'Waiting..';
    let lat = null;
    let lon = null;

    if (errorMsg) {
        text = errorMsg;
    } else if (region) {
        text = JSON.stringify(region);
        lat = JSON.stringify(region.latitude);
        lon = JSON.stringify(region.longitude);
        console.log(region);
    }

    let image: number | ImageURISource | null | undefined = null;
    let color: string = '';
    let border: string = '';
    
    if (a == 1) {
        image = SafeZone;
        color = "rgba(181, 234, 181, 0.47)";
        border = 'green';
    } if (a == 2) {
        image = DangerZone;
        color = "rgba(209, 0, 0, 0.27)";
        border = 'red';
    }

    return (
        <ScrollView>
            <GooglePlacesAutocomplete
                placeholder="Pesquisar local"
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance",
                    radius: 500,
                }}
                onPress={(data, details) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);

                    setLocal(data.structured_formatting.main_text)

                    if (details) {
                        setRegionSearch({
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                            latDelta: 0.07,
                            lngDelta: 0.07
                        })
                    }
                }}
                textInputProps={{
                    InputComp: Input,
                    errorStyle: { color: "red" },
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    region: "br",
                    language: "pt-BR",
                    components: "country:br",
                    radius: 300,
                    location: { latitude: regionSearch.lat, longitude: regionSearch.lng },

                }}
                styles={{
                    container: {
                        position: "absolute", width: "100%", zIndex: 99
                    },
                    listView: { position: "relative", backgroundColor: "white", width: "100%", zIndex: 999, marginTop: -28 },
                }}
                nearbyPlacesAPI='GoogleReverseGeocoding'
            />

            <MapView style={estilo.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                region={region}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsPointsOfInterest={true}
                showsScale={true}
                followsUserLocation={true}
                loadingEnabled={true}
                pitchEnabled={true}
                toolbarEnabled={true}
                userLocationUpdateInterval={100}

                onPress={(e) => handleNewMarker(a, e.nativeEvent.coordinate)}
            >
                {marker.length > 0 &&
                    marker.map((m) => {
                        return (<Marker coordinate={m}
                            draggable={true}
                            image={image}
                            key={Math.random().toString()}
                            onPress={() => setModalVisible(true)}
                        />
                        )
                    })
                }
                {marker.length > 0 &&
                    marker.map((m) => {
                        return (
                            <Circle center={m}
                                radius={300} fillColor={color} strokeColor={border}
                            />
                        )
                    })
                }



            </MapView>
            <View style={estilo.btnLinhaMarcador}>
                <TouchableOpacity style={estilo.btnMarcador}
                    onPress={() => setModalVisible(true)}>
                    <FontAwesome name="plus" size={30} color="#fff" />
                </TouchableOpacity>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={estilo.centeredView}>
                    <View style={estilo.modalView}>
                        <Text style={estilo.modalText}>Adicionar Nova Ocorrência</Text>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => insertSafeZone()}
                        >
                            <Text style={estilo.textStyle}>Adicionar Zona Segura!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => insertDangerZone()}
                        >
                            <Text style={estilo.textStyle}>Adicionar Zona de Perigo!</Text>
                            <Text style={estilo.textStyle}>Tome Cuidado!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={estilo.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>

    )
}

export default Map;