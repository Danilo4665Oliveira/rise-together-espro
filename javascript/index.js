document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para Login (login.html) ---
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('login-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Simulação de credenciais de login
            const validEmail = 'aluno@email.com';
            const validPassword = '123';
            const userName = 'Aluno Teste'; // Nome para exibir no dashboard

            if (email === validEmail && password === validPassword) {
                // Simula login bem-sucedido
                loginMessage.classList.remove('alert-danger', 'd-none');
                loginMessage.classList.add('alert-success');
                loginMessage.textContent = `Login realizado com sucesso! Redirecionando para o painel...`;

                // Armazena o nome do usuário (simulação de sessão)
                localStorage.setItem('loggedInUser', userName);

                setTimeout(() => {
                    window.location.href = 'cursos.html'; // Redireciona para o dashboard
                }, 1500); // Redireciona após 1.5 segundos
            } else {
                // Simula login falho
                loginMessage.classList.remove('alert-success', 'd-none');
                loginMessage.classList.add('alert-danger');
                loginMessage.textContent = 'Email ou senha incorretos.';
            }
            loginMessage.classList.remove('d-none'); // Torna a mensagem visível
        });
    }

    // --- Lógica para Cadastro (cadastro.html) ---
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('register-message');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            // Validações básicas
            if (!name || !email || !password || !confirmPassword) {
                registerMessage.classList.remove('alert-success', 'd-none');
                registerMessage.classList.add('alert-danger');
                registerMessage.textContent = 'Por favor, preencha todos os campos.';
                registerMessage.classList.remove('d-none');
                return;
            }

            if (password !== confirmPassword) {
                registerMessage.classList.remove('alert-success', 'd-none');
                registerMessage.classList.add('alert-danger');
                registerMessage.textContent = 'As senhas não coincidem.';
                registerMessage.classList.remove('d-none');
                return;
            }

            if (password.length < 3) { // Apenas para simulação, senhas reais devem ser mais longas
                registerMessage.classList.remove('alert-success', 'd-none');
                registerMessage.classList.add('alert-danger');
                registerMessage.textContent = 'A senha deve ter no mínimo 3 caracteres.';
                registerMessage.classList.remove('d-none');
                return;
            }

            // Simula cadastro bem-sucedido
            registerMessage.classList.remove('alert-danger', 'd-none');
            registerMessage.classList.add('alert-success');
            registerMessage.textContent = `Cadastro de ${name} realizado com sucesso! Você já pode fazer login.`;

            // Opcional: Redirecionar para a página de login após alguns segundos
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000); // Redireciona após 2 segundos
        });
    }

    // --- Lógica para Dashboard (dashboard.html) ---
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userNameDisplay) {
        const storedUserName = localStorage.getItem('loggedInUser');
        if (storedUserName) {
            userNameDisplay.textContent = storedUserName;
        } else {
            // Se não houver usuário logado, redireciona para o login (ou home)
            window.location.href = 'login.html';
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('loggedInUser'); // Limpa a "sessão"
            window.location.href = 'index.html'; // Redireciona para a home
        });
    }

    // --- Lógica para Detalhes do Curso (detalhes-curso.html) ---
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    

    if (courseId && document.getElementById('course-title')) {
        const course = mockCourses.find(c => c.id === courseId);

        if (course) {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-description').textContent = course.description;
            document.getElementById('course-long-description').textContent = course.longDescription;
            document.getElementById('instructor-name').textContent = course.instructorName;
            document.getElementById('instructor-bio').textContent = course.instructorBio;
            document.querySelector('.video-container iframe').src = course.videoEmbedUrl;

            // Carregar currículo
            const curriculumList = document.getElementById('course-curriculum');
            if (curriculumList) {
                curriculumList.innerHTML = ''; // Limpa o conteúdo existente
                course.modules.forEach((moduleTitle, index) => {
                    const moduleHtml = `
                        <h5>${moduleTitle}</h5>
                        <ul>
                            <li>Aula ${index + 1}.1: Tópico 1</li>
                            <li>Aula ${index + 1}.2: Tópico 2</li>
                        </ul>
                    `;
                    curriculumList.innerHTML += moduleHtml;
                });
            }

            // Simular botão de inscrição
            const enrollButton = document.getElementById('enroll-button');
            if (enrollButton) {
                enrollButton.addEventListener('click', () => {
                    alert(`Parabéns! Você se "inscreveu" no curso de "${course.title}".`);
                });
            }

        } else {
            document.getElementById('course-title').textContent = 'Curso Não Encontrado';
            document.getElementById('course-description').textContent = 'O curso que você procura não foi encontrado.';
            // Ocultar outras seções ou mostrar uma mensagem de erro
        }
    }
});