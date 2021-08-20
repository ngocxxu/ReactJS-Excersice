import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        let {banChon,soBanThang,soBanChoi} = this.props.BaiTapGameXucXacReducer;
        return (
            <div className="container text-center">
                <div className="display-4">Bạn cược: 
                    <span className="text-warning"> {banChon ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className="display-4">Số bàn thắng: 
                    <span className="text-success"> {soBanThang}</span>
                </div>
                <div className="display-4">Tổng số bàn chơi: 
                    <span className="text-warning"> {soBanChoi}</span>
                </div>
                <button onClick={() =>{
                    const action = {
                        type: 'PLAY_GAME'

                    }
                    this.props.dispatch(action);
                }} className="btn bg-success mt-4">
                    <div className="display-4">Play Game</div>
                </button>
                <br></br>
                <button onClick={() =>{
                    const action = {
                        type: 'RESET_GAME'

                    }
                    this.props.dispatch(action);
                }} className="btn bg-danger mt-4">
                    <div className="display-5">Reset</div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        BaiTapGameXucXacReducer: rootReducer.BaiTapGameXucXacReducer
        // banChon: rootReducer.BaiTapGameXucXacReducer.banChon,
        // soBanThang: rootReducer.BaiTapGameXucXacReducer.soBanThang,
        // soBanChoi: rootReducer.BaiTapGameXucXacReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)