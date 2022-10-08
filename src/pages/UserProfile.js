import React  from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar';

const UserProfile = ({ userDetails }) => {
    return (
        <>
            <NavBar />
            {userDetails && (
                <div>
                    <img
                        src={userDetails.userDetails.picture}
                        alt={userDetails.userDetails.name}
                    />
                    <h2>{userDetails.userDetails.name}</h2>
                    <p>{userDetails.userDetails.email}</p>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    // isAuthenticated  value is get from here
    userDetails: state.userDetails,
});

export default connect(mapStateToProps)(UserProfile);
