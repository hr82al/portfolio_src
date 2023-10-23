import { Header } from "./components/Header";
import photo from "./assets/images/photo.jpg";
import todo from "./assets/images/todo-list.png";
import rtcalculator from "./assets/images/rtcalculator.png";
import quizlearn from "./assets/images/quizlearn.png";
import { Project } from "./components/Project";
import { GitHubIcon, OiAccountLogin } from "./components/icons";
import others from "./assets/images/other.png";
import { BlueLink } from "./components/BlueLink";
import gmail from "./assets/images/icons8-gmail.svg"
import { Card } from "./components/Card";
import { CuteTag } from "./components/CuteTag";

function App() {


  return (
    <div className="main-colors">
      <Header />
      <main className="flex flex-col flex-1 p-4">
        <section id="intro" className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-2 sm:py-14">
          <div className="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8 lg:gap-10">
            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Я Александр Хромов <br />
              <span className="text-sky-600">
                Fullstack-разработчик
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Мои <span className="text-sky-600">любимые технологии</span> TypeScript/JavaScript, React, Vite, Next.js, Tailwind CSS, MySql/MaraDB, PostgreSQL, NextAuth.js. Так же есть проект на С/C++ (boost, wxWidgets, cMake). Так же работал с Java (JavaFX, libGDX, Spring, MySQL, jQuery, bootstrap, maven, gradle, ant).
            </p>
          </div>
          <div className="grid place-items-center">
            <img className="rounded-full" src={photo} alt="фото" />
          </div>
        </section>


        <section id="projects" className="flex flex-col gap-24 py-20 lg:py-32">
          <div className="flex flex-col items-center gap-6 text-center lg:gap-16">
          <h3 className="py-3 text-3xl font-semibold text-center text-sky-600 sm:text-4xl md:text-5xl">
          Несколько моих проектов
          </h3>
            <Project image={rtcalculator}>
              <h6 className="text-lg text-center text-sky-600 sm:text-xl md:text-2xl">
                Калькулятор
              </h6>
              <p className="pb-4">React vite проект простого калькулятора написанный на TypeScript. В проекте используется встроенный в React менеджер глобального состояния вместо RTK.</p>
              <div className="flex items-baseline justify-end gap-5">
                <a href="https://rtcalculator.vercel.app/" target="_blank">
                  <OiAccountLogin />
                </a>
                <a href="https://github.com/hr82al/rtcalculator" target="_blank">
                  <GitHubIcon height="2rem" width="2rem" />
                </a>
              </div>
            </Project>
            <Project image={todo}>
              <h6 className="text-lg text-center text-sky-600 sm:text-xl md:text-2xl">
                Список дел
              </h6>
              <p className="pb-4">React vite проект списка дел ака  todo list написанный на TypeScript. В проекте используется Redux RTK глобального состояния вместо RTK и  React icons. Адаптивный вэб дизайн, стилизация стандартного checkbox, светлая и тёмные темы </p>
              <div className="flex items-baseline justify-end gap-5">
                <a href="https://rtcalculator.vercel.app/" target="_blank">
                  <OiAccountLogin />
                </a>
                <a href="https://github.com/hr82al/rtcalculator" target="_blank">
                  <GitHubIcon height="2rem" width="2rem" />
                </a>

              </div>
            </Project>
            <Project image={quizlearn}>
              <h6 className="text-lg text-center text-sky-600 sm:text-xl md:text-2xl">
                Мой пет проект
              </h6>
              <p>
                TypeScript Next.js, RTK, Tailwind CSS  фул стек проект. На стороне сервера используется PostgreSQL в качестве базы данных. Клиентская часть базы данных вэб приложения реализована на основе библиотеки Prism, на основе ORM. Реализована авторизация и аутентификация пользователей при помощи библиотеки NextAuth.js. Можно авторизоваться как при помощи сервиса Google, так и завести учетную запись с логином и паролем. При входе пользователь видит ленту со случайными тестами, кликнув на которые, он может решать. В случае, если тест принадлежит пользователю, доступно удаление и редактирование. Пользователь может также добавлять новые тесты доступные публично.
              </p>
              <div className="flex items-baseline justify-end gap-5">
                <a href="https://quizlearn.vercel.app/" target="_blank">
                  <OiAccountLogin />
                </a>
                <a href="https://github.com/hr82al/quizlearn/tree/main" target="_blank">
                  <GitHubIcon height="2rem" width="2rem" />
                </a>
              </div>
            </Project>

            <Project image={others}>
              <h6 className="text-lg text-center text-sky-600 sm:text-xl md:text-2xl">
                Другие проекты
              </h6>
              <p>
                <BlueLink href="https://github.com/hr82al/mu_trainings">MU Trainings</BlueLink>: Java Spring, MySql, Bootstrap, JQuery, gradle фул стек проект для учета и контроля по обслуживанию технологического оборудования ООО Хавэйл Моторы Мануфакчуринг Рус г. Узловая
              </p>
              <p>
                Моя курсовая из института Магические Квадраты <BlueLink href="https://github.com/hr82al/MagicSquares">MagicSquares</BlueLink>. C++ проект: система сборки CMake, библиотеки wxWidgets(GUI), boost. Магический квадрат, квадратная таблица из целых чисел, в которой суммы чисел вдоль любой строки, любого столбца и любой из двух главных диагоналей равны одному и тому же числу.
              </p>
              <p>
                Космический шуттер android <BlueLink href="https://github.com/hr82al/StarGame">StarGame</BlueLink> игра написанная мною в рамках курса Java GeekBrains. Библиотека LibGDX.
              </p>

              <p>
                И другие проекты на странице <BlueLink href="https://github.com/hr82al">GitHub</BlueLink>
              </p>
            </Project>

          </div>
        </section>
      </main>


      <section id="about" className="flex flex-col items-center gap-24 py-20 lg:py-32">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="w-1/3 h-2 rounded-full bg-amber-600"></div>
            <div className="w-1/3 h-2 rounded-full bg-amber-600"></div>
          </div>
          <h3 className="py-3 text-3xl font-semibold text-center text-sky-600 sm:text-4xl md:text-5xl">
            Обо мне
          </h3>
          <div className="flex justify-center">
            <div className="w-2/3 h-2 rounded-full bg-amber-600"></div>
          </div>
        </div>
        <Card title="Новомосковский политехнический колледж" >
        Новомосковский политехнический колледж
          Кибернетика, Автоматизация технологических процессов и производств (техник)
        </Card>
        <Card title="Новомосковский институт Российского химико-технологического университета им. Д.И. Менделеева, Новомосковск (Тульская область)">
        ЗиОЗО, Автоматизированные системы обработки информации и управления
        </Card>
        <Card title="Geek Brains">
          Факультет Java-разработки
        </Card>
        <Card title="Навыки">
          <div className="flex flex-wrap">
            <CuteTag> Английский — B2 </CuteTag>
            <CuteTag> CSS3 </CuteTag>
            <CuteTag> Tailwind CSS </CuteTag>
            <CuteTag> HTML5 </CuteTag>
            <CuteTag> JavaScript </CuteTag>
            <CuteTag> TypeScript </CuteTag>
            <CuteTag> PostgreSQL </CuteTag>
            <CuteTag>Next.js</CuteTag>
            <CuteTag>Auth.js</CuteTag>
            <CuteTag>Prisma</CuteTag>
            <CuteTag>Vite</CuteTag>
            <CuteTag>Git</CuteTag>
            <CuteTag>Java</CuteTag>
            <CuteTag>JQuery</CuteTag>
            <CuteTag>Bootstrap</CuteTag>
            <CuteTag>Spring</CuteTag>
            <CuteTag>Gradle</CuteTag>
            <CuteTag>Android</CuteTag>
          </div>
        </Card>

      </section>
      <footer className="flex items-center gap-4 px-8 py-4 bg-amber-950">
        <a href="https://github.com/hr82al" target="_blank">
          <GitHubIcon className="text-white" height="2rem" width="2rem" />
        </a>
        <BlueLink href="mailto:hr82al@gmail.com">
          <img className="h-8" src={gmail} alt="Почта" />
        </BlueLink>
      </footer>
    </div>
  )
}

export default App
