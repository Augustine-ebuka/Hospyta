import btnStyle from '../styles/button.module.css';

export default function Button(props) {
  return (
      <div className={btnStyle.btn}>
          {props.children}
    </div>
  )
}
