function MenuItem(props) {<li className="menu__item">
                  <a href="/" className="menu__link">
                    Главное
                  </a>
                </li>
}

export function Menu() {<div className="nav__menu menu">
              <ul className="menu__list">
                <MenuItem/>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
}