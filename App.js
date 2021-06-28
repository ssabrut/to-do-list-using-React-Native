import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
	const [toDo, setToDo] = useState([
		{ text: "Buy a coffee", key: "1" },
		{ text: "Learn React Native", key: "2" },
		{ text: "Sleep", key: "3" },
	]);

	const pressHandler = (key) => {
		setToDo((prevToDo) => {
			return prevToDo.filter(toDo => toDo.key != key);
		});
	}

	const submitHandler = (text) => {
		setToDo((prevToDo) => {
			return [
				...prevToDo,
				{ text: text, key: Math.random().toString }
			]
		});
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<AddToDo submitHandler={submitHandler} />
				<View style={styles.list}>
					<FlatList
						data={toDo}
						renderItem={({ item }) => (
							<ToDoItem item={item} pressHandler={pressHandler} />
						)} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	}
});
