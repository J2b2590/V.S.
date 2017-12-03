import React, {Component} from 'react';
import './Park.css';
import InfoWindow from '../InfoWindow/InfoWindow.js';
import ReactDOM from 'react-dom';
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = "AIzaSyBjfQXkFa45WKSDS8lwZbWg2--2Zh2oNVU"



class Park extends Component{
	

	 

	


	componentDidMount(){
		// console.log(this);
		GoogleMapsLoader.load((google)=>{
			const mapCanvas = this.refs.Map;

			const mapOptions = {
				center: {lat: 41.8781, lng: -87.6298},
				zoom: 11,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				
			}
			
			const map = new google.maps.Map(mapCanvas, mapOptions);
			// google.maps.event.addListener(map, 'idle', () =>{
				// this.fetchLocations(map).then((locations)=>{
					const parksObj = {};
					const parksArr = [];
					const image = { 
						url: './images/Tennis.png',
							}


					

					const parkPlay = this.props.parks.map((park, i)=>{
						// console.log(park.facility_n, 'data')
						if(park.facility_n === "TENNIS COURT"){
							// console.log(parksObj[park.park])
							const parkObj = {};

							// parksObj[park.park].facility_n === "TENNIS COURT" = true;
							parksArr.push[parkObj]
							// console.log(parksArr)
							const y = parseFloat(park.y_coord);
							const x = parseFloat(park.x_coord);
							
							
							
							const marker = new google.maps.Marker({
								position: {lat:y, lng: x},
								map: map,
								animation: google.maps.Animation.DROP,
								icon: image,
							 

							})

							// console.log(park.park)	
							// const allInfo = this.props.parks
							const infoWindow = new google.maps.InfoWindow({
								content: '<div id="iw-container">' +
                    			'<div class="iw-title">'+ park.park +'</div>' +
                    			'<div class="iw-content">' +
                      			'<div class="iw-subTitle">BLAHALA</div>' +
                      		'<img src="http://www.atpworldtour.com/-/media/images/news/2017/04/01/00/56/federer-miami-2017-friday-sf-2.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      				 +
                      			'<div class="iw-subTitle">Contacts</div>' +
                     			'<p>Jeff<br><br>'+
                     			'<br>Phone. +867-5309<br>e-mail: @gmail<br>WWW.VS.Com</p>'+
                   				'</div>' +
                   				'<div class="iw-bottom-gradient"></div>' +
                  				'</div>' + "<div id='map-form-" + i+ "'>"
							})
							


							

    	
    						

    
							

							
    

							marker.addListener('click', ()=>{

								infoWindow.open(map, marker)

							    this.someFunc(i, park)
							})
						}
					})
				});

			}
   
  someFunc =(i, park) => {
    console.log(park)


    ReactDOM.render(<InfoWindow parks={this.props.parks}/>, document.getElementById('map-form-' + i))



  }


	
			
		
	



	render(){

		

		return(
			<div>
				<div id="map-canvas" ref="Map" className="App">

				</div>
				<InfoWindow parks={this.props.parks}/>
			</div>
			)
	}
}



export default Park;