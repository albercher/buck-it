import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';

function CustomButton({setAddPin, addPin}){
  function handleAddPin(){
    setAddPin(!addPin)
  }

    return(
        <div className="outer-button-div">
        <div className="mapboxgl-ctrl mapboxgl-ctrl-group">
          <button
            className={`mapboxgl-ctrl-icon`}
            type="button"
            onClick={handleAddPin}
          >
            <span className="custom-icon">
                <AddLocationRoundedIcon />
            </span>
          </button>
        </div>
      </div>
    )
}

export default CustomButton