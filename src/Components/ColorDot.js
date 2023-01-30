import '../App.css';

function ColorDot({color}) {
  if(!color){
    color = "#808080"
  }  
  return (
    <div className='colorDot' style={{backgroundColor: color}}></div>
  );
}
   
export default ColorDot;
    