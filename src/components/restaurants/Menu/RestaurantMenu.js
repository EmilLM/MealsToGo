import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

const RestaurantMenu = () => {
	const [openBreakfast, setOpenBreakfast] = useState(false);
	const [openLunch, setOpenLunch] = useState(false);
	const [openDinner, setOpenDinner] = useState(false);
	const [openDrinks, setOpenDrinks] = useState(false);
	return (
		<ScrollView>
			<List.Accordion
				title='Breakfast'
				left={(props) => <List.Icon {...props} icon='bread-slice' />}
				expanded={openBreakfast}
				onPress={() => setOpenBreakfast(!openBreakfast)}
			>
				<List.Item title='First item' />
				<List.Item title='Second item' />
				<List.Item title='Third item' />
				<List.Item title='Fourth item' />
				<List.Item title='Fifth item' />
				<List.Item title='a item' />
				<List.Item title='b item' />
				<List.Item title='c item' />
				<List.Item title='d item' />
				<List.Item title='e item' />
			</List.Accordion>

			<List.Accordion
				title='Lunch'
				left={(props) => <List.Icon {...props} icon='food' />}
				expanded={openLunch}
				onPress={() => setOpenLunch(!openLunch)}
			>
				<List.Item title='First item' />
				<List.Item title='Second item' />
			</List.Accordion>

			<List.Accordion
				title='Dinner'
				left={(props) => <List.Icon {...props} icon='food-variant' />}
				expanded={openDinner}
				onPress={() => setOpenDinner(!openDinner)}
			>
				<List.Item title='First item' />
				<List.Item title='Second item' />
			</List.Accordion>

			<List.Accordion
				title='Drinks'
				left={(props) => <List.Icon {...props} icon='cup' />}
				expanded={openDrinks}
				onPress={() => setOpenDrinks(!openDrinks)}
			>
				<List.Item title='First item' />
				<List.Item title='Second item' />
			</List.Accordion>
		</ScrollView>
	);
};

export default RestaurantMenu;
