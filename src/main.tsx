import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdd, faBars, faBriefcase, faBuilding, faCalendar, faCircleNotch, faImage, faKey, faLink, faMicrochip, faNewspaper, faTable, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import GeneralPage from '@pages/GeneralPage';
import TechnologyPage from '@pages/technology/TechnologyPage';
import CreateTechnologyPage from '@pages/technology/CreateTechnologyPage';
import LoginPage from '@pages/LoginPage';
import CompanyPage from '@pages/company/CompanyPage';
import CreateCompanyPage from '@pages/company/CreateCompanyPage';
import ExperiencePage from '@pages/experience/ExperiencePage';
import CreateExperiencePage from '@pages/experience/CreateExperiencePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <GeneralPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "experience",
        element: <ExperiencePage />
      },
      {
        path: "experience/create",
        element: <CreateExperiencePage />
      },
      {
        path: "technology",
        element: <TechnologyPage />
      },
      {
        path: "technology/create",
        element: <CreateTechnologyPage />
      },
      {
        path: "company",
        element: <CompanyPage />
      },
      {
        path: "company/create",
        element: <CreateCompanyPage />
      }
    ]
  }
]);
library.add(faTrash, faBars, faBuilding, faBriefcase, faMicrochip, faUser, faTable, faKey, faAdd, faTag, faImage, faNewspaper, faLink, faCalendar, faCircleNotch);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
