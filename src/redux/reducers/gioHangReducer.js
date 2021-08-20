const gioHang = [
  {
    maSP: 1,
    tenSP: "Iphone",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "https://picsum.photos/200/200",
  },
];

export const gioHangReducer = (state = gioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      const spGH = { ...action.sanPhamClick, soLuong: 1 };
      let gioHangCapNhat = state;

      let spGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
      if (spGioHang) {
        spGioHang.soLuong += 1;
      } else {
        gioHangCapNhat.push(spGH);
      }

      //immutable: tính bất biến, obj/array phải trả về obj/array mới
      return [...gioHangCapNhat]; //trả về state mới (KDL state trả ve phải giong KDL state cũ)
    }
    case "XOA_GIO_HANG": {
      const gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSPClick);
      return [...gioHangCapNhat];
    }
    case 'TANG_GIAM_SO_LUONG':{
        let gioHangCapNhat=[...state];
        let spGH = gioHangCapNhat.find((sp) => sp.maSP ===action.maSPClick);
        if(spGH){
            spGH.soLuong += action.soLuong;
            if(spGH.soLuong<1){
                alert("tối thiểu = 1");
                spGH.soLuong -= action.soLuong;
            }
        }
        return [...gioHangCapNhat];
    }
    default:
      return state;
  }
};
