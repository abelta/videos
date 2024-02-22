import './NavigationMenu.css'
import React from 'react'
import {
  IconHome,
  IconShorts,
  IconSubscriptions,
  IconHistory,
  IconWatchLater,
  IconLikes,
  IconTrending,
  IconMusic,
  IconFilms,
  IconLive,
  IconGaming,
  IconNews,
  IconSport,
  IconLearning,
  IconPodcasts,
  IconSettings,
  IconReport,
  IconHelp,
  IconFeedback,
  IconYou,
} from './Icons'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
import { useBreakPoint } from 'hooks'

const menuItems = [
  {
    icon: <IconHome />,
    title: 'Inicio',
    url: '/',
  },
  {
    icon: <IconShorts />,
    title: 'Shorts',
    url: '/',
  },
  {
    icon: <IconSubscriptions />,
    title: 'Suscripciones',
    url: '/',
  },
]

const menuItemsMobile = [
  {
    icon: <IconHome />,
    title: 'Inicio',
    url: '/',
  },
  {
    icon: <IconShorts />,
    title: 'Shorts',
    url: '/',
  },
  {
    icon: <IconSubscriptions />,
    title: 'Suscripciones',
    url: '/',
  },
  {
    icon: <IconYou />,
    title: 'Tú',
    url: '/',
  },
]

const menuItemsYou = [
  {
    icon: <IconHistory />,
    title: 'Historial',
    url: '/',
  },
  {
    icon: <IconWatchLater />,
    title: 'Ver más tarde',
    url: '/',
  },
  {
    icon: <IconLikes />,
    title: 'Videos que me gustan',
    url: '/',
  },
]

const menuItemsExplore = [
  {
    icon: <IconTrending />,
    title: 'Tendencias',
    url: '/',
  },
  {
    icon: <IconMusic />,
    title: 'Música',
    url: '/',
  },
  {
    icon: <IconFilms />,
    title: 'Películas',
    url: '/',
  },
  {
    icon: <IconLive />,
    title: 'En directo',
    url: '/',
  },
  {
    icon: <IconGaming />,
    title: 'Videojuegos',
    url: '/',
  },
  {
    icon: <IconNews />,
    title: 'Noticias',
    url: '/',
  },
  {
    icon: <IconSport />,
    title: 'Deportes',
    url: '/',
  },
  {
    icon: <IconLearning />,
    title: 'Aprendizaje',
    url: '/',
  },
  {
    icon: <IconPodcasts />,
    title: 'Pódcasts',
    url: '/',
  },
]

const menuItemsSettings = [
  {
    icon: <IconSettings />,
    title: 'Configuración',
    url: '/',
  },
  {
    icon: <IconReport />,
    title: 'Historial de denuncias',
    url: '/',
  },
  {
    icon: <IconHelp />,
    title: 'Ayuda',
    url: '/',
  },
  {
    icon: <IconFeedback />,
    title: 'Enviar sugerencias',
    url: '/',
  },
]

const NavigationMenu = () => {
  const { isMobile, isMobileLarge } = useBreakPoint()

  if (isMobile || isMobileLarge) {
    return (
      <nav className="navbar--left">
        <div className="navbar--wrapper">
          {menuItemsMobile.map((menuItem, index) => (
            <MenuItem key={index} {...menuItem} />
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className="navbar--left">
      <div className="navbar--wrapper">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
        <div className="nav--container">
          <Link to={'/'} className="nav--subtitle">
            Tú
          </Link>
          {menuItemsYou.map((menuItem, index) => (
            <MenuItem key={index} {...menuItem} />
          ))}
        </div>
        <div className="nav--container">
          <Link to={'/'} className="nav--subtitle">
            Explorar
          </Link>
          {menuItemsExplore.map((menuItem, index) => (
            <MenuItem key={index} {...menuItem} />
          ))}
        </div>
        <div className="nav--container">
          {menuItemsSettings.map((menuItem, index) => (
            <MenuItem key={index} {...menuItem} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavigationMenu
