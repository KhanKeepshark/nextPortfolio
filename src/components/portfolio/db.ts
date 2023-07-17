export const projectsList: {
  titleId: string;
  href: string;
  title: string;
  img: string;
  descEng1: string;
  descEng2: string;
  descRus1: string;
  descRus2: string;
  techC: string;
  techB: string;
}[] = [
  {
    titleId: "budgetmanager",
    href: "http://92.38.48.33/",
    title: "Budget Manager",
    img: "project1.png",
    descEng1: "Website for monitoring your own expenses",
    descEng2:
      "Budget App is an application that allows you to keep track of your expenses. In it, you can create records of your expenses and observe their statistics on various indicators for a monthly period. Password, login and all indicators can be created and edited in the profile settings. All data can be conveniently downloaded in .csv format and uploaded if necessary.",
    descRus1: "Веб-сайт для мониторинга ваших собственных расходов",
    descRus2:
      "Budget App - это приложение, которое позволяет вам отслеживать свои расходы. В нем вы можете создавать записи о своих расходах и наблюдать за их статистикой по различным показателям за ежемесячный период. Пароль, логин и все индикаторы можно создать и отредактировать в настройках профиля. Все данные могут быть удобно загружены в формате .csv и выгружены при необходимости.",
    techC: "React.js, SCSS, ReactDOM, Axios, Mobx, Chart.js, Vite, Fontawesome",
    techB:
      "Node.js, Express, Sequelize, MySQL, Cors, JWT, Bcrypt, Cookie-Parser, UUID",
  },
  {
    titleId: "gotomars",
    href: "http://92.38.48.33/",
    title: "GoToMars Page",
    img: "project2.png",
    descEng1: "Layout of the main page of the website 'travel to mars'",
    descEng2:
      "Go to Mars is a one-page website. He was my test assignment for a company. When you go to /admin, you can enter the panel to edit the elements of the main page.",
    descRus1: "Макет главной страницы сайта 'travel to mars'",
    descRus2:
      "Go to Mars - это одностраничный веб-сайт. Он был моим тестовым заданием для компании. Когда вы заходите в /admin, вы можете войти в панель для редактирования элементов главной страницы.",
    techC: "React.js, SCSS, ReactDOM, Axios, Vite, Fontawesome",
    techB: "Django, Rest Framework, Sequelize, Cors, SQlite3",
  },
];
