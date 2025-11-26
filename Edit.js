import React, { useState } from 'react';
import {datasource} from "./Data";
import {View, Text, TextInput, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{padding: 20}}>
            <Text>Letter:</Text>
            <TextInput
                value={letter}
                onChangeText={setLetter}
                maxLength={1}
                style={{borderWidth: 1, borderColor: "black"}}
            />

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Button title="Save" onPress={() => {
                        let indexnum = 1
                        if (route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data[route.params.index].key = letter;
                        navigation.navigate("Home")
                    }
                    }
                    />
                </View>

                <View style={{ flex: 1, marginRight: 5 }}>
                    <Button title="Delete" onPress={() => {
                        let indexnum = 1
                        if (route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        Alert.alert("Are you sure?", '',
                            [{text:'Yes', onPress: () => {
                                    datasource[indexnum].data.splice(route.params.index,1);
                                    navigation.navigate("Home")
                                }},
                                {text:'No'}])
                        }
                    }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;