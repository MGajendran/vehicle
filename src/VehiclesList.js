import Vehicle from "./Vehicle";
import "./css/App.css";

function VehiclesList ({vehicles, onEdit}) {
    return (
        <div>
            <div className='parent-div'>
                {vehicles.map((vehicle, index) => (
                    <Vehicle onEdit={onEdit} key={index} vehicle={vehicle} />
                ))}
            </div>
        </div>
    )
}

export default VehiclesList;