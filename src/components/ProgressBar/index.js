import ProgressBarCSS from './progressbar.module.css';
const ProgressBar = ({value}) => {
  return (
    <div className={ProgressBarCSS.container}>
      <div className={ProgressBarCSS.progress}></div>
      <div className={ProgressBarCSS.progressIndicator} style={{ width: `${value}%` }}></div>
    </div>
  )
}

export default ProgressBar;