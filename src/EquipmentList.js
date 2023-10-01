
function EquipmentList ({listOfEquipments}){
    return (
        
        <div className='parent-div'>
            {listOfEquipments.map((equipment) => (
                <div className='card-view'>
                    <p key={equipment.id}>{equipment.name}</p>
                </div>
            ))}
        </div>
        
    );
}

export default EquipmentList;