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
                    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
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
    
    // Dados mockados de cursos para demonstração
    const mockCourses = [
        {
            id: '1',
            title: 'Desenvolvimento Web Fullstack',
            description: 'Aprenda a construir aplicações web completas do zero com as tecnologias mais modernas do mercado.',
            longDescription: 'Este curso abrangente cobre desde os fundamentos do HTML, CSS e JavaScript até frameworks avançados de frontend (React) e backend (Node.js com Express). Você construirá projetos reais e se tornará um desenvolvedor Fullstack completo.',
            instructorName: 'Profa. Ana Costa',
            instructorBio: 'Engenheira de Software com 10 anos de experiência em desenvolvimento web e mobile, e paixão por ensinar.',
            videoEmbedUrl: 'https://www.youtube.com/embed/videoseries?si=abcdefg&list=PLxirL_I4K1h3y4sHhL8jY8x8y8x8y8x8y', // Substitua por um ID de playlist ou vídeo real
            modules: [
                'Módulo 1: Fundamentos do Frontend',
                'Módulo 2: JavaScript Moderno',
                'Módulo 3: Construindo com React',
                'Módulo 4: Backend com Node.js e Express',
                'Módulo 5: Bancos de Dados e APIs',
                'Módulo 6: Deploy e Boas Práticas'
            ]
        },
        {
            id: '2',
            title: 'Introdução à Inteligência Artificial',
            description: 'Desvende os conceitos fundamentais da Inteligência Artificial e Machine Learning de forma prática e didática.',
            longDescription: 'Neste curso, você explorará os pilares da IA, como algoritmos de aprendizado de máquina, redes neurais e processamento de linguagem natural. Com exemplos e exercícios práticos, você estará pronto para dar os primeiros passos neste campo revolucionário.',
            instructorName: 'Dr. Pedro Almeida',
            instructorBio: 'Pesquisador em IA e cientista de dados com doutorado em Aprendizado de Máquina, consultor em diversas startups.',
            videoEmbedUrl: 'https://www.youtube.com/embed/videoseries?si=hijklm&list=PLxirL_I4K1h3y4sHhL8jY8x8y8x8y8x8y',
            modules: [
                'Módulo 1: O Que é IA?',
                'Módulo 2: Aprendizado Supervisionado',
                'Módulo 3: Redes Neurais Artificiais',
                'Módulo 4: Introdução ao Processamento de Linguagem Natural'
            ]
        },
        {
            id: '3',
            title: 'Design Gráfico para Iniciantes',
            description: 'Crie visuais impactantes com as ferramentas e princípios essenciais do design gráfico, mesmo sem experiência prévia.',
            longDescription: 'Este curso é perfeito para quem quer começar no mundo do design. Você aprenderá sobre tipografia, cores, layouts, e como usar softwares como Adobe Illustrator e Photoshop (abordagem teórica, sem exigir o software). Crie seus próprios projetos desde o primeiro dia.',
            instructorName: 'Designer Carla Melo',
            instructorBio: 'Designer gráfica sênior com 8 anos de experiência em branding e marketing digital. Ama cores e tipografia.',
            videoEmbedUrl: 'https://www.youtube.com/embed/videoseries?si=nopqrs&list=PLxirL_I4K1h3y4sHhL8jY8x8y8x8y8x8y',
            modules: [
                'Módulo 1: Fundamentos do Design',
                'Módulo 2: Teoria das Cores e Tipografia',
                'Módulo 3: Princípios de Layout',
                'Módulo 4: Ferramentas Essenciais do Designer'
            ]
        },
        {
            id: '4',
            title: 'Fundamentos de Banco de Dados SQL',
            description: 'Domine a criação e manipulação de bancos de dados relacionais utilizando SQL.',
            longDescription: 'Este curso oferece uma base sólida em SQL, ensinando desde a criação de tabelas até consultas complexas e otimização de bancos de dados. Essencial para quem deseja trabalhar com dados ou desenvolvimento de software.',
            instructorName: 'Esp. Ricardo Souza',
            instructorBio: 'Engenheiro de dados com vasta experiência em modelagem e otimização de bancos de dados para grandes empresas.',
            videoEmbedUrl: 'https://www.youtube.com/embed/videoseries?si=tuvwxy&list=PLxirL_I4K1h3y4sHhL8jY8x8y8x8y8x8y',
            modules: [
                'Módulo 1: Introdução a Bancos de Dados',
                'Módulo 2: Comandos DDL e DML',
                'Módulo 3: Consultas Avançadas com SQL',
                'Módulo 4: Normalização e Modelagem de Dados'
            ]
        }
    ];

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