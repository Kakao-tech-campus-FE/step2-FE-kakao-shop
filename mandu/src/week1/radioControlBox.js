function RadioControlBox() {

    return (
        <div className="radio-control-box">
            <h1>Radio!</h1>
            <>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey"
                           defaultChecked/>
                    <label htmlFor="huey">Huey</label>
                </div>
                <div>
                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                    <label htmlFor="dewey">Dewey</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Louie</label>
                </div>
            </>
            {/*<Radio/>*/}
        </div>

    );
}

export default RadioControlBox;