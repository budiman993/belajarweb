import React, { Component } from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state = {
			judul: 'Contoh Judul',
			contohPerubahan: 'Ini Contoh Perubahan dari State',
			valueFirstName: '',
			valueLastName: '',
			valueAddress: '',
			valuePostalCode: ''
		}
		this.ubahState = this.ubahState.bind(this)
		// this.ubahState2 = this.ubahState2.bind(this)
		// this.ubahState3 = this.ubahState3.bind(this)
		// this.ubahState4 = this.ubahState4.bind(this)
	}

	ubahState(namaValue, e){
		e.preventDefault()


		// perubahan Secara Reguler
		// this.setState({[namaValue]: e.target.value})
	
		// perubahan Secara Asynchronous
		var tampungData = e.target.value
		this.setState(function(state, props){
			return {
				[namaValue] : tampungData
			}
		})

// Perubahan State Secara Reguler
		// this.setState({judul: "Merubah Judul Secara Reguler"})

// Perubahan State Secara Asynchronous ditulis dengan cara arrow function
		// this.setState((state, props) =>({
		// 	judul: state.contohPerubahan
		// }));

// Perubahan State Secara Asynchronous ditulis dengan cara arrow function
		// this.setState(function(state, props) {
		// 	return{
		// 	judul: 'Merubah Judul Asynchronous Secara Reguler Function'	
		// 	}
		// });



	}

// ubahState2(e){
// 	e.preventDefault()
// 		this.setState({valueInput2: e.target.value})
// }
// ubahState3(e){
// 	e.preventDefault()
// 		this.setState({valueInput3: e.target.value})
// }
// ubahState4(e){
// 	e.preventDefault()
// 		this.setState({valueInput4: e.target.value})
// }


	render(){
		return(
			<div>


			<h5>First Name</h5>
			<p>{this.state.valueFirstName}</p>
			<input value={this.state.valueFirstName} onChange={(e)=>this.ubahState("valueFirstName", e)}/>
			<h5>=======================</h5>


			<h5>Last Name</h5>
			<p>{this.state.valueLastName}</p>
			<input value={this.state.valueLastName} onChange={(e)=>this.ubahState("valueLastName", e)}/>
			<h5>=======================</h5>


			<h5>Addres</h5>
			<p>{this.state.valueAddress}</p>
			<input value={this.state.valueAddress} onChange={(e)=>this.ubahState("valueAddress", e)} />
			<h5>=======================</h5>


			<h5>Postal Code</h5>
			<p>{this.state.valuePostalCode}</p>
			<input value={this.state.valuePostalCode} onChange={(e)=>this.ubahState("valuePostalCode", e)}/>
			<h5>=======================</h5>

			</div>
			)
		}
	}

	export default Registrasi;