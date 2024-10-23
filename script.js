document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card, .review-card, .popular-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
// تحديث التاريخ الحالي في الهيدر
function updateDate() {
    const currentDateElement = document.getElementById('current-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('ar-EG', options);
    currentDateElement.textContent = currentDate;
}

updateDate();
// عرض التاريخ الحالي
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('ar-EG', options);
// تأكد من تحميل الصفحة بالكامل قبل تنفيذ الكود
document.addEventListener("DOMContentLoaded", function() {

    // عناصر التحكم
    var addButton = document.getElementById("addButton");
    var modal = document.getElementById("modal");
    var closeModal = document.getElementById("closeModal");

    // عند الضغط على زر الإضافة "+"
    addButton.addEventListener("click", function() {
        modal.style.display = "block";  // عرض المودال
    });

    // عند الضغط على زر الإغلاق في المودال
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";  // إخفاء المودال
    });

    // إغلاق المودال عند الضغط خارج النافذة
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";  // إخفاء المودال
        }
    });

});
// تأثير ظهور العناصر عند التمرير
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
});
const sound = new Howl({
    src: ['sound.mp3']
});

document.querySelector('.button').addEventListener('click', function() {
    sound.play(); // تشغيل الصوت عند الضغط على الزر
});
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 }},
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 }},
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
document.getElementById("myButton").onclick = function() {
    // تشغيل الصوت
    document.getElementById("buttonSound").play();

    // إضافة الحركة
    anime({
        targets: '#myButton',
        translateX: 250,
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
    });
};
// تأثيرات عند التمرير
window.addEventListener('scroll', () => {
    const tips = document.getElementById('tips');
    const resources = document.getElementById('resources');
    
    if (window.scrollY + window.innerHeight > tips.offsetTop) {
        tips.classList.add('visible');
    }
    if (window.scrollY + window.innerHeight > resources.offsetTop) {
        resources.classList.add('visible');
    }
});
// إضافة تأثير عند النقر على زر "إكتشف المزيد"
scrollDownBtn.addEventListener('click', () => {
    document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
    // إضافة تأثير ضوئي عند النقر
    scrollDownBtn.classList.add('clicked');
    setTimeout(() => {
        scrollDownBtn.classList.remove('clicked');
    }, 300);
});
function scrollToContent() {
    const content = document.getElementById('main-content');
    content.scrollIntoView({ behavior: 'smooth' });
}
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(el => observer.observe(el));
const fadeUpElements = document.querySelectorAll('.fade-up');

const observerFadeUp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeUpElements.forEach(el => observerFadeUp.observe(el));
const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // التحكم بسرعة السحب
    slider.scrollLeft = scrollLeft - walk;
});
window.addEventListener('scroll', function() {
    var element = document.querySelector('.scroll-effect');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (position < windowHeight) {
        element.classList.add('active');
    }
});
// يمكنك إضافة أي أنيميشن أو تأثيرات إضافية هنا
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل الأنيميشن عند التمرير
    window.addEventListener('scroll', function() {
        let serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item, index) => {
            let position = item.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                item.style.animationDelay = `${index * 0.3}s`;
                item.classList.add('animate');
            }
        });
    });
});
// يمكنك إضافة وظائف تفاعلية هنا إذا احتجت
document.addEventListener('DOMContentLoaded', () => {
    // مثال: عرض رسالة ترحيب
    alert('Welcome to Faster Education!');
});
// تفعيل زر الإضافة
document.getElementById('add-btn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// إغلاق القائمة عند النقر خارجها
window.onclick = function(event) {
    if (!event.target.matches('#add-btn')) {
        const dropdown = document.getElementById('dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
}
// الرسوم المتحركة للنصوص عند التحميل
window.onload = function() {
    gsap.from(".tips", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".resources", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
};
window.onload = function() {
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach((item, index) => {
        gsap.from(item, {
            duration: 0.5,
            y: -20,
            opacity: 0,
            delay: index * 0.1
        });
    });
};
document.getElementById('add-option-btn').addEventListener('click', function() {
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block'; //Toggle display
});
// إظهار/إخفاء الخيارات عند الضغط على زر "+"
document.getElementById('add-option-btn').addEventListener('click', function() {
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block'; //Toggle display
});

// إضافة حدث لزر "إضافة صورة"
document.getElementById('add-image-btn').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file'; // لتحديد نوع الملف
    input.accept = 'image/*'; // قبول الصور فقط
    input.click(); // فتح نافذة اختيار الملفات
});

// إضافة حدث لزر "إضافة نص"
document.getElementById('add-text-btn').addEventListener('click', function() {
    const text = prompt("أدخل النص الذي تريد إضافته:");
    if (text) {
        const textElement = document.createElement('div'); // إنشاء عنصر نص
        textElement.textContent = text; // تعيين النص
        textElement.style.margin = "10px 0"; // إضافة مسافة بين العناصر
        document.body.appendChild(textElement); // إضافة النص إلى الجسم
    }
});
  // إظهار/إخفاء الخيارات عند الضغط على زر "+"
  document.getElementById('add-option-btn').addEventListener('click', function() {
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block'; // Toggle display
});

// إضافة حدث لزر "إضافة صورة"
document.getElementById('add-image-btn').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file'; // لتحديد نوع الملف
    input.accept = 'image/*'; // قبول الصور فقط
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result; // تعيين مصدر الصورة
            img.style.width = '100px'; // عرض الصورة
            img.style.marginTop = '10px'; // مسافة فوق الصورة
            document.getElementById('content-area').appendChild(img); // إضافة الصورة إلى منطقة المحتوى
        }
        reader.readAsDataURL(file); // قراءة الملف كـ Data URL
    };
    input.click(); // فتح نافذة اختيار الملفات
});

// إضافة حدث لزر "إضافة نص"
document.getElementById('add-text-btn').addEventListener('click', function() {
    const text = prompt("أدخل النص الذي تريد إضافته:");
    if (text) {
        const textElement = document.createElement('div'); // إنشاء عنصر نص
        textElement.textContent = text; // تعيين النص
        textElement.classList.add('added-content'); // إضافة كلاس للتنسيق
        document.getElementById('content-area').appendChild(textElement); // إضافة النص إلى منطقة المحتوى
    }
});
const questions = [
    { question: "ما هو حاصل 2 + 2؟", answers: ["3", "4", "5"], correct: "4" },
    { question: "ما هو اسم العاصمة الفرنسية؟", answers: ["برلين", "باريس", "مدريد"], correct: "باريس" },
    // يمكنك إضافة المزيد من الأسئلة هنا
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    quizContainer.innerHTML = `<p>${question.question}</p>`;
    question.answers.forEach(answer => {
        quizContainer.innerHTML += `<button class="answer-btn">${answer}</button>`;
    });

    // إضافة أحداث للأزرار
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === question.correct) {
                alert('إجابة صحيحة!');
            } else {
                alert('إجابة خاطئة. حاول مرة أخرى.');
            }
        });
    });
}

// عرض السؤال الأول
displayQuestion();

// زر السؤال التالي
document.getElementById('next-question').addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // الانتقال للسؤال التالي
    displayQuestion();
});
let timer;
const timeLimit = 10; // الوقت المحدد للإجابة (بالثواني)

function startTimer() {
    let timeLeft = timeLimit;
    const timerDisplay = document.createElement('div');
    timerDisplay.classList.add('timer');
    document.querySelector('.play-with-me').appendChild(timerDisplay);

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('انتهى الوقت! حاول مرة أخرى.');
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // الانتقال للسؤال التالي
            displayQuestion();
        } else {
            timerDisplay.textContent = `الوقت المتبقي: ${timeLeft} ثواني`;
            timeLeft--;
        }
    }, 1000);
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    quizContainer.innerHTML = `<p>${question.question}</p>`;
    question.answers.forEach(answer => {
        quizContainer.innerHTML += `<button class="answer-btn">${answer}</button>`;
    });

    // إضافة أحداث للأزرار
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(timer); // إيقاف العداد
            if (button.textContent === question.correct) {
                alert('إجابة صحيحة!');
            } else {
                alert('إجابة خاطئة. حاول مرة أخرى.');
            }
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // الانتقال للسؤال التالي
            displayQuestion();
        });
    });

    startTimer(); // بدء العداد
}
function checkAnswer(isCorrect) {
    const result = document.createElement('div');
    result.classList.add('result');
    
    if (isCorrect) {
        result.innerHTML = '✔ إجابة صحيحة!';
        result.style.color = 'green';
    } else {
        result.innerHTML = '✘ إجابة خاطئة!';
        result.style.color = 'red';
    }
    
    document.body.appendChild(result);
    
    setTimeout(() => {
        result.remove();
    }, 2000);
}
function showMessage() {
    // إظهار البطاقة عند الضغط على زر العب معي
    const messageCard = document.getElementById('message-card');
    messageCard.classList.remove('hidden');
    messageCard.classList.add('show');
}
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('move-up');
        setTimeout(() => {
            button.classList.remove('move-up');
        }, 300);
    });
});
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add('fade-in');
        }
    });
});
const apiKey = 'YOUR_API_KEY_HERE'; // ضع مفتاح API هنا

document.getElementById('send-btn').addEventListener('click', function () {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage) {
        sendMessage(userMessage);
        document.getElementById('user-input').value = ''; // مسح حقل الإدخال
    }
});

function sendMessage(message) {
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<div>User: ${message}</div>`;

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }]
    };

    axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    }).then(response => {
        const botMessage = response.data.choices[0].message.content;
        chatbox.innerHTML += `<div>Bot: ${botMessage}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight; // التمرير لأسفل
    }).catch(error => {
        console.error('Error:', error);
    });
}
document.querySelector('.join-link').addEventListener('click', function(e) {
    e.preventDefault(); // تأكد من إزالة هذا إذا كنت تريد السماح للرابط بالعمل
});
