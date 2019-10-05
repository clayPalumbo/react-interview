import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment'

class Earthquakes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        fetch('/react-interview/getEarthQuakes')
            .then(res => {
                return res.json()
            })
            .then(locations => {
                this.setState({
                    quakes: locations,
                })
            });
    }

    render() {
        const data = this.state.quakes

        const columns = [{
            Header: 'Richter',
            accessor: 'richter',
        }, {
            Header: 'Country',
            accessor: 'country'
        }, {
            Header: 'City',
            accessor: 'city'
        }, {
            Header: 'Date',
            accessor: 'date',
            Cell: props => <span>{moment(props.value).format("MMM Do YY")}</span> 
        }, {
            Header: 'Time',
            accessor: 'time'
        }, {
            Header: 'Area',
            accessor: 'area'
        }, {
            Header: 'Direction',
            accessor: 'direction',
        }, {
            Header: 'Depth',
            accessor: 'depth'
        }, {
            Header: 'Distance (km)',
            accessor: 'dist'
        }, {
            Header: 'Latitude',
            accessor: 'lat'
        }, {
            Header: 'Longitude',
            accessor: 'mb'
        }, {
            Header: 'MS',
            accessor: 'ms'
        }, {
            Header: 'MB',
            accessor: 'mb'
        }, {
            Header: 'XM',
            accessor: 'xm'
        }, {
            Header: 'MD',
            accessor: 'md',
        }, {
            Header: 'MW',
            accessor: 'mw',
        }]

        return <ReactTable
            data={data}
            columns={columns}
        />
    }

}

export default Earthquakes;