import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
	const [text, setText] = useState("");

	const changeHandler = (val) => {
		setText(val);
	}

	return (
		<View>
			<TextInput
				style={styles.textInput}
				placeholder="Add new to do list"
				onChangeText={changeHandler} />
			<Button onPress={() => submitHandler(text)} title="Add to list" color="coral" />
		</View>
	);
}

const styles = StyleSheet.create({
	textInput: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	}
});