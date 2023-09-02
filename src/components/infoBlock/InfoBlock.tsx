import React from 'react';

import "./infoBlock.scss"

interface InfoBlockInterface {
    header:string,
    subTitle:string,
    main1:string,
    main2:string,
    srcImg:string
  }
  
  export const InfoBlock: React.FC<InfoBlockInterface> = ({header,subTitle,main1,main2,srcImg}) => {
    return (
        <>
            <div className='infoBlock'>
                <div className='infoBlock__text'>
                    <div className='infoBlock__text--header'>{header}</div>
                    <div className='infoBlock__text--subTitle' >{subTitle}</div>
                    <div className='infoBlock__text--main'>
                        <p style={{ marginBottom: "32px" }}>{main1}</p>
                        <p >
                            {main2}
                        </p>
                    </div>
                    <div style={{ display: 'flex', width: "100%", justifyContent: 'center' ,height:"100%", alignItems:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" viewBox="0 0 34 39" fill="none">
                            <path d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z" fill="#181717" />
                        </svg>
                    </div>
                </div>
                <img src={srcImg} className='infoBlock_img' />

            </div>
            <hr style={{ marginBottom: "128px" }}></hr>
        </>
    );
}


