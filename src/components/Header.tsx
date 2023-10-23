import "./header.css"
import hh_logo from "../assets/images/hh.ru__min_.svg"

export function Header() {
  return (
    <header className="sticky top-0 z-30">
      <div className="navbar-background">
        <nav className="flex items-center justify-between px-2 py-4 text-3xl text-white navbar">
          Александр Хромов
          <a
            href="https://hh.ru/resume/b4947ca2ff0c38df830039ed1f7175784c506d"
            target="_blank"
            className="z-10 flex items-center gap-2 px-4 py-2 text-xl border-4 rounded-full select-none text-sky-700 bg-sky-200 border-amber-600"
          >
            Связаться
            <img className="h-6" src={hh_logo} alt="hh логотип" />
            &rarr;
          </a>
        </nav>
      </div>

    </header>

  );
}