let employeePic = document.querySelector(".profile");
let employeeName = document.querySelector(".name");
let employeeWork = document.querySelector(".work");
let employeeReview = document.querySelector(".review");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");
let randomBtn = document.querySelector(".random-btn");

let emp = [
  {
    empImg: "/img/person1.jpg",
    empName: "Ram",
    empWork: "Devops",
    empReview: "Very good work culture",
  },
  {
    empImg: "/img/person2.jpg",
    empName: "Naina",
    empWork: "Design",
    empReview: "Many opportunities to Learn",
  },
  {
    empImg: "/img/person3.jpg",
    empName: "Emma",
    empWork: "Developer",
    empReview: "Flexible timings",
  },
  {
    empImg: "/img/person4.jpg",
    empName: "Disha",
    empWork: "Finance",
    empReview: "good work life balance",
  },
  {
    empImg: "/img/person5.jpg",
    empName: "Aishu",
    empWork: "Business",
    empReview:
      "kdhfjahkdsfh kh jhdskfhks hskdhfk kdhf h skjhdfk h hkh fhf khkdfh kahk hksdk hkh kfhwheoruwepripa  afjoweri j jdfj oweroj jweoir roiuewu sodij oi wut jjsdo jojowiet owut oaofl kjl ldj ljoi fowioiwjet djfljsldjfoiwej ojweoijr jeoij ojweo rjojwo jjoewr joje oijwojer oje ajslf jlaf ljoweij w ioewj jiwj owjeorij owje owijeoir jwoeij rjwiej orwje joj",
  },
];

let count = 0;

function showPerson(count) {
  const item = emp[count];
  employeePic.setAttribute("src", item.empImg);
  employeeName.textContent = item.empName;
  employeeWork.textContent = item.empWork;
  employeeReview.textContent = item.empReview;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(count);
  showPerson(count);
});

forward.addEventListener("click", () => {
  count++;
  if (count === emp.length) {
    count = 0;
  }
  console.log(count);
  showPerson(count);
});

back.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = emp.length - 1;
  }
  console.log(count);
  showPerson(count);
});

randomBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * emp.length);
  console.log(random);
  showPerson(random);
});
