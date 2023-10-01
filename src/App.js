import { useEffect, useState } from "react";
import VehiclesList from "./VehiclesList";
import EquipmentList from "./EquipmentList";
import VehiclesData from './data/VehiclesData';
import EquipmentsData from './data/EquipmentsData';

function App () {

    const [vehicles, setVehicles] = useState([]);
    const [equipments , setEquipments] = useState([]);

    useEffect(() => {
        setVehicles(VehiclesData);
        setEquipments(EquipmentsData)
    }, []);

    const editVehicleById = (id, equipments) => {
        const updatedVehicles = vehicles.map((vehicle) => {
          if (vehicle.id === id) {
            return { ...vehicles, equipments };
          }
    
          return vehicle;
        });
    
        setVehicles(updatedVehicles);
      };
    
    return (
        <div>
            <div>
                <h2>Vehicles</h2>
                <VehiclesList onEdit={editVehicleById} vehicles = {vehicles}/>
            </div>
            <div>
                <h2>Equipments</h2>
                <EquipmentList listOfEquipments = {equipments} />
            </div>
        </div>
       
    )
}

export default App;