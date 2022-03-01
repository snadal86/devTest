import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getExpedients } from "../../actions/expedient";
import { Spinner } from "react-bootstrap";
import moment from "moment";

const Expedients = ({
	expedients: { expedients, loading, error },
	getExpedients,
}) => {
	useEffect(() => {
		getExpedients();
	}, [getExpedients]);

  console.log(expedients)
	return (
		<Fragment>
			{loading ? (
				<Spinner animation='border' variant='danger' className='spinner' />
			) : (
				<Fragment>
          <h1 className='large text-primary'>Expedientes</h1>
          <p className='lead'>
            <i className='fas fa-user' />
            Lista de expedientes
          </p>
          <div className='dash-buttons'>
            <Link to='/expedient/create' className='btn btn-primary'>
              <i className='fas fa-plus' />
              Nuevo expediente
            </Link>
          </div>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>hearing_date</th>
                  <th>resume</th>
                  <th>dificulty</th>
                  <th>judicial_party</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>
                {!!expedients && expedients.map((expedient) => (
                  <tr key={expedient.id}>
                    <td><Link to={`/expedient/${expedient.id}`}>{expedient.id}</Link></td>
                    <td>{moment(expedient.hearing_date).format('DD-MM-YYYY')}</td>
                    <td>{expedient.resume}</td>
                    <td>{expedient.dificulty}</td>
                    <td>{expedient.judicial_party}</td>
                    <td>{expedient.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
			)}
		</Fragment>
	);
};

Expedients.propTypes = {
	expedients: PropTypes.array.isRequired,
	getExpedients: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	expedients: state.expedient.expedients,
});
export default connect(mapStateToProps, { getExpedients })(Expedients);
