import Description from '../SingleProductAssests/Description1.svg'
import Description2 from '../SingleProductAssests/Description2.svg'

const SingleDescription = () => {
  return (
<div className='flex items-center flex-col px-5 '>

    <div className="max-w-5xl text-gray-500 ">
    
        <p className='md:text-[16px] text-[12px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
             active stereo speaker takes the unmistakable look and sound of Marshall, 
             unplugs the chords, and takes the show on the road.</p>

        <p className="mt-7 md:text-[16px] text-[12px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar 
            as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
             audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. 
             The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced 
             leather strap enables easy and stylish travel.</p>

    </div>
    <div className='flex gap-2 max-w-4xl md:flex-row flex-col justify-center sm:mt-5 mt-3'>
        <img src={Description} className='lg:min-w-[510px] sm:max-w-[380px] max-w-[250px] object-cover'/>
        <img src={Description2} className='lg:min-w-[510px] sm:max-w-[380px] object-cover max-w-[250px]' />
    </div>
</div>
  )
}

export default SingleDescription