// screens/FloorPlanScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const FloorPlanScreen = ({ route }) => {
    const { floorNumber } = route.params;

    // Example data
    // Example floor data (Replace with actual data)
    const floorData = {
        1: {
            layout: [
                { latitude: 37.78825, longitude: -122.4324 },
                // Add more points
            ],
            path: [
                { latitude: 37.78825, longitude: -122.4324 },
                // Add more points
            ],
        },
        // Add more floors as needed
    };



    const data = floorData[floorNumber];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Floor {floorNumber} Layout</Text>
            <MapView style={styles.map}>
                {data.layout.map((coord, index) => (
                    <Marker key={index} coordinate={coord} />
                ))}
                <Polyline coordinates={data.path} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 16,
    },
    map: {
        flex: 1,
    },
});



export default FloorPlanScreen;
