{
    var btnInSao = document.getElementById("btnInSao");
    btnInSao.onclick = function () {
        var nhapSo = Number(document.getElementById("nhapSo").value) ;
        var ketQua = '';
    
        var soSao = 1;
        while (soSao <= nhapSo) {
            ketQua = ketQua + " *";
            soSao ++ ;
        }
    
        document.getElementById("result").innerHTML = ketQua;
    }
    
    /*
    soSao = 1 => soSao <= 5
                => ketQua = "" + " *" = " *"
                    soSao = 2
    soSao = 2 => soSao <= 5
                => ketQua = " *" + " *" = " * *"
                    soSao = 3
    soSao = 3 => soSao <= 5
                => ketQua = " * *" + " *" = " * * *"
                    soSao = 4
    soSao = 4 => soSao <= 5
                => ketQua = " * * *" + " *" = " * * * *"
                    soSao = 5
    soSao = 5 => soSao <= 5
                => ketQua = " * * * *" + " *" = " * * * * *"
                    soSao = 6
    
    In ketQua = " * * * * *" ra ngoài màn hình
    */
    
    var arrName = ['Dũng', 'Linh', 'An', 'Khang', 'Kai'];
    
    console.log(arrName);
    // Hiển thị đủ
    
    console.log(arrName[1]);
    // Hiển thị giá trị luôn
}

// {
//     var listNumber = [] ;

//     document.getElementById("addNumber").onclick = function () {
       
//         var number = document.getElementById("inputNumber").value * 1;
    
//         listNumber.push(number);
//         document.getElementById("listNumber").innerHTML = "List number : " + listNumber;
//     }
    
//     document.getElementById("tongSoDuong").onclick = function () {
//         tongSoDuong = 0;
//         number = listNumber[0];
//         for (i = 0; i <= listNumber.length; i++) {
//             if (number > 0) {
//                 tongSoDuong += number ;
//             }
//         }
//         document.getElementById("inTongSoDuong").innerHTML = "Tổng các số dương : " + tongSoDuong;
//     }
// }

var listNumber = [];

function showlistNumber(data) {
    var content = '';
    for (var i = 0; i < data.length; i++) {
        const number = data[i];
        content += number + " ";
    }
    return content;
}

function NhapThemSo() {
    const inputNumber = document.getElementById("inputNumber").value * 1;

    listNumber.push(inputNumber);

    const content = showlistNumber(listNumber);

    document.getElementById("showlistNumber").innerHTML = "List Number : " + content;
}

/* Tính tổng các số dương
input
- list các phần tử trong mảng [listNumber]

process
- duyệt các phần tử trong mảng [listNumber]
    + dùng function showlistNumber
- Check điều kiện từng phần tử là số dương (>0)
- Cộng dồn các phần tử là số dương
- In kết quả ra màn hình (inner HTML)

output
- Tổng các số dương trong mảng [listNumber]

*/
function TongSoDuong() {
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        const number = listNumber[i];
        if (number > 0) {
            tong += number;
        }
    }
    document.getElementById("inTongSoDuong").innerHTML = "Tổng các số dương là : " + tong;
} 

function soDuongTrongMang() {
    var count = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number > 0)  {
            count ++;
        }
    }
    document.getElementById("soDuong").innerHTML = "Có : " + count + " số dương trong mảng";
} 

/* 3. Tìm số nhỏ nhất trong mảng

*/
function soNhoNhat () {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number <= min) {
            min = number;
        }
    }
    document.getElementById("soNhoNhat").innerHTML = " số nhỏ nhất trong mảng là : " + min ;
}

/* 4. Tìm số dương nhở nhất trong mảng

*/
function soDuongNhoNhat () {
    var minPlus = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number > 0 && number <= minPlus) {
            minPlus = number;
        } else {
            alert("không có số dương trong mảng");
            break;
        }
    }
    document.getElementById("soDuongNhoNhat").innerHTML = " số dương nhỏ nhất trong mảng là : " + minPlus ;
}

/* 5. Tìm số chẵn cuối cùng trong mảng. 
Nếu mảng không có số chẵn, thì trả về -1
- gán giá trị ban đầu vào biến soChan
- duyệt mảng (có hàm duyệt mảng)
- xác định số chẵn (%2=0)
- gán giá trị vào biên soChan
- Nếu không có số chẵn, trả về giá trị là -1
*/
function soChanCuoiCung () {
    var soChan = -1;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number % 2 === 0) {
            soChan = number;
        } 
    }
    document.getElementById("soChanCuoiCung").innerHTML = " số chẵn cuối cùng trong mảng là : " + soChan ;
}

/* 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
(cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
- Nhập mảng như bình thường
- Tạo button : ví dụ ; Đổi chỗ số thứ 2 cho số thứ 4
    ỏ đổi chỗ thứ 3 cho số thứ 5
    => tạo 2 ô input
- Thêm 1 button để thực hiện action đổi vị trí
*/
// var soThuNhat = document.getElementById("soThuNhat").value * 1;
// var soThuHai = document.getElementById("soThuNhat").value * 1;
// function doiViTri () {
    
// }

/* 7. Sắp xếp mảng, theo thứ tự tăng dần

*/

/* 8. Tìm số nguyên tố đầu tiên trong mảng.
Nếu mảng không có số nguyên tố, thì trả về -1

*/

/* 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên.

*/

/* 10. So sánh số lượng số dương và số âm, xem số nào nhiều hơn

*/
