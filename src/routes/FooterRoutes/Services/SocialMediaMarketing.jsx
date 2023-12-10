import React from 'react'
import { servicesData } from '../../../db/dummy'
import { ServiceHeading } from '../../../components/ServiceContainer/ServiceHeading'

function SocialMediaMarketing() {
    return (
        <main>
            <ServiceHeading
                title={servicesData[1]?.heading}
                // icon1={ }
                // icon2={ }
                desc={servicesData[1]?.list}
                className
            />
        </main>
    )
}

export default SocialMediaMarketing