import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSubstitutes } from "../../actions/substitute";
import { Spinner } from "react-bootstrap";

const Substitutes = ({
	substitutes: { substitutes, loading, error },
	getSubstitutes,
}) => {
	useEffect(() => {
		getSubstitutes();
	}, [getSubstitutes]);


	return (
		<Fragment>
			{loading ? (
				<Spinner animation='border' variant='danger' className='spinner' />
			) : (
				<Fragment>
          <h1 className='large text-primary'>Substitutes </h1>
          <p className='lead'>
            <i className='fas fa-user' />
            List of Substitutes
          </p>
          <div className='dash-buttons'>
            <Link to='/substitute/create' className='btn btn-primary'>
              <i className='fas fa-plus' />
              New Substitute
            </Link>
          </div>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>last_name</th>
                  <th>phone</th>
                  <th>image</th>
                  <th>judicial_party</th>
                </tr>
              </thead>
              <tbody>
                {!!substitutes && substitutes.map((substitute) => (
                  <tr key={substitute.id}>
                    <td><Link to={`/substitute/${substitute.id}`}>{substitute.id}</Link></td>
                    <td>{substitute.name}</td>
                    <td>{substitute.last_name}</td>
                    <td>{substitute.phone}</td>
                    <td><img src={substitute.image} alt={substitute.name} ></img></td>
                    <td>{substitute.judicial_party.toString()}</td>
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

Substitutes.propTypes = {
	substitutes: PropTypes.array.isRequired,
	getSubstitutes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	substitutes: state.substitute.substitutes,
});
export default connect(mapStateToProps, { getSubstitutes })(Substitutes);
