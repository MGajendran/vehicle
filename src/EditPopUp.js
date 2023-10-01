import { useState, useEffect } from "react";
import './css/App.css'
import EquipmentsData from "./data/EquipmentsData";


function EditPopUp ( obj, onSubmit){

const [isOpen, setIsOpen] = useState(false);
const [selectedItems, setSelectedItems] = useState([]);

useEffect(() => {
    togglePopup();
}, "");



  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(obj.id, selectedItems);
  };
    
  

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };



  const handleCheckboxChange = (event) => {
    const itemId = parseInt(event.target.value);
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Equipment List</h2>
            <ul>
                {EquipmentsData.map((equipment) => (
                    <li key={equipment.id}>
                        <label>
                        <input
                            type="checkbox"
                            value={equipment.id}
                            checked={selectedItems.includes(equipment.id)}
                            onChange={handleCheckboxChange}
                        />
                        {equipment.name}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <button className = 'close-button' onSubmit={handleSubmit}>Save</button>
                <button className = 'close-button' onClick={togglePopup}>Close</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default EditPopUp;