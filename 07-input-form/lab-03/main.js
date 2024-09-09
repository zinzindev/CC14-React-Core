// Gen UI
const DATA = [
	{
		id: 1,
		province: 'Bangkok',
		province_normalize: 'bangkok',
		districts: [
			{ id: 1, district: 'Patumwan' },
			{ id: 2, district: 'Sathon' },
			{ id: 3, district: 'Bangrak' },
		],
	},
	{
		id: 2,
		province: 'Nonthaburi',
		province_normalize: 'nonthaburi',
		districts: [
			{ id: 1, district: 'BangKrauy' },
			{ id: 2, district: 'Pakred' },
			{ id: 3, district: 'Bangyai' },
		],
	},
	{
		id: 3,
		province: 'Phathumthani',
		province_normalize: 'phathumthani',
		districts: [
			{ id: 1, district: 'Thanyaburi' },
			{ id: 2, district: 'Lumlukka' },
			{ id: 3, district: 'Klong-lung' },
		],
	},
];

// Parent
function App() {
	// logic
	const [selectedProvince, setSelectedProvince] = React.useState(DATA[0].province_normalize);
	// console.log(selectedProvince);
	const [districts, setDistricts] = React.useState(DATA[0].districts);
	// console.log(districts);
	const [selectedDistrict, setSelectedDistrict] = React.useState('');
	// console.log(selectedDistrict);

	const handleSelectProvince = (e) => {
		let province = e.target.value;
		console.log(province);
		setSelectedProvince(province);

		// เอา province ที่ user เลือก ไปหา province obj ใน DATA
		const selectedProv = DATA.find((provObj) => provObj.province_normalize === province);
		let districtArr = selectedProv.districts;
		// console.log(districtArr);
		setDistricts(districtArr);
	};

	const handleSelectDistrict = (e) => {
		console.log(e.target.value);
		setSelectedDistrict(e.target.value);
	};

	// Child
	// UI
	return (
		<div className='container'>
			<div>
				<label htmlFor='prov-name'>Province : </label>
				<select id='prov-name' onChange={handleSelectProvince} value={selectedProvince}>
					{DATA.map((provObj) => (
						<option key={provObj.id} value={provObj.province_normalize}>
							{provObj.province}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor='district-name'>District : </label>
				<select
					name=''
					id='district-name'
					onChange={handleSelectDistrict}
					value={selectedDistrict}
				>
					{districts.map((d) => (
						<option key={d.id} value={d.district.toLowerCase()}>
							{d.district}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
