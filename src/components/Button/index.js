import ButtonCSS from './button.module.css';

const Button = (props) => {
  
  let btnClass = ButtonCSS.btn;

  if (props.type === 'outline') {
    btnClass = ButtonCSS.outline;
  }else if (props.type === 'transparent') {
    btnClass = ButtonCSS.transparent;
  }

  return (
    <button className={btnClass} style={{ width: '100%' }}>
      {props.iconLeft ? props.iconLeft : null}
      <div>
        {props.children}
      </div>
      {props.iconRight ? props.iconRight : null}
    </button>
  )
}

export default Button;