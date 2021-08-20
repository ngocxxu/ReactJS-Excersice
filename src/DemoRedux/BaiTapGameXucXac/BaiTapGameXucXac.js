import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './BaiTapGameXucXac.css'; //ảnh huog toàn bộ jer cả app


export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-warning text-center display-4">CỜ BẠC MÙA COVID</h3>
                <XucXac></XucXac>
                <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
