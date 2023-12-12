

import '../App.css';

function Form(props) {
  return (
    <div className="form-container" >
    <form className="two-player-form"onSubmit={props.handleSubmitProps} >
      <div className="form-group">
        <label htmlFor="player1">Player One:</label>
        <input
          type="text"
          name="player1"
          value={props.player1Props}
          onChange={props.handlePlayerChangeProps}
         
        />
      </div>

      <div className="form-group">
        <label htmlFor="player2">Player Two:</label>
        <input
          type="text"
          name="player2"
          value={props.player2Props}
          onChange={props.handlePlayerChangeProps}
          
        />
      </div>

      <button type="submit">Submit</button>
    </form>
      
    </div>
  );
}

export default Form;
