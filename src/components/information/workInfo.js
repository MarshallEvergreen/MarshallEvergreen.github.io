import babcock_image from '../../images/babcock_2.svg';
import earth_blox_image from '../../images/earth_blox.png';
import kratos_image from '../../images/shimadzu.png';
import sylvera_image from '../../images/sylvera.svg';
import waters_image from '../../images/waters.png';

const WorkInfo = [
    {
        'experience': [
            {
                'title': 'Machine Learning Engineer',
                'dates': 'April 2023 - present',
                'summary': 'Machine learning engineer focussed on combining deep learning and remote sensing to bring transparency to the carbon market' +
                    'and incentivize real investment in climate action.',
                'bulletPoints': [
                    'Casually doing my best to save the planet 🌳',
                    'Researching and developing novel deep learning algorithms to be applied to satellite data',
                    'Engineering ML pipelines according to software engineering best standard to ensure they are robust, scalable and extensible.',
                    'Liaising with stakeholders to ensure our ML solutions are actually brining value to customers'
                ]
            }
        ],
        'link': 'https://www.sylvera.com/',
        'tabName': 'Sylvera',
        'company': 'Sylvera',
        'image': sylvera_image
    },
    {
        'experience': [
            {
                'title': 'Data Scientist & Engineer',
                'dates': 'October 2022 - March 2023',
                'summary': 'Leading the development of data processing pipelines and methodologies to analyse real time data streamed remotely from ' +
                    'Liquid Gas Equipment (LGE) instrumentation.',
                'bulletPoints': [
                    'Leading the deployment of the infrastructure and practices required to productionise data science solutions ' +
                    'into commercial products. This is a new endeavour for Babcock and I am liaising with business wide ' +
                    'stakeholders to ensure solutions work across the business and remain robust',
                    'Developing machine learning and artificial intelligence solutions to ' +
                    'minimise operational downtime and ensure equipment is running efficiently as possible; aiding the shipping industry in ' +
                    'meeting its net zero commitments',
                    'Developing digital twins of instrumentation to aid process (chemical) engineers understand how systems ' +
                    'are operating in the field'
                ]
            }
        ],
        'link': 'https://www.babcockinternational.com/what-we-do/marine/energy-and-marine/babcocklge/',
        'tabName': 'Babcock LGE',
        'company': 'Babcock LGE',
        'image': babcock_image
    },
    {
        'experience': [
            {
                'title': 'Data Scientist',
                'dates': 'March 2022 - August 2022',
                'summary': 'Data scientist at a fast paced startup aiming to make earth observation accessible to everyone, ' +
                    'regardless of expertise. I support the development of new earth observation workflows ' +
                    'by developing data science pipelines and prototyping new algorithms.',
                'bulletPoints': [
                    'Collated historical windthrow events from the Copernicus Emergency Management Service to facilitate ' +
                    'development of new windthrow algorithms in Sentinel-1 data.',
                    'Developed automated workflows to scrape, encode and create training data from available earth engine ' +
                    'functions and image collections IDs. Developed algorithms to recommend useful earth engine collections ' +
                    'to users based on previous workflow usages.'
                ]
            }
        ],
        'link': 'https://www.earthblox.io/',
        'company': 'Earth Blox',
        'tabName': 'Earth Blox',
        'image': earth_blox_image
    },
    {
        'experience': [
            {
                'title': 'Software Engineer',
                'dates': 'Dec 2020 - Aug 2021',
                'summary': 'Responsible for feasibility studies and driving the adoption of new technologies/practices. ' +
                    'Worked with C#, Azure, Python, Specflow, Gherkin, Appium and more!',
                'bulletPoints': [
                    'Drove the adoption of modern practices and held workshops, demonstrations and presentations',
                    'Developed a test framework with the capability to automate at least 50% of the existing manual testing',
                    'Incorporated Azure into the existing infrastructure to improve CI/CD'
                ]
            }
        ],
        'image': kratos_image,
        'company': 'Kratos Analytical',
        'tabName': 'Kratos Analytical',
        'link': 'https://www.kratos.com/',

    },
    {
        'experience': [
            {
                'title': 'Software Engineer',
                'dates': 'Nov 2017 - Dec 2020',
                'summary': 'Responsible for the design and implementation of Mass Spectrometer control software. Working within a ' +
                    'microservice architecture with C++, C#, Python, Lua, Docker, Angular2+ and more!',
                'bulletPoints': [
                    'Created deep simulations of real time data and instrument behaviour',
                    'Developed self-diagnosing and automated instrument setup procedures',
                    'Pioneered the use of python for developing new data analysis techniques',
                    'Investigated how machine learning could be utilised for predictive maintenance',
                ]
            },
            {
                'title': 'Development Scientist',
                'dates': 'Jun 2016 - Sep 2016',
                'summary': 'Involved in the development process and testing of a new mass spectrometer.',
                'bulletPoints': [
                    'Carried out component and sub-system testing on a prototype mass spectrometer',
                    'Gained knowledge in maintaining mass spectrometry systems, specifically with GC-MS systems',
                    'Suggested design improvements in relation to potential faults and liaised with mechanical engineers in Singapore about these issues'
                ],
            }
        ],
        'image': waters_image,
        'link': 'https://www.waters.com/',
        'company': 'Waters',
        'tabName': 'Waters'
    }
]

export default WorkInfo
