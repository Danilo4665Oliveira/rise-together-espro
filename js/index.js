// js/index.js (Salve este arquivo dentro da sua pasta 'js/')

// Mocks de todos os cursos disponíveis
// Em uma aplicação real, estes dados viriam de um banco de dados ou API.
const allCourses = [
    {
        id: 'fde',
        title: 'Fundamentos do Empreendedorismo',
        description: 'Entenda o que é empreender, seus tipos, o mindset necessário e como gerar as primeiras ideias.',
        longDescription: 'Este curso imerge você nos Fundamentos do Empreendedorismo. Aprenda a transformar ideias em negócios de sucesso, desenvolvendo o mindset empreendedor e identificando oportunidades de mercado. O programa abrange desde o planejamento e estratégias iniciais até noções de finanças, preparando-o para criar sua própria empresa.',
        duration: '60 horas',
        image: 'img/cursos/fundamentos-empreendedorismo.png',
        detailsPage: 'curso-details-fde.html',
        instructorName: 'Prof. Carlos Almeida',
        instructorBio: 'Especialista em Empreendedorismo, com 20 anos de experiência e palestrante nacionalmente famoso.',
        videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Exemplo de URL de embed do YouTube (substitua pelos seus vídeos)
        modules: [
            'Módulo 1: Introdução ao Empreendedorismo',
            'Módulo 2: O Mindset Empreendedor',
            'Módulo 3: Geração de Ideias e Oportunidades',
            'Módulo 4: Planejamento e Estratégia',
            'Módulo 5: Finanças para Empreendedores',
            'Módulo 6: Aspectos Legais e Burocráticos',
            'Módulo 7: Liderança e Gestão de Equipes',
            'Módulo 8: Crescimento e Escalabilidade',
            'Módulo 9: Empreendedorismo Social e Sustentável',
            'Módulo 10: Apresentação de Projetos e Encerramento'
        ]
    },
    {
        id: 'gf',
        title: 'Gestão Financeira para Empreendedores',
        description: 'Domine o controle de caixa, precificação, análise de custos e as melhores formas de buscar investimento.',
        longDescription: 'Domine o controle de caixa, precificação, análise de custos e as melhores formas de buscar investimento, tanto para suas finanças pessoais quanto para o seu negócio',
        duration: '45 horas',
        image: 'img/cursos/gestao-financeira.png',
        detailsPage: 'curso-details-gf.html',
        instructorName: 'Dra. Ana Costa',
        instructorBio: 'Especialista em Gestão Financeira, com 10 anos de experiência e escritora de 2 livros best-sellers na área.',
        videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Exemplo de URL de embed do YouTube
        modules: [
            'Módulo 1: Introdução à Gestão Financeira',
            'Módulo 2: Conceitos Fundamentais de Finanças Pessoais',
            'Módulo 3: Conceitos Fundamentais de Finanças Empresariais',
            'Módulo 4: Análise e Tomada de Decisão Financeira',
            'Módulo 5: Estratégias Avançadas e Tópicos Especiais'
        ]
    },
    {
        id: 'mkt',
        title: 'Marketing e Vendas para Pequenas Empresas',
        description: 'Desenvolva estratégias de branding, marketing digital e técnicas de vendas para atrair e conquistar clientes.',
        longDescription: 'Este curso foi cuidadosamente elaborado para capacitar empreendedores e gestores de pequenas empresas a dominar as estratégias de marketing e vendas essenciais no cenário atual. Você aprenderá a construir uma marca forte, a utilizar as ferramentas de marketing digital de forma eficaz e a aplicar técnicas de vendas que realmente convertam, atraindo e fidelizando clientes para o seu negócio. É ideal para quem busca impulsionar o crescimento e a visibilidade de sua empresa no mercado.',
        duration: '30 horas',
        image: 'img/cursos/marketing-e-vendas.png',
        detailsPage: 'curso-details-mkt.html',
        instructorName: 'Dr. João Silva',
        instructorBio: 'Especialista em Marketing e vendas, com 15 anos de experiência e autor de diversos artigos científicos.',
        videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Exemplo de URL de embed do YouTube
        modules: [
            'Módulo 1: Introdução ao Marketing e Vendas para PME',
            'Módulo 2: Fundamentos Essenciais de Marketing para PME',
            'Módulo 3: Estratégias de Vendas e Atendimento ao Cliente',
            'Módulo 4: Marketing Digital Avançado e Ferramentas',
            'Módulo 5: Planejamento e Execução Estratégica'
        ]
    },
    // Adicione outros cursos se tiver mais, seguindo a mesma estrutura
];

// Mock de cursos ativos para o usuário logado
// Em uma aplicação real, isso viria do backend associado ao usuário.
const userActiveCourses = [
    { courseId: 'gf', progress: 75 },
    { courseId: 'mkt', progress: 40 }
];

// Mock de cursos recomendados (poderiam ser cursos que o usuário não está matriculado ou populares)
// Em uma aplicação real, isso viria de um algoritmo de recomendação.
const userRecommendedCourses = [
    { courseId: 'fde' }
];


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
                loginMessage.textContent = (`Login realizado com sucesso! Redirecionando para o painel...`);

                // Armazena o nome do usuário (simulação de sessão)
                localStorage.setItem('loggedInUser', userName);

                setTimeout(() => {
                    window.location.href = ('dashboard.html'); // Redireciona para o dashboard
                }, 1500); // Redireciona após 1.5 segundos
            } else {
                // Simula login falho
                loginMessage.classList.remove('alert-success', 'd-none');
                loginMessage.classList.add('alert-danger');
                loginMessage.textContent = ('Email ou senha incorretos.');
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
    const activeCoursesListDiv = document.getElementById('activeCoursesList');
    const recommendedCoursesListDiv = document.getElementById('recommendedCoursesList');

    if (userNameDisplay) {
        const storedUserName = localStorage.getItem('loggedInUser');
        if (storedUserName) {
            userNameDisplay.textContent = storedUserName;
            renderActiveCourses();
            renderRecommendedCourses();
        } else {
            // Se não houver usuário logado, redireciona para o login (ou index.html)
            window.location.href = 'login.html';
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('loggedInUser'); // Limpa a "sessão"
            window.location.href = 'index.html'; // Redireciona para a home (index.html)
        });
    }

    // Função para renderizar os cursos ativos do usuário
    function renderActiveCourses() {
        if (!activeCoursesListDiv) return; // Garante que o elemento existe

        activeCoursesListDiv.innerHTML = ''; // Limpa qualquer conteúdo existente

        userActiveCourses.forEach(userCourse => {
            const course = allCourses.find(c => c.id === userCourse.courseId);
            if (course) {
                const cardHtml = `
                    <div class="col">
                        <div class="card h-100 shadow-sm">
                            <img src="${course.image}" class="card-img-top" alt="Capa do Curso ${course.title}">
                            <div class="card-body">
                                <h5 class="card-title">${course.title}</h5>
                                <p class="card-text text-muted">Progresso: ${userCourse.progress}%</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: ${userCourse.progress}%;" aria-valuenow="${userCourse.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <a href="${course.detailsPage}" class="btn btn-sm btn-primary">Continuar Curso</a>
                            </div>
                        </div>
                    </div>
                `;
                activeCoursesListDiv.innerHTML += cardHtml;
            }
        });
    }

    // Função para renderizar os cursos recomendados
    function renderRecommendedCourses() {
        if (!recommendedCoursesListDiv) return; // Garante que o elemento existe

        recommendedCoursesListDiv.innerHTML = ''; // Limpa qualquer conteúdo existente

        userRecommendedCourses.forEach(recommendedCourse => {
            const course = allCourses.find(c => c.id === recommendedCourse.courseId);
            if (course) {
                const cardHtml = `
                    <div class="col">
                        <div class="card h-100 shadow-sm">
                            <img src="${course.image}" class="card-img-top" alt="Capa do Curso ${course.title}">
                            <div class="card-body">
                                <h5 class="card-title">${course.title}</h5>
                                <p class="card-text text-muted">${course.description}</p>
                                <a href="${course.detailsPage}" class="btn btn-sm btn-outline-secondary">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                `;
                recommendedCoursesListDiv.innerHTML += cardHtml;
            }
        });
    }


    // --- Lógica para Detalhes do Curso (curso-details-fde.html, curso-details-gf.html, curso-details-mkt.html) ---
    // Esta lógica agora usa 'allCourses' para buscar os detalhes
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (document.getElementById('course-title')) { // Verifica se estamos em uma página de detalhes de curso
        // Extrai o ID do curso do nome do arquivo se não houver um parâmetro 'id' na URL
        let currentCourseId = courseId;
        if (!currentCourseId) {
            const path = window.location.pathname;
            const fileName = path.substring(path.lastIndexOf('/') + 1);
            if (fileName.startsWith('curso-details-')) {
                currentCourseId = fileName.replace('curso-details-', '').replace('.html', '');
            }
        }

        const course = allCourses.find(c => c.id === currentCourseId);

        if (course) {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-description').textContent = course.description;
            document.getElementById('course-long-description').textContent = course.longDescription;
            // A imagem do instrutor é carregada do HTML estaticamente.
            // Se você tivesse imagens de instrutores diferentes para cada um no seu mock, poderia fazer:
            // const instructorImg = document.querySelector('#instructor img');
            // if (instructorImg && course.instructorImage) {
            //     instructorImg.src = course.instructorImage;
            // }

            document.getElementById('instructor-name').textContent = course.instructorName;
            document.getElementById('instructor-bio').textContent = course.instructorBio;
            document.querySelector('.video-container iframe').src = course.videoEmbedUrl;

            // Carregar currículo
            const curriculumListDiv = document.getElementById('course-curriculum');
            if (curriculumListDiv) {
                curriculumListDiv.innerHTML = ''; // Limpa o conteúdo existente
                course.modules.forEach((moduleTitle, moduleIndex) => {
                    // Simulação de aulas dentro de cada módulo
                    const moduleHtml = `
                        <h5>${moduleTitle}</h5>
                        <ul>
                            <li>Aula ${moduleIndex + 1}.1: Tópico 1</li>
                            <li>Aula ${moduleIndex + 1}.2: Tópico 2</li>
                        </ul>
                    `;
                    curriculumListDiv.innerHTML += moduleHtml;
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
            // Ocultar outras seções ou mostrar uma mensagem de erro apropriada
            if (document.getElementById('overview')) document.getElementById('overview').innerHTML = '<p>Detalhes do curso não disponíveis.</p>';
            if (document.getElementById('curriculum')) document.getElementById('curriculum').innerHTML = '';
            if (document.getElementById('instructor')) document.getElementById('instructor').innerHTML = '';
            if (document.querySelector('.video-container iframe')) document.querySelector('.video-container iframe').style.display = 'none';
            if (document.getElementById('enroll-button')) document.getElementById('enroll-button').style.display = 'none';
        }
    }
});