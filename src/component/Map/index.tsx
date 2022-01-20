import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import * as Location from "expo-location";
import MapView, {
    PROVIDER_GOOGLE,
    Region,
    Marker,
    Callout,
    Circle,
    AnimatedRegion,
    Animated,
    LatLng
} from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import CryptoES from 'crypto-es';
import estilo from './styles';
import useZonesMap from "../../hooks/useZonesMap";
import { SafeAreaView } from "react-native-safe-area-context";

const GOOGLE_PLACES_API_KEY = 'GOOGLE_PLACES_API_KEY';

const initialRegion = {
    latitude: -15.8472577,
    longitude: -48.0474413,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
}

const Map: React.FC = (prpos) => {
    const [zone, setZone] = useState('');
    const [state, safe, danger, drag] = useZonesMap();
    const [modalVisible, setModalVisible] = useState(false);
    const [region, setRegion] = useState<Region>();
    const [errorMsg, setErrorMsg] = useState(null);
    const [local, setLocal] = useState("");
    const [regionSearch, setRegionSearch] = useState({
        lat: -15.8572577,
        lng: -48.0474413,
        latDelta: 0.02,
        lngDelta: 0.02
    });

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

            setRegion({ latitude, longitude, latitudeDelta: 0.02, longitudeDelta: 0.02 });
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
    return (
        <SafeAreaView>
            <GooglePlacesAutocomplete
                placeholder="Pesquisar local"
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance",
                    radius: 700,
                }}
                onPress={(data, details) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);

                    setLocal(data.structured_formatting.main_text);
                    console.log(local);

                    if (details) {
                        setRegionSearch({
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                            latDelta: 0.02,
                            lngDelta: 0.02
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
                showsCompass={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsPointsOfInterest={true}
                showsScale={true}
                followsUserLocation={true}
                loadingEnabled={true}
                pitchEnabled={true}
                toolbarEnabled={true}
                showsBuildings={true}
                userLocationAnnotationTitle={'Estou aqui'}
                userLocationUpdateInterval={100}
                onPress={(e) => {

                    switch (zone) {
                        case 'SAFE':
                            safe(e.nativeEvent.coordinate);
                            break;
                        case 'DANGER':
                            danger(e.nativeEvent.coordinate);
                            break;
                        default:
                            setZone('');
                    }

                    setZone('');
                    // console.log(zone);
                    // console.log(state[state.lenght - 1]);

                }}
            >
                <Marker coordinate={{ latitude: regionSearch.lat, longitude: regionSearch.lng }} />
                {state.length > 0 &&
                    state.map((item) => {
                        return (
                            <View>                              
                                <Marker coordinate={item.coordenada}
                                    draggable={true}

                                    key={item.id}
                                    identifier={item.id}
                                    onDragStart={(e) => {
                                        console.log(e.nativeEvent)
                                    }}
                                    onDragEnd={(e) => {
                                        drag(item.id, e.nativeEvent.coordinate)
                                    }}
                                    title={item.zone + 'Zone'}
                                >
                                    <FontAwesome name={item.icon} size={30} color={item.border} />
                                    <Callout style={estilo.calloutContainer}>
                                        <Text style={estilo.calloutText}>{item.zone + 'ZONE'}</Text>
                                        <Text style={estilo.calloutText}>{item.info.desc}</Text>
                                    </Callout>

                                </Marker>
                                <Circle center={item.coordenada}
                                    key={CryptoES.SHA256(Math.random().toFixed(3).toString()).toString()}
                                    radius={item.radius}
                                    fillColor={item.color}
                                    strokeColor={item.border}
                                />
                            </View>


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
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={estilo.centeredView}>
                    <View style={estilo.modalView}>
                        <Text style={estilo.modalText}>Adicionar Nova Ocorrência</Text>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => {
                                setZone('SAFE');
                                setModalVisible(!modalVisible);
                            }
                            }
                        >
                            <Text style={estilo.textStyle}>Adicionar Zona Segura!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => {
                                setZone('DANGER');
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={estilo.textStyle}>Adicionar Zona de Perigo!</Text>
                            <Text style={estilo.textStyle}>Tome Cuidado!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => {
                                setZone('');
                                setModalVisible(!modalVisible)
                            }
                            }
                        >
                            <Text style={estilo.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>

    )
}

export default Map;
