import './Button.scss'
  
const Button = ({btnText}) => {
  return (
    <button className='btn btn-custom'>
      {btnText}
    </button>
  )
}
  
export default Button;