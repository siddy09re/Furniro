import Button from "../../../Shared/Components/Button"


const SingleButton = ({content , className , onClick}) => {
  return (
    <div className='w-8 h-8 mt-3'>
        <Button
         variant = "outlined" 
         className={`rounded-lg text-black text-xs ${className}`}
         onClick={onClick}
        content = {content} />
    </div>
  )
}

export default SingleButton