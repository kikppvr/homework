function homework() {
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const result = arr.filter((x) => x % 2 === 0).map((y) => y * 1000);

   console.log(result);
   const resultElement = document.getElementById("result");
   console.log(resultElement); // ตรวจสอบค่าของ resultElement ใน console

   if (resultElement !== null) {
      // ตรวจสอบว่า resultElement ไม่เป็น null
      resultElement.innerText = result;
   } else {
      console.log("Element not found"); // แสดงข้อความเมื่อ element ไม่พบ
   }
}

homework();
