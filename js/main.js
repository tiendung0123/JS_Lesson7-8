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