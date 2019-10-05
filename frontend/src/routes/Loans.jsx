import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment'

class Loans extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        fetch('/react-interview/getLoanData')
            .then(res => {
                return res.json()
            })
            .then(loans => {
                this.setState({
                    loans: loans,
                })
            });
    }

    render() {
        const data = this.state.loans

        const columns = [{
            Header: 'Loan ID',
            accessor: 'Loan_ID',
        }, {
            Header: 'Gender',
            accessor: 'Gender'
        }, {
            Header: 'Age',
            accessor: 'age'
        }, {
            Header: 'Education',
            accessor: 'education'
        }, {
            Header: 'Principal',
            accessor: 'Principal'
        }, {
            Header: 'Loan Status',
            accessor: 'loan_status',
        }, {
            Header: 'Terms',
            accessor: 'terms'
        }, {
            Header: 'Effective Date',
            accessor: 'effective_date'
        }, {
            Header: 'Due Date',
            accessor: 'due_date'
        }, {
            Header: 'Paid Off Time',
            accessor: 'paid_off_time'
        }, {
            Header: 'Past Due Days',
            accessor: 'past_due_days'
        }]

        return <ReactTable
            data={data}
            columns={columns}
        />
    }

}

export default Loans;