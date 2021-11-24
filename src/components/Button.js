import PropTypes from 'prop-types'


export const Button = (props) => {
    
    // const onClick =  () =>{
    //     console.log('Click')
    // }   
    
    return (
    <button onClick={props.onClick} 
            style={{backgroundColor:props.color}} className='btn'>
            {props.text}
    </button> 
    )
}

Button.deafultProps = {
    color : 'steelblue', 
}

Button.propTypes = {
    text : PropTypes.string, 
    color : PropTypes.string,
    onClick : PropTypes.func,
}
export default Button
