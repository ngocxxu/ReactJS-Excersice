import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClick = () => {
        alert('Sĩ đẹp trai');
    }

    showMessage = (mess) => {
        alert(`hello ${mess}`)
    }

    render() {
        let name = 'Bảo';

        return (
            <div className="container">
                handle event

                <br />
                <button id="btn" onClick={(event) => {
                    // event.target.style.backgroundColor = 'red';
                    // alert(`${name} đẹp trai`);
                    this.showMessage('Sĩ');

                }} >Click me</button>
            </div>
        )
    }
}
