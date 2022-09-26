import PageTitleCSS from './pagetitle.module.css';
const PageTitle = ({title}) => {
  return <h1 className={PageTitleCSS.pagetitle}>{title}</h1>
}

export default PageTitle;