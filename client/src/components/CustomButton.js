import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';

function CustomButton(){

      function onClick(){
          console.log("clicked")
      }

    return(
        <div className="outer-button-div">
        <div className="mapboxgl-ctrl mapboxgl-ctrl-group">
          <button
            className={`mapboxgl-ctrl-icon`}
            type="button"
            onClick={onClick}
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