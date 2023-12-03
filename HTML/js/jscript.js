// JavaScript functions updateFileName()
function validateInfo() {
    var description = $('#description').val().trim();
    var phoneNumber = $('#phoneNumber').val().trim();
    var englishTextRegex = /^[A-Za-z .,-]*$/;
    var phoneRegex = /^01[0-9][0-9]{4}[0-9]{4}$/;

    if (!englishTextRegex.test(description)) {
        $('#description-error-message').text('설명은 영어(A-Z, a-z)로 작성해야 합니다. 다시 입력해 주세요.').show().delay(3000).fadeOut();
        return false;
    }

    if (!phoneRegex.test(phoneNumber)) {
        $('#error-message').text('전화번호는 11자리여야 하며 01x-xxxx-xxxx로 시작해야 합니다. 다시 입력해 주세요.').show().delay(3000).fadeOut();
        return false;
    }

    function updateFileName() {
        var fileName = $('#uploadfile')[0].files[0].name;
        $('#file-display').val(fileName);
    }

    $(document).ready(function () {
        $('#button-addon2').click(validateInfo);
    });


    // Nếu bạn muốn gửi dữ liệu sau khi xác nhận, bạn có thể thêm đoạn mã gọi hàm ở đây.
    // Ví dụ: sendConfirmationRequest(description, phoneNumber);
}


function sendConfirmationRequest(description, phoneNumber) {
    // Địa chỉ URL của endpoint trên server của bạn
    const url = 'https://yourserver.com/send-confirmation';

    // Tạo đối tượng data chứa thông tin để gửi
    const data = {description: description, phoneNumber: phoneNumber};

    // Sử dụng Fetch API để gửi yêu cầu POST
    fetch(url, {
        method: 'POST', // Phương thức yêu cầu là POST
        headers: {
            'Content-Type': 'application/json', // Thiết lập header cho content type
        },
        body: JSON.stringify(data), // Chuyển đổi dữ liệu thành chuỗi JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse kết quả trả về dạng JSON
        })
        .then(data => {
            console.log('Success:', data);
            // Xử lý dữ liệu nhận được, ví dụ: thông báo cho người dùng
        })
        .catch((error) => {
            console.error('Error:', error);
            // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi cho người dùng
        });
}

function onlyNumber() {
    if ((event.keyCode > 48 && event.keyCode < 57)
        || event.keyCode == 8
        || event.keyCode == 37 || event.keyCode == 39
        || event.keyCode == 46
        || event.keyCode == 39) {
    } else {
        event.returnValue = false;
    }
}

$(document).ready(function () {
    // page 이동
    $("#page_mynft").on("click", function () {
        window.location.href = "./mynft.html";
    });

    // 버튼액션
    $("#btn_mynft_delete").on("click", function () {
        alert("delete");
    });
});
