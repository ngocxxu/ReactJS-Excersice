import React from 'react'

//Cú pháp tạo function component : rfc 

//Tạo ra 1 thẻ <FunctionComponent />
export default function FunctionComponent() {


    //Lệnh return chứa giao diện của thẻ. Lưu ý giao diện của thẻ phải được bao phủ bởi 1 thẻ duy nhất thường là thẻ div
    return (
        <section className="p-2 bg-dark m-2 text-white">
            <div className="text-white display-4"> Title </div>
            <div>
                content  content  content  content  content  content  content
            </div>
        </section>

    )
}
