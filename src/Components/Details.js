import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Details extends React.Component {
    render() {
        return (
            <div className="card card4">
                <div className="detail1">
                    <h2>hey there</h2>
                    <img src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" />
                </div>
                    <p className="detail2">Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.
                    </p>
            </div>
        )
    }
}

export default Details;