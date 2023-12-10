import React from 'react'
import { servicesData } from '../../../db/dummy'
import { ServiceHeading } from "../../../components/ServiceContainer/ServiceHeading"
function SEO() {
    return (
        <main>
            <ServiceHeading
                title={servicesData[0]?.heading}
                // icon1={ }
                // icon2={ }
                desc={servicesData[0]?.list}
                className
            />
        </main>
    )
}

export default SEO