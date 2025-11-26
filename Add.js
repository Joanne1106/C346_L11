import React, { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import {datasource} from "./Data";
import {Button, TextInput, View, Text} from "react-native";


const Add = ({navigation}) => {
    const [letter, setLetter] = useState("");
    const [letterType, setLetterType] = useState("Vowels");

    return (
        <View style={{marginTop: 30}}>
            <Text>Letter:</Text>

            <TextInput
                value={letter}
                onChangeText={setLetter}
                maxLength={1}
                style={{borderWidth: 1, borderColor: "black"}}
            />

            <Text>Select Type:</Text>
            <Picker
                selectedValue={letterType}
                onValueChange={(value) => setLetterType(value)}
            >
                <Picker.Item label="Vowels" value="Vowels" />
                <Picker.Item label="Consonants" value="Consonants" />

            </Picker>

            <Button title="Submit"
                    onPress={() => {
                        let item = {key: letter};
                        let indexnum = 1;
                        if (letterType === "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate("Home");
                    }
            }
            />
        </View>
    );
};

export default Add;