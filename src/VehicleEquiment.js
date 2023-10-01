import EquipmentsData from "./data/EquipmentsData";

function VehicleEquiment ({equipments}) {

    var result = equipments.map(eqId => {
        const equipmentObj =  EquipmentsData.find((equipment)=> equipment.id == eqId);
        return equipmentObj.name;
    })
    
    return (result.length > 0 && "Equipments : " + result.join(', '));
}

export default VehicleEquiment;
