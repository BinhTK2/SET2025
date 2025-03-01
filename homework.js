//Homework:
// Bai 1: Difference(s) between == and ===?
console.log("== là chuyển các giá trị thành cùng một kiểu dữ liệu rồi mới so sánh. === thì không thực hiện bất kỳ chuyển đổi kiểu nào và chỉ trả về true nếu cả giá trị và kiểu đều giống hệt nhau đối với hai biến đang được so sánh.");
// Bai 2: Use variables and operators to
// 2.A: Calculate BMI (Body Mass Index)
let height = 1.75;
let weight = 65;
let bmi = weight / (height * height);
console.log("BMI: " + bmi)
// 2.B: Calculate Simple Interest (principal * rate * time)
let principal = 10000;
let rate = 0.05;
let time = 2;
let interest = principal * rate * time;
console.log("Interest = " + interest);
// 2.C: Convert Currency (USD to local currency)
let usd = 100;
let exchangeRate = 23000;
let vnd = usd * exchangeRate;
console.log("USD: " + usd + "usd","=> VND: " + vnd + "vnd");
// 2.D: Calculate Time (hours:minutes:seconds)
//Calculate Time (hours:minutes:seconds)
let now = new Date();
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds =  now.getSeconds().toString().padStart(2, '0');
let time1 = `${hours}:${minutes}:${seconds}`;
console.log("Time1: ", now);

