import React from 'react'

const AboutSection = () => {
  return (
    <>
        <div className='about container w-[880px]'>
            <div className='firstRow flex items-center justify-center gap-4 content-style'>
                <div className='left basis-1/2 bg-[#f7f7f7] rounded-4xl p-6'>
                   <h2 className='max-w-[320px] leading-10'>Full-stack developer <span className=''>with a love for clean UI and fast apps</span> </h2>
                   <div className='avatar-wrapper flex items-center justify-center p-12'>
                    <img src="/images/avatar2.avif" alt="" className='max-w-[220px]'/>
                   </div>
                </div>
                <div className='right basis-1/2 flex flex-col gap-4'>
                    <div className='basis-1/2 bg-[#f7f7f7] rounded-4xl'>
                        <div className='p-5'>
                            <span className='text-[#00000080] text-xs'>Based In</span>
                            <h3>TamilNadu, India</h3>
                        </div>
                        <div className='location-images-wrapper pt-7 pb-12'>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                            <img src="/images/locationB.svg" alt="" className='location-big'/>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                            <img src="/images/locationS.svg" alt="" className='location-small'/>
                        </div>                       
                    </div>
                    <div className='basis-1/2 bg-[#f7f7f7] rounded-4xl'>
                        <div className='p-5'>
                            <span className='text-[#00000080] text-xs'>Coding Since</span>
                            <h3>April 2024</h3>
                        </div>
                        <div className='code-interface p-5'>
                            <div className='code-interface-header'>
                                <div className='round-bullets'></div>
                            </div>
                            <div className='code-interface-content'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutSection