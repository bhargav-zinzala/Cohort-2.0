const users = [
  {
    "image": "https://images.unsplash.com/photo-1534294668821-28a3054f4256?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Bhargav Zinzala",
    "profession": "Full Stack Web Developer (Student)",
    "description": "Passionate full stack web development student with strong knowledge of HTML, CSS, JavaScript, and DOM. Currently learning advanced Java."
  },
  {
    "image": "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Aarav Patel",
    "profession": "Frontend Developer",
    "description": "Creative frontend developer skilled in building responsive and user-friendly web interfaces using HTML, CSS, and JavaScript."
  },
  {
    "image": "https://plus.unsplash.com/premium_photo-1769269916795-677d4cd9f40b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Riya Shah",
    "profession": "Backend Developer (Java)",
    "description": "Backend developer focused on Java, JDBC, and database integration with an interest in building secure and scalable applications."
  },
  {
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Kunal Mehta",
    "profession": "UI/UX Designer",
    "description": "UI/UX designer passionate about creating clean, modern, and user-centered designs for web and mobile applications."
  },
  {
    "image": "https://images.unsplash.com/photo-1769103483646-d00e91b4b674?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Neha Desai",
    "profession": "Software Engineering Student",
    "description": "Computer engineering student exploring full stack development and actively working on academic and personal projects."
  }
];

var sum = '';

users.forEach(function(elem){
    sum += `<div class="card">
            <img src=${elem.image} alt="">
            <h2>${elem.name}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`
});

var main = document.querySelector('main');
main.innerHTML = sum;