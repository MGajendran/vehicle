import { useState } from 'react';
import './css/App.css'
import VehicleEquiment from './VehicleEquiment';
import EditPopUp from './EditPopUp';

const Vehicle  = ({vehicle, onEdit}) => {

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
      };
    
      const handleSubmit = (id, equipments) => {
        setShowEdit(false);
        onEdit(id, equipments);
      };

      var editPopUp = ""
      if (showEdit) {
        console.log("This is here");
        editPopUp = <EditPopUp onSubmit={handleSubmit} vehicle = {vehicle} />;
      }

    return (

        <div className='card-view'>
            <h2 id = {vehicle.id}> Name : {(vehicle.name) ? vehicle.name : "Unknown Vehicle Name"}</h2>
            <p> FuelType : {vehicle.fuelType}</p>
            {vehicle.equipments && <VehicleEquiment equipments = {vehicle.equipments}/> }

            <div>{editPopUp}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}> Edit </button>
            </div>
        </div>
    )
}

export default Vehicle;