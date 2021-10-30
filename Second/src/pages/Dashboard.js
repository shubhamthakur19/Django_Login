import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const Dashboard = ({
   
    first_name_global,
    last_name_global,
    phone_global,
    city_global
}) => {
    const [ setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        city: ''
    });

    

    useEffect(() => {
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            phone: phone_global,
            city: city_global
        });
    }, [first_name_global]);

    

    

    return (
        <div className='container'>
            <h1 className='mt-3'>Welcome to your User Dashboard</h1>
          
        </div>
    )
};

const mapStateToProps = state => ({
    first_name_global: state.profile.first_name,
    last_name_global: state.profile.last_name,
    phone_global: state.profile.phone,
    city_global: state.profile.city,
});

export default connect(mapStateToProps, { 
   
 })(Dashboard);