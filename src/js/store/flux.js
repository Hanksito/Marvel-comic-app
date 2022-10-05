const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:{},
			series:{},
		},
		actions: {
			get_characters:async()=>{
				const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8df922590d9140fd72e93b652577d3c4&hash=43456862af48e8492a7dd548a1752f38')
				const data = await response.json()
				setStore({characters:data.data.results})
			},
			get_series:async()=>{
				const response = await fetch('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=8df922590d9140fd72e93b652577d3c4&hash=43456862af48e8492a7dd548a1752f38')
				const data = await response.json()
				setStore({series:data.data})
			}
		}
	};
};

export default getState;
