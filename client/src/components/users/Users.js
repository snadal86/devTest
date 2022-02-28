/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users";
import { Spinner } from "react-bootstrap";

const Users = ({ getUsers, users: { users, loading, error } }) => { 

	useEffect(() => { getUsers()}, [getUsers]);
	/* useEffect(() => { 
		const sse = new EventSource("http://localhost:3009/events/stream");  
		console.log(!!sse, !!sse.onmessage)
  		sse.onmessage = e => getUsers();  
  		sse.onerror = () => { sse.close(); }
  		return () => {  sse.close();  };
	}, []); */

	return (
		<Suspense fallback={<Spinner />}>
			<Fragment>
				<div className='ag-theme-alpine'	style={{ height: 500, width: 500 }}>
					{loading ? 
						( <div>Loading...</div> ) : 
						(
							users.length ? ( 
							<div>
								{users.map(user => ( <div key={user._id}>{user.name}</div> ))}	
							</div>
							) : ( <div>No users</div> )
					)}
				</div>
			</Fragment>
		</Suspense>
		
	)
}

Users.propTypes = {
	getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	  users: state.users
})

export default connect(mapStateToProps, { getUsers })(Users);