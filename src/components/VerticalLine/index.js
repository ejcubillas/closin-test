import VerticalLineCSS from './verticalline.module.css';
const VerticalLine = ({height}) => {
  return (
    <div className={VerticalLineCSS.verticalline} style={{ height: height}}></div>
  )
}

export default VerticalLine;