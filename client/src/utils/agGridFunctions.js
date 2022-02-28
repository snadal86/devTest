import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

export const dateFormatter = (params) => moment(params.value).format("YYYY-MM-DD");

export const dateFilter = (filter, value) => {
	if (!value) return 0
	if (moment(filter).startOf('day').isBefore(moment(value).startOf('day'))) return 1
	if (moment(filter).startOf('day').isAfter(moment(value).startOf('day'))) return -1
	if (moment(filter).startOf('day').isSame(moment(value).startOf('day'))) return 0
};

export const LinkComponent = (params) => (	<Link to={"/pautasControl/detalle/" + params.value}> {params.value} </Link> )
export const BooleanParam = (params) => ( <Fragment> { params.value ? (<span> Sí </span>) : (	<span> No </span>)} </Fragment>)
export const PedidoCriticoCellStyle = (params) => {if(params.value==='Sí' || !!params.value) return {backgroundColor: 'lightcoral'}}