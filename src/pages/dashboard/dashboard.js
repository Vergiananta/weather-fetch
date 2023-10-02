import { Component, Fragment, useEffect, useState } from "react";
import { findByCity, findForecastWeather } from "../../action/weather";
import { connect } from 'react-redux';
import Weather from "../weather/Weather";
import './dashboard.css'
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";

// 
function Dashboard({ isLoading, findByCity, findForecastWeather, forecast, weathers }) {
    console.log(weathers);

    const [query, setQuery] = useState({
        city: ''
    })

    const [weather, setWeather] = useState(null)

    const [coordinate, setCoordinate] = useState(null)

    const getByCity = async (query) => {
        const data = await fetch(`${process.env.REACT_APP_API_BASE_URL}/weather?q=${query}&appid=e1b52c6e9dd549dcd244bcbeef7c740a&units=metric`).then((data)=> data.json())
        setWeather(data)
    }

    useEffect(() => {
    }, [weathers])

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setQuery({ ...query, [name]: value })

    }

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault()
            // findByCity(query)
            getByCity(query.city)
            setQuery({ ...query, city: '' })
        }
    }


    return (
        <Fragment>
            <Col className="mt-4" sm="12" md={{ size: 6, offset: 3 }}>
                <Form >
                    <FormGroup >
                        <Input type="text"
                            name="city"
                            id="city"
                            value={query?.city}
                            placeholder="Cari city.."
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                        />
                    </FormGroup>
                </Form>
            </Col>
            <Col className="mt-5 mx-auto" sm="12" md={{ size: 6, offset: 3 }}>
                <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                    <p style={{ fontFamily: "Century Gothic", fontSize: '2vw' }}>{weather?.name}</p>
                    {
                        weather?.weather?.map((cloudy, idx) => {
                            if (idx === 0) {
                                return <div key={idx}><img src={`https://openweathermap.org/img/wn/${cloudy?.icon}@2x.png`} /></div>
                            }
                        })
                    }
                    <Row >
                        <Col>
                        {
                            weather == null ? <Col></Col> : <p style={{ fontFamily: "Century Gothic", fontSize: '5vw', marginLeft: '50px' }}>{weather?.main?.temp}&deg;c</p>
                        }
                        </Col>
                    </Row>
                </Col>

            </Col>


        </Fragment>

    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.getWeatherByCity.loading,
        weathers: state.getWeatherByCity.data || [],
        forecast: state.getWeatherForecast.data || []
    }
}

const mapDispatchToProps = { findByCity, findForecastWeather }


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// {
//     base : '',
//     clouds : {
//         all : 0
//     },
//     cod: 0,
//     coord: {
//         lon : 0,
//         lat : 0,
//     },
//     dt: 0,
//     id: 0,
//     main : {
//         feels_like: 0,
//         humidity: 0,
//         pressure: 0,
//         temp : 0,
//         temp_max : 0,
//         temp_min : 0,
//     },
//     name : '',
//     sys : {
//         country: '',
//         id: 0,
//         sunrise: 0,
//         sunset: 0,
//         type: 0,
//     },
//     timezone : 0,
//     visibility: 0,
//     weather : [],
//     wind : {
//         deg: 0,
//         speed: 0,
//     }
// }