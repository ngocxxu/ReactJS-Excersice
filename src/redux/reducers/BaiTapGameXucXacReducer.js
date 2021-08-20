
//liệt kê các state của ưng dụng btap game
const stateDetails = {
    soBanChoi: 0,
    soBanThang:0,
    banChon: true,
    mangXucXac: [
        {hinhAnh: './img/gameXucXac/1.png', diem: 1},
        {hinhAnh: './img/gameXucXac/1.png', diem: 1},
        {hinhAnh: './img/gameXucXac/1.png', diem: 1},
    ]
}

export const BaiTapGameXucXacReducer = (state=stateDetails, action) =>{
    switch(action.type){
        case 'DAT_CUOC':{
            state.banChon = action.banChon;
            return {...state};
        }
        case 'PLAY_GAME':{
            //tạo ra xuc sac ngẫu nhien tu random
            let mangXucXacNgauNhien = [];
            for(let i=0;i<3;i++) {
                //mỗi lần sẽ tạp ra 1 số ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random()*6) + 1;
                let xxnn = {hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien};
                mangXucXacNgauNhien.push(xxnn);
            }
            state.mangXucXac = mangXucXacNgauNhien;

            //xử lý thắng cuộc
            let tongDiem = mangXucXacNgauNhien.reduce((tong,xxnn,index)=>{
                return tong += xxnn.diem;

            },0)
            if((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)){
                state.soBanThang += 1;
            }
            state.soBanChoi+=1;
            return {...state};
        }
        case 'RESET_GAME':{
            state.mangXucXac = [
                {hinhAnh: './img/gameXucXac/1.png', diem: 1},
                {hinhAnh: './img/gameXucXac/1.png', diem: 1},
                {hinhAnh: './img/gameXucXac/1.png', diem: 1},
            ]
            state.soBanChoi = 0;
            state.soBanThang = 0;
            state.banChon = true;
            return {...state};
        }
        default: return state;
    }
}



